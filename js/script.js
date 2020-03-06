$(document).ready(function(){
    $("#page").show()
    $("#result").hide()
})

function getResult(){
    event.preventDefault()
    $("#page").hide()
    const buyer = $("#name").val()
    const thing = $("#type").val()
    $("#result").append(`
    <h1>
        Terima kasih ${buyer} telah berbelanja di Bajuku!
    </h1>
    <br>
    <p>
        Semoga ${thing} awet digunakan yaa!
    </p>
    `)
    $("#result").show()
}