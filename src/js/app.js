var $=require('jquery');

$(document).ready(function(){
  $('.dropdown').mouseenter(function(){
    $(this).children('.dropdown_menu').toggle();
  });

  $('.dropdown').mouseleave(function(){
    $(this).children('.dropdown_menu').toggle();
  });

});
