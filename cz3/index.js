$('#submit').click(function(){
    var value = $('input').val();
    $('#result').text(value);
})

$('.btn2').click(function(){
    $('input').val('');
    $('#result').text('');
})