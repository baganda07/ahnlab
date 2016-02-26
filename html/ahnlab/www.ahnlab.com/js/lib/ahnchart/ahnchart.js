"use strict"
var AhnChart = AhnChart || (function(d3,undefined){

    var AhnChartOption = {};
    var axis_position={"x":40,"y":0},
        object_position={"x":40,"y":0},
        chkOptionList = {"svg":["selector","width","height"]
                ,"chart":["width","height"]
                ,"object":["type","dataset"]}

        // 숫자 타입에서 쓸 수 있도록 format() 함수 추가
    Number.prototype.format = function(){
        if(this==0) return 0;

        var reg = /(^[+-]?\d+)(\d{3})/;
        var n = (this + '');

        while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

        return n;
    };

    // 문자열 타입에서 쓸 수 있도록 format() 함수 추가
    String.prototype.format = function(){
        var num = parseFloat(this);
        if( isNaN(num) ) return "0";

        return num.format();
    };

    function deepObjCopy (dupeObj) {
    	var retObj = new Object();
    	if (typeof(dupeObj) == 'object') {
    		if (typeof(dupeObj.length) != 'undefined')
    			var retObj = new Array();
    		for (var objInd in dupeObj) {
    			if (typeof(dupeObj[objInd]) == 'object') {
    				retObj[objInd] = deepObjCopy(dupeObj[objInd]);
    			} else if (typeof(dupeObj[objInd]) == 'string') {
    				retObj[objInd] = dupeObj[objInd];
    			} else if (typeof(dupeObj[objInd]) == 'number') {
    				retObj[objInd] = dupeObj[objInd];
    			} else if (typeof(dupeObj[objInd]) == 'boolean') {
    				((dupeObj[objInd] == true) ? retObj[objInd] = true : retObj[objInd] = false);
    			}
    		}
    	}
    	return retObj;
    }

    //drawChart: optionInit And chartDraw function
    var drawChart = function(option){
        var svgGroup,
            axis,
            legend,
            object;

        if(chkOption(option)){
            AhnChartOption = option;
            svgGroup = selectCanvas(AhnChartOption.svg)

            axis = new Axis(AhnChartOption.chart);
            axis.draw(svgGroup);

            legend = new Legend(AhnChartOption);
            legend.draw(svgGroup);

            object = new ChartObject(AhnChartOption)
            object.draw(svgGroup);


        }else{
            return false;
        }
    };

    var remakeData = function(dataset, domain, originData){
        var after_data = [];
        for(var i = 0; i < dataset.length; i++){
            after_data.push(dataset[i]*(originData/domain[1]-domain[0]));
        }
        return after_data;
    };

    var getMaxData = function(){
        var dataSet=[];
        var max = 0;
        var value = 0;
        var base = 1;
        var option = AhnChartOption.object;

        if(option.length > 0){
            for(var i = 0; i < option.length; i++){
                var _option = option[i];

                if(_option.dataset[0] instanceof Array){
                    for(var j = 0; j < _option.dataset[0].length; j++){
                        //var data = _option.dataset
                        dataSet.push(getDataSum(_option.dataset, j));
                    }
                }else{
                    for(var k = 0; k < _option.dataset.length; k++){
                        dataSet.push(_option.dataset[k]);
                    }
                }
            }
        }

        for(i=0; i<dataSet.length; i++){
            if (max < dataSet[i]){
                max = dataSet[i]+10;
            }
        }

		/*
        for(i=0; true; i++){
            value = parseInt(max/base);
            if (value < 10){
                break;
            }else{
                base = base * 10;
            }
        }
        max = (value+1)*base;*/
        return max;
    };

    var getDataSum = function(arr, index){
        var sum = 0;
        for(var i = 0; i < arr.length; i++){
            sum = sum + arr[i][index].p;
        }

        return sum;
    };

    var selectCanvas = function(option){
       var base = d3.select(option.selector)
					.append("div")
					.attr("id",option.selector.split("#")[1]+"_container")
		            .style("width",option.width+"px")
					.style("height",option.height+"px")
			        .style("position","relative")
		 		    .attr("class","ahnChart_base");

        var canvas = base.append("svg")
                        .attr("width",option.width)
                        .attr("height",option.height).attr("class","ahnChart");
        return canvas;
    };

    var getPointDistance = function(array, width){
        return (width-(object_position.x*2))/(array.length-1);
    }

    function drawTooltip(selector, text, legend, label, index, dx, dy, callback){
        var tooltipDiv = d3.select(selector+"_container")
                            .append("div")
                            .attr("id","AhnChart_tooltip")
                            .attr("class", "tooltip")
                            .style("position","absolute");

            tooltipDiv.style("top", dy+"px")
                    .style("left", dx+"px");

            tooltipDiv = tooltipDiv
                        .html(function(){
                            if(callback != undefined){
                                return callback(text, legend, label)
                            }
                            return "<p style='background-color:white;letter-spacing:0;border-radius:3px;margin:0;display:inline-block;padding:5px;border:1px solid #777;line-height:16px;'>"
                            +text.format()+"</p>"
                        })
        };

        function removeTooltip(){
            d3.select("#AhnChart_tooltip").remove();
        };

    //checkOption: validating Essential Option
    var chkOption = function(option){
        var chkResult = true;
        for(var prop in chkOptionList){
            var _option = option[prop];
            var _chkOption = chkOptionList[prop];
            if(_option == undefined){
                console.error("there is no essential property in option")
                chkResult = false;
                break;
            }else{
                for(var i = 0; i < _chkOption.length; i++){
                    if(_option instanceof Array){
                        for(var j = 0; j < _option.length;j++){
                            if(_option[j][_chkOption[i]] == undefined){
                                console.error("there is no esstial property in "+prop+" Option");
                                chkResult = false;
                            }
                        }
                    }else{
                        if(_option[_chkOption[i]] == undefined){
                            console.error("there is no esstial property in "+prop+" Option");
                            chkResult = false;
                        }
                    }
                }
            }
        }
        return chkResult;
    };


    //Axis Class
    var Axis = function(option){
        this.option = option
        if(option.axis != undefined){
            if(option.axis.yAxis != undefined){this.yOption = option.axis.yAxis;
                if(option.axis.yAxis.unit != undefined){this.unitOption = option.axis.yAxis.unit;}
            }
            if(option.axis.xAxis != undefined){this.xOption = option.axis.xAxis;}
        }
    };

    Axis.prototype.draw = function(svgGroup){
        var group = svgGroup.append("g").attr("class", "axis");
        var y_axis, x_axis, unit;
        group.attr("transform","translate("+this.option.x+","+this.option.y+")");

        if(this.yOption != undefined){
            y_axis = new YAxis(this.yOption, this.option.height);
            y_axis.draw(group);

            if(this.yOption.unit != undefined){
                unit = new Unit(this.unitOption)
                unit.draw(group);
            }
        }
        if(this.xOption != undefined){
            x_axis = new XAxis(this.xOption, this.option.height, this.option.width);
            x_axis.draw(group);
        }
    };

    //yAxis Class
    var YAxis = function(option,height){
        this.height=height;
        this.option=option;
        this.yScale = this.setScale(option.domain, this.height);
    };

    YAxis.prototype.setScale = function(domain, height){
        if (domain === undefined){domain = [0,height];}
		else if(domain[1] === "auto"){
			domain = [domain[0], getMaxData()];
		}

        var yScale = d3.scale.linear()
            .domain(domain)
            .range([height, 0]);
        return yScale;
    };

    YAxis.prototype.draw = function(group){
        this.drawLine(group);
        this.drawTick(group,this.yScale);
    };

    YAxis.prototype.drawLine = function(group){
        group.append("rect")
           .attr("class","axis_x")
           .attr("height", this.height+5)
           .attr("width", 1)
           .attr("transform", "translate(0, -5)");
    };

    YAxis.prototype.drawTick = function(group, yScale){
        var unitNum = (this.option.unit != undefined)?(this.option.unit.number||1):1;
        group.call(
            d3.svg.axis()
                .scale(yScale)
                .orient("left")
                .tickFormat(function(d){
                                if(d >= unitNum){
                                    return (d/unitNum).format();
                                }else{
                                    return d.format();
                                }
                            })
        );
        d3.selectAll("path.domain").style("opacity", 0.0);
    };

    //xAxis Class
    var XAxis = function(option,height,width){
        this.height = height;
        this.width = width;
        this.option = option;
    };

    XAxis.prototype.draw = function(group){
        this.drawLine(group);
        this.drawLabel(group);
    };

    XAxis.prototype.drawLine = function(group){
        group.append("rect")
           .attr("class","axis_x")
           .attr("width", this.width)
           .attr("height", 1)
           .attr("transform", "translate(0,"+(this.height)+")")
    };

    XAxis.prototype.drawLabel = function(group){
        var option = this.option, height = this.height,width = this.width;
        if(option.label != undefined){
            if(option.label instanceof Array){
                group.append("g").selectAll("text.label").data(option.label)
                .enter()
                .append("text")
                .attr("class","label")
                .text(function(d,i){
                    return d;
                })
                .attr("x",function(d, i){
                    return i*getPointDistance(option.label,width)+object_position.x-(this.getComputedTextLength()/2);
                })
                .attr("y",function(d, i){
                    return height+20;
                });
            }else{
                console.error("label can be only Array");
            }
        }
    };

    //unitClass
    var Unit = function(option){
        this.option = option;
    };

    Unit.prototype.draw= function(group){
        var name = this.option.name
            ,num = this.option.number || 1
            ,x = this.option.x || 0
            ,y = this.option.y || 0;

        if(this.option.name != undefined){
            group.append("text")
                .attr("transform", "translate(" + x + "," + y + ")")
                .text("( 단위: "+name+" )")
                .style("font-size","11px")
                .style("fill","#333");
        }
    }

    //legend class
    var Legend = function(option){
        this.legend_type;
        this.objectOption = option.object;
        this.legendOption = option.chart.legend;
        this.svgWidth = option.svg.width;

        this.legendList=[];
        this.colorList=[];
        this.dataSet=[];

        if(this.objectOption.length > 0){
            for(var i = 0; i < this.objectOption.length; i++){
                var _option = this.objectOption[i];
                if(_option.legend != undefined){
                    if(_option.legend instanceof Array){
                        for(var j = 0; j<_option.legend.length; j++){
                            this.legendList.push(_option.legend[j]);
                            this.colorList.push(_option.color[j]);
                            this.dataSet.push(_option.dataset[j]);
                        }
                    }else{
                        this.legendList.push(_option.legend);
                        this.colorList.push(_option.color);
                    }
                }
            }

        }
    };

    Legend.prototype.draw= function(svgGroup){
        if(this.legendOption != undefined){
            var group = svgGroup.append("g").attr("class", "legend");
            var _legend = this.legendList;
            var _dataset = this.dataSet;
            var _color = this.colorList;
            var _width = this.svgWidth;
            var _legendOption = this.legendOption;
            var _position={"x":this.legendOption.x || 0, "y":this.legendOption.y || 0}
                ,align = this.legendOption.align || "vertical";
            var defaultHTMLFormater = function(d, i){
                return "<p style='display:inline-block;margin:0 5px 0 0;width:10px;height:10px;background-color:"+_color[i]+"'></p>"+d;
            }

            var legendDiv = d3.select(AhnChartOption.svg.selector)
            .style("position","relative")
            .append("div")
            .attr("class", "legend")
            .style("position","absolute");

            legendDiv.style("top",this.legendOption.y+"px")
                     .style("left",this.legendOption.x+"px")

            legendDiv = legendDiv.selectAll("p")
                    .data(_legend).enter()
                    .append("p")
                    .style("display",function(){
                        if(align === "horizon")return "inline-block";
                        else return "block";
                    })
                    .style("padding-left","20px")
                    .style("text-align","left")
                    .attr("class","legend_li")
                    .html(function(d,i) {
                        if(_legendOption.format !== undefined){
                            return _legendOption.format(d, (_dataset[i] === undefined)? 0: _dataset[i], _color[i], i);

                        }
                        if(_legendOption.data === true){
                            return "<p style='display:inline-block;margin:0 5px 0 0;width:10px;height:10px;background-color:"+_color[i]+"'></p>"+d
                                    +" : "+_dataset[i]+_legendOption.Unit;
                        }
                        return defaultHTMLFormater(d,i);
                    })
                    .on("mouseover", function(d) {
                        d3.select(this)
                            .style("font-weight","bold")
                    })
                    .on("mouseout", function(d) {
                        d3.select(this)
                            .style("font-weight","normal")
                    });
        }
    };

    //chartObject class
    var ChartObject = function(option){
        this.objectOption = option.object;
        this.height = option.chart.height;
        this.width = option.chart.width;
        this.selector = option.svg.selector;
        if(option.chart.axis !== undefined && option.chart.axis.xAxis !== undefined){
            this.label = option.chart.axis.xAxis.label;
        }
        this.axis_position = {"x":option.chart.x,"y":option.chart.y}
        this.objectList = {
          'line': this.drawLine,
          'bar': this.drawBar,
          'circle': this.drawCircle,
          'stackBar':this.drawStackBar
        };

        if(option.chart.axis != undefined && option.chart.axis.yAxis != undefined && option.chart.axis.yAxis.domain!= undefined){
            if(option.chart.axis.yAxis.domain[1] === "auto"){
                this.domain = [option.chart.axis.yAxis.domain[0], getMaxData()];
            }else{
                this.domain = option.chart.axis.yAxis.domain;
            }
        }
        else{
            this.domain = [0,this.height];
        }

    };

    ChartObject.prototype.draw = function(svgGroup){
      var option = this.objectOption;
      var objectList = this.objectList;
      var group = svgGroup.append("g").attr("class","objectGroup");
      group.attr("transform","translate("+(object_position.x+this.axis_position.x)+","+(object_position.y+this.axis_position.y)+")")

      for(var i = 0; i < option.length; i++){
        option[i].width = this.width;
        option[i].height = this.height;
        option[i].domain =this.domain;
        option[i].selector = this.selector;
        option[i].label = this.label;
        option[i].startY = this.axis_position.y;
        option[i].startX = object_position.x+this.axis_position.x;
        if(objectList[option[i].type] != undefined){objectList[option[i].type](group, option[i]);}
        else{console.error("there is no chartType");}
      }
    };

    ChartObject.prototype.drawLine = function(group, option){var line = new Line(option);line.draw(group);};
    ChartObject.prototype.drawBar = function(group, option){var bar = new Bar(option);bar.draw(group);};
    ChartObject.prototype.drawCircle = function(group, option){var circle = new Circle(option);circle.draw(group);};
    ChartObject.prototype.drawStackBar = function(group, option){var stackBar = new StackBar(option);stackBar.draw(group);}

    var Line = function(option){
        this.domain = option.domain;
        this.dataset = option.dataset;
        this.height = option.height;
        this.width = option.width;
        this.color = option.color;
        this.label = option.label;
        this.legend = option.legend;
        this.tooltip = option.tooltip;
        if(this.tooltip !== undefined){
            this.tooltipFunc = option.tooltip.format;
        }else{
            this.tooltipFunc=undefined;
        }
        this.selector = option.selector;
        this.startY = option.startY;
        this.startX = option.startX;
        this.pointDistance = getPointDistance(this.dataset, this.width);
        this.before_point = 0;
    };

    Line.prototype.setLineInit = function(){
        var pointDistance = this.pointDistance;
        var height = this.height;

        return d3.svg.line()
            .x(function(d,i){
                return 0;
            })
            .y(function(d,i){
                return 0;
            })
    };

    Line.prototype.setLine = function(){
        var pointDistance = this.pointDistance;
        var height = this.height;

        return d3.svg.line()
            .x(function(d,i){return i*pointDistance;})
            .y(function(d,i){return height-d;});
    };

    Line.prototype.draw = function(group){
        var pointDistance = this.pointDistance;
        var chartHeight = this.height
        var color = this.color;
        var dataset = this.dataset;
        var _dataset = remakeData(dataset, this.domain, this.height);
        var drawSpeed = 300;
        var legend = this.legend;
        var label = this.label;
        var tooltipFunc = this.tooltipFunc;
        var selector = this.selector;
        var startX = this.startX;
		var startY = this.startY;

        var lineData = [];
        for(var i = 1; i < _dataset.length;i++){
            lineData.push([_dataset[i-1], _dataset[i]])
        }

        group.append("g")
            .attr("class","lineChart")
            .selectAll("line")
            .data(lineData)
            .enter()
            .append("line")
            .attr("class", "line")
            .style("stroke",color)
            .style("fill","none")
            .style("stroke-width",4)
            .attr("x1",function(d,i){
                return i*pointDistance;
            })
            .attr("y1",function(d,i){
                return chartHeight-d[0];
            })
            .attr("x2",function(d,i){
                return i*pointDistance;
            })
            .attr("y2",function(d,i){
                return chartHeight-d[0];
            })
            .transition()
            .duration(drawSpeed)
            .delay(function(d, i){
                return i*drawSpeed;
            })
            .ease("slide")
            .attr("x2",function(d,i){return (i+1)*pointDistance;})
            .attr("y2",function(d,i){return chartHeight-d[1];})

        group.append("g")
            .attr("class","point")

            .selectAll("circle")
            .data(_dataset)
            .enter()
            .append("circle")
            .on("mouseover",function(d, i){
                d3.select(this).attr("r",10)
                    .style("stroke",color)
                    .style("fill",color)
                    .style("stroke-width",5);
                drawTooltip(selector,dataset[i],legend,label[i],i,pointDistance*i+startX-35,chartHeight-d-50+startY,tooltipFunc);
            })
            .on("mouseout",function(){
                d3.select(this).attr("r",5)
                    .style("stroke",color)
                    .style("fill",color)
                    .style("stroke-width",0);
                removeTooltip();
            })
            .attr("class","circle")
            .attr("cx",function(d,i){return i*pointDistance;})
            .attr("cy",function(d,i){return chartHeight-d;})
            .attr("r",0)
            .style("stroke","none")
            .style("stroke-width","0")
            .style("fill",color)
            .transition()
            .duration(drawSpeed)
            .delay(function(d, i){
                return i*drawSpeed;
            })
            .ease("slide")
            .attr("r",15)
            .attr("cx",function(d,i){return i*pointDistance;})
            .attr("cy",function(d,i){return chartHeight-d;})
            .transition()
            .ease("slide")
            .duration(300)
            .attr("r",5)
    };

    var Bar = function(option){
        this.domain = option.domain;
        this.dataset = option.dataset;
        this.height = option.height;
        this.width = option.width;
        this.color = option.color;
        this.pointDistance = getPointDistance(this.dataset,this.width);

        this.label = option.label;
        this.legend = option.legend;
        this.tooltip = option.tooltip;
        if(this.tooltip !== undefined){
            this.tooltipFunc = option.tooltip.format;
        }else{
            this.tooltipFunc=undefined;
        }
        this.selector = option.selector;
        this.startX = option.startX;
    };

    Bar.prototype.draw = function(group){
        var pointDistance = this.pointDistance;
        var chartHeight = this.height
        var color = this.color;
        var dataset = this.dataset;
        var _dataset = remakeData(dataset, this.domain, this.height);
        var barWidth = 30;

        var legend = this.legend;
        var label = this.label;
        var tooltipFunc = this.tooltipFunc;
        var selector = this.selector;
        var startX = this.startX;

        group.append("g")
            .attr("class","bar")
            .selectAll("rect")
            .data(_dataset)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("height", 0)
            .attr("width", barWidth)
            .style("fill",color)
            .attr("x", function(d,i){
                return i*pointDistance-(barWidth/2);
            })
            .attr("y", function(d){
                return chartHeight;
            })
            .on("mouseover", function(d,i){
                d3.select(this)
                .style("opacity","0.6");
                drawTooltip(selector,dataset[i],legend,label[i],i,pointDistance*i+startX-35,chartHeight-d-10,tooltipFunc);
             })
            .on("mouseout", function(d,i){
                d3.select(this)
                    .style("opacity","1");
                removeTooltip();
            })
            .transition()
            .duration(300)
            .delay(function(d, i){
                return i*300;
            })
            .ease("slide")
            .attr("height", function(d,i){
                return _dataset[i];
            })
            .attr("y", function(d,i){
                return chartHeight-_dataset[i];
            });
    };


    var Circle = function(option){
      this.dataset = option.dataset;
      this.legend = option.legend;
      this.height = option.height;
      this.width = option.width;
      this.color = option.color;
      this.inner = option.inner;
      this.r = option.r;
      this.pointDistance = getPointDistance(this.dataset, this.width);
    };

    Circle.prototype.draw = function(group){
        var pointDistance = this.pointDistance;
        var chartHeight = this.height
        var color = this.color;
        var inner = this.inner;
        var r = this.r;
        var dataset = this.dataset;
        var legend = this.legend;
        var total = d3.sum(dataset);
        var dataLength = this.dataset.length;

        if(dataset.length <= 0){
            //r = 0;
            //inner=0;
            dataset = [100];
            color = ["#f2f2f2"];
        }

        var circle = group.append("g").attr("class","circleChart")
            .data([dataset])
            .attr("width", 300)
            .attr("height", 400)
            .append("g")
            .attr("transform", "translate(180,170)");

        if(dataLength > 0){
            var textTop = circle.append("text")
                .attr("dy", ".35em")
                .style("text-anchor", "middle")
                .attr("class", "textTop")
                .text( "TOTAL" )
                .attr("y", -10)

            var textBottom = circle.append("text")
                .attr("dy", ".35em")
                .style("text-anchor", "middle")
                .attr("class", "textBottom")
                .text(total.toFixed(0) + "%")
                    .attr("y", 10);
        }

        var arc = d3.svg.arc()
            .innerRadius(inner)
            .outerRadius(r);

        var arcOver = d3.svg.arc()
            .innerRadius(inner + 10)
            .outerRadius(r + 10);

        var pie = d3.layout.pie()
            .value(function(d){return d;}).sort(null);

        var arcs = circle.selectAll("g.slice")
            .data(pie)
            .enter()
            .append("g")
            .attr("class", "slice")
            .attr("id",function(d,i){
              return "sector" + i
            })

        if(dataLength > 0){
            arcs.on("mouseover", function(d,index){
              pathOver(d,legend[index],this);
            })
            .on("mouseout", function(d){
              pathOut(d,this)
            });
        }

        function pathOver(d,label,obj){
            d3.select(obj).select("path").transition()
                .duration(200)
                .attr("d", arcOver);
            textTop.text(label)
                .attr("y", -10);
            textBottom.text(d3.select(obj).datum().data.toFixed(2)+"%")
                .attr("y", 10);
        }

        function pathOut(d,obj){
            d3.select(obj).select("path").transition()
                .duration(100)
                .attr("d", arc);

            textTop.text( "TOTAL" )
                .attr("y", -10);

            textBottom.text(total.toFixed(0) + "%");
          }


        arcs.append("path")
            .attr("fill", function(d, i) { return color[i];})
            .transition()
            .duration(function(d,i){
                if(dataLength <= 0){
                    return 0;
                }
                if( i == 4){
                    return 30;
                }else{
                    return 150;
                }
            })
            .delay(function(d,i){
                if(dataLength <= 0){
                    return 0;
                }
                if(i == 5){
                    return 630;
                }else{
                    return i*150;
                }
            })
            .ease("linear")
            .attrTween("d", function(d,i){
                var interpolate = d3.interpolate({startAngle : d.startAngle, endAngle : d.startAngle},{startAngle : d.startAngle, endAngle : d.endAngle});
                return function(t){
                        return arc(interpolate(t));
                    }
            });
    };


    var StackBar = function(option){
        this.dataset = option.dataset;
        this.domain = option.domain;
        this.height = option.height;
        this.width = option.width;
        this.color = option.color;
        this.format = option.format;
        this.legend = option.legend;
        this.tooltipFunc = option.tooltip.format;
        this.selector = option.selector;
        this.startX = option.startX;
        this.pointDistance = getPointDistance(this.dataset[0],this.width);

    };

    StackBar.prototype.remakeData = function(dataset, domain, originData){
        var data = deepObjCopy(dataset);

        for(var i = 0; i < data.length; i++){
            for(var j=0; j <data[i].length;j++){
                data[i][j].p = data[i][j].p*(originData/domain[1]-domain[0]);
            }
        }

        return data;
    }

    StackBar.prototype.draw = function(group){
        var pointDistance = this.pointDistance;
        var selector = this.selector;
        var chartHeight = this.height;
        var legend = this.legend;
        var color = this.color;
        var dataset = this.dataset;
        var domain = this.domain;
        var format = this.format;
        var startX = this.startX;
        var _dataset = this.remakeData(dataset, this.domain, this.height);
        var barWidth = 30;
        var stack = d3.layout.stack().y(function(d){
            return d.p;
        });
        var tooltipFunc = this.tooltipFunc;


        group.selectAll("g.layer")
            .data(stack(_dataset))
            .enter()
            .append("g")
            .attr("fill", function(d,i){
                return color[i];
            })
            .attr("class","layer")
            .selectAll("rect")
            .data(function(d,i){
                for(var j=0;j<d.length;j++){
                    d[j].legend = legend[i];
                }
                return d;
            })
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("fill",false)
            .attr("height", function(d){return 0;})
            .attr("width", barWidth)
            .attr("x", function(d,i){
                return i*pointDistance-(barWidth/2);
            })
            .attr("y", function(d){
                return chartHeight;
            })
            .on("mouseover", function(d,i){
                d3.select(this)
                .style("opacity","0.6");
                drawTooltip(selector, d.y/(chartHeight/(domain[1]-domain[0])), d.legend, d.name, i, i*pointDistance-(barWidth/2)+startX+35, chartHeight-d.y0-d.y, tooltipFunc);
            })
            .on("mouseout", function(d,i){
                d3.select(this)
                    .style("opacity","1");
                removeTooltip();
            })
            .transition()
            .duration(200)
            .delay(function(d, i){
                return i*200;
            })
            .ease("slide")
            .attr("height", function(d,i){
                return d.y;
            })
            .attr("y", function(d,i){
                return chartHeight- d.y0 - d.y;
            });
    };

    /*public Property*/
    return{
        /*public Method*/
        draw: drawChart
    };
})(d3);
