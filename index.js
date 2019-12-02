showHome()

function initialSetup() {
    $('.navbar').css('background-color', 'transparent')
    $('#blog').hide()
    $('#head-content').show()
    $('#contact-box').hide()
}

function showHome() {
    $('.navbar').css('background-color', 'transparent')
    $('#blog').hide()
    $('#head-content').show()
    $('#contact-box').hide()
    $('#quotes-box').show(400)
    
}

function showBlog() {
    $('.navbar').css('background-color', '#f8f8f8')
    $('#head-content').hide()
    $('#blog').show()
}
 
function showContact() {
    $('.navbar').css('background-color', 'transparent')
    $('#blog').hide()
    $('#head-content').show()
    $('#quotes-box').hide()
    $('#contact-box').fadeIn(400)
}
