$(document).ready(function(){
    $('.slider').slick({
        fade: true,
        lazyLoad: 'ondemand'
    });

    changeClientNameBasedOnSlide();

    $(".slider").on("afterChange", function (){
        changeClientNameBasedOnSlide();
    });

    $('.work-name').on('click', function() {
        filterSlides($(this));
    });

    function filterSlides(filterElement) {
        var filterClass = filterElement.attr('data-work');
        if($('.active-filter').attr('data-work') == filterClass) {
            return $('.work-name').removeClass('active-filter') && $('.slider').slick('slickUnfilter');
        }
        $('.work-name').removeClass('active-filter'); 
        $('.slider').slick('slickUnfilter');
        $('.slider').slick('slickFilter', '.' + filterClass);
        filterElement.addClass('active-filter');
    }

    function changeClientNameBasedOnSlide() {
        if($('.slick-active img').attr('data-client')) {
            var clientNameFromSlide = $('.slick-active img').attr('data-client');
            var modifiedClientNameFromSlide = changeClientShortNameToFullName(clientNameFromSlide);

            $('#client-name-in-works').text(modifiedClientNameFromSlide);
        } else {
            return false;
        }
    }

    function changeClientShortNameToFullName(shortname) {
        var extractedWords = shortname.split("-");
        var extractedWordsCapitalized = extractedWords.map(word => capitalizeFirstLetter(word));
        var fullNameOfClient = '';

        if(extractedWordsCapitalized.length > 1) {
            fullNameOfClient = extractedWordsCapitalized.join(' ');
        } else {
            fullNameOfClient = extractedWordsCapitalized[0];
        }

        return fullNameOfClient;
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    animateEachListItem();

    function animateEachListItem() {
        $('#works-list li').each(function(index){
            var item = $(this);
            item.addClass('animated fadeOut');
            setTimeout(function(){ item.removeClass('fadeOut').addClass('animated fadeIn'); }, (index + 1) * 200);
        });
    }
});