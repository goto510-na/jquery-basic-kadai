$(function(){
    $('#fade-in').on('click', function(){
       $('#target').fadeIn(); 
    });
    $('#fade-out').on('click', function(){
       $('#target').fadeOut(); 
    });
    $('#change-color').on('click', function(){
        $('#target').css('color','red');
    });  
    $('#change-text').on('click', function(){
        $('#target').text('Hello!');
    });  
});
