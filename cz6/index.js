// $('#section-1-header').click(function(){
//     $('#section-1-content').show();
// });


$(".section__header").click(function(e) {
    let id = e.target.nextSibling.nextSibling.id;
    $("#" + id).slideToggle("slow");
  });


