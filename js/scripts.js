$(document).ready(function () {
    // Video Player
    $('.open-player-btn').fancybox({});

    // Masks
    // var input1 = document.getElementById('form-1-phone');
    // var maskOptions1 = {
    //     mask: '+{38} (000)-000-00-00'
    // };
    // var mask1 = IMask(input1, maskOptions1);

    // var input2 = document.getElementById('form-2-phone');
    // var maskOptions2 = {
    //     mask: '+{38} (000)-000-00-00'
    // };
    // var mask2 = IMask(input2, maskOptions2);

    // var input3 = document.getElementById('form-3-phone');
    // var maskOptions3 = {
    //     mask: '+{38} (000)-000-00-00'
    // };
    // var mask3 = IMask(input3, maskOptions3);

    // Form Submission
    $('#form_161570').ajaxSubmit({
        url: "",
        type: "POST",
        success: function (data, status) {
            window.location.replace('thanks.html');
        },
        error: function (data, status) {
            window.location.replace('thanks.html');
        }
    });

    let mobileHeader = document.querySelector('.mobile-header');
    let mainContent = document.querySelector('.main-content');
    let activationHeight = mainContent.offsetHeight;
    document.addEventListener('scroll', () => {
        let scrolled = window.scrollY;
        if (scrolled >= activationHeight) {
            mobileHeader.classList.add('active');
        } else {
            mobileHeader.classList.remove('active');
        }
    });
});