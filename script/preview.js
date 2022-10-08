
$('.preview-items > div').on('click', function(){
    $(this).next('.preview-text_small').slideToggle(300)
    $(this).children('.preview-h3_small').toggleClass('preview-h3_small-change')
    $(this).children('.preview-br').toggleClass('preview-br-change')
})