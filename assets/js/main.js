/* var jumpToButtons = document.querySelectorAll('.jump_to');
var slideImages = document.querySelectorAll('.slide');

jumpToButtons.forEach(function(button) {
    button.addEventListener('click' , function() {
        var buttonType = button.getAttribute('data-work');
        slideImages.forEach(function(slideImage) {
            slideImage.style.display = 'block';
            if(slideImage.getAttribute('data-work') !== buttonType) {
                slideImage.style.display = 'none';
            };
        });
    });
}); */

$(document).ready(function(){
    $('.slider').slick({});

    changeClientNameBasedOnSlide();

    $(".slider").on("beforeChange", function (){
        changeClientNameBasedOnSlide();
    });

    function changeClientNameBasedOnSlide() {
        if($('.slick-active img').attr('data-client')) {
            var slideClientNameFromSlide = $('.slick-active img').attr('data-client');
            $('#client-name').text(slideClientNameFromSlide);
        } else {
            return false;
        }
    }
});