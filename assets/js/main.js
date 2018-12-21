var jumpToButtons = document.querySelectorAll('.jump_to');
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
});