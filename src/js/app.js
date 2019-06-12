var $=require('jquery');

$(document).ready(function(){
  $('.menu_item').mouseenter(function(){
    $(this).children('.dropdown_menu').toggle();
  });
  $('.menu_item').mouseleave(function(){
    $(this).children('.dropdown_menu').toggle();
  });

  $('footer').mouseenter(function(){
    $('.navbar').addClass('positionFixed').animate({width:'100%',height:'60px',lineHeight:'60px',padding:"0 20px"},1000);
  });
  $('.container_Main').mouseenter(function(){
    $('.navbar').removeClass('positionFixed').animate({width:'80%',height:'80px',lineHeight:'80px',padding:'0'});
  });
});
