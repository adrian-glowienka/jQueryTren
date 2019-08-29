$('#sel').append(new Option('volvo'));
$('#sel').append(new Option('golf'));
$('#sel').append(new Option('ignacty'));

$('.btn').click(function(){
    var value = $('#sel').val();
    $('#list').append('<li>' + value );
})

