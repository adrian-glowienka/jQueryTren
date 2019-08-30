$('.btn').click(function(){
    $.getJSON('http://api.nbp.pl/api/cenyzlota' , function(json_data){
        alert(JSON.stringify(json_data));
        });
})


