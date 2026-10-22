$('li').click(function(){
    alert('Clicked')
})

$('#btn').click(function(){
    $('#h1').text('Testing text');
    $('#h1').text(' Extra text');
});

$('#btn2').on('click',function(){
    console.log("second button is clicked");
})

$('#myDiv').click(function(){
    $(this).addClass('clicked')
})
.find('span')
.attr('title','Hover over me')

$('#btn3').click(function(){
    //$(".hidden").show(3000);
    //$(".hidden").show();
    $(".hidden").show('slow');
})

$('#btn4').click(function(){
    $(".hidden").hide('slow');
})

$('#square').click(function(){
    $('#square').animate({
        'width':'200px',
        'height':'200px'
    })
})

$('.testing').click(function(){
    $('.testing').animate({
        'left':'+=50px',
        'opacity':0.25,
        'fontSize':'30px'
    },
    300,
    function(){
        console.log("Animation is complete")
    });
});