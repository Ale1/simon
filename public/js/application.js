$(document).ready(function(){
$('#get_color').on('click',function() {

  $.ajax({
    url: '/color',
    type: 'post'

  }).done(function(server_data){
    var mycolor = JSON.parse(server_data).color;
    var mycell = JSON.parse(server_data).cell;
    var query = "ul li:eq("+mycell+")";

    $(query).css("background", mycolor)
  })

}); //on-click
});// document ready