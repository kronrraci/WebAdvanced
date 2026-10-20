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