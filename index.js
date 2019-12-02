$(document).ready(function () {

    //musicButton
    $('#music').hover(
        function () {
            // over
            $('#main2').css({'background-image':"url('https://daz19uf2q56ul.cloudfront.net/20180717105420/events-1.jpg')",'background-position':"center"});         
        }, 
        function () {
            // out
            $('#main2').css({'background-image':"",'background-position':""});    
        }
    );

    //communityButton
    $('#community').hover(
    function () {
        // over
        $('#main2').css({'background-image':"url('https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')",'background-position-y':"-550px"});         
    }, 
    function () {
        // out
        $('#main2').css({'background-image':"",'background-position':""});    
    }
    );

    //eventButton
    $('#event').hover(
        function () {
            // over
            $('#main2').css({'background-image':"url('https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80')",'background-position-y':"-450px"});         
        }, 
        function () {
            // out
            $('#main2').css({'background-image':"",'background-position':""});    
        }
    );
    
    //lastUpdate
    let updateAt = 1575114252259
    let timeNow = new Date().getTime()
    let minutes = Math.round((timeNow - updateAt)/60000)

    if(minutes < 60){
        $('.lastUpdate').append(`Last updated ${minutes} mins ago`);
    }else if(minutes >= 60 && minutes < 1440){
        let hour = Math.round(minutes/60)
        $('.lastUpdate').append(`Last updated ${hour} hours ago`);
    }else{
        let day = Math.floor(minutes/1440)
        $('.lastUpdate').append(`Last updated ${day} days ago`);
    }

    //our Comment
    let comment = [
        {title:'coba satu', story:'blablablablabablbalabalbalabalbal', },
        {title:'coba dua', story:'akutauakubisa', },
    ]
comment.forEach(element =>{
        $('#share').append(`
        <div class="card w-100">
    <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.story}</p>
    </div>
</div>
        `);

    })
    
})

function plusComment(){
$('#share').append(`
    <div class="card w-100">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a onclick="plusComment()" class="btn btn-primary">Button</a>
    </div>
</div>
    `);
}