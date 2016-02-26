$(document).ready(function () {
    $(".field-bool-chk").parent().ajaxForm({
        success: function (res) {
            if (res.Success) {
                location.href = res.RedirectUrl;
            }
        }
    });
    $(".field-bool-chk").click(function () {
        if ($(this).is(":checked")) {
            $(this).next(".field-bool-val").val(true);
        } else {
            $(this).next(".field-bool-val").val(false);
        }

        if (confirm("Do you want to change this value?")) {
            $(this).parent().submit();
        }
    });
});
