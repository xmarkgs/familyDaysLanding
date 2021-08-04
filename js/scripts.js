$(document).ready(function () {
    // Video Player
    $('.open-player-btn').fancybox({});

    // Masks
    var input1 = document.getElementById('form-1-phone');
    var maskOptions1 = {
        mask: '+{38} (000)-000-00-00'
    };
    var mask1 = IMask(input1, maskOptions1);

    var input2 = document.getElementById('form-2-phone');
    var maskOptions2 = {
        mask: '+{38} (000)-000-00-00'
    };
    var mask2 = IMask(input2, maskOptions2);

    var input3 = document.getElementById('form-3-phone');
    var maskOptions3 = {
        mask: '+{38} (000)-000-00-00'
    };
    var mask3 = IMask(input3, maskOptions3);

    // Form Submission
    $('.invitational_form_big, .invitational_form').ajaxSubmit({
        url: "",
        type: "POST",
        success: function (data, status) {
            window.location.replace('thanks.html');
        }
    });
});