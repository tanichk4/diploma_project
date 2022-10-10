$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('about-rotate-icon')
    $(this).parent('.about-items').toggleClass('change-color')
    $(this).children('.about-location').toggleClass('change-text')
    $(this).next('.about-text').slideToggle(300)
})