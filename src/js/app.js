var $=require('jquery');
$(document).ready(function(){
  $('.menu_item').mouseenter(function(){
    $(this).children('.dropdown_menu').toggle();
  });

  $('.menu_item').mouseleave(function(){
    $(this).children('.dropdown_menu').toggle();
  });
});
