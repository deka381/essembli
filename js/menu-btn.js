$(document).ready(function (){

///////////////////////////
$(".li-about").click(function (){
   $('html, body').animate({
     scrollTop: $('#who').offset().top
}, 500, 'linear');
});
///////////////////////////
$(".li-team").click(function (){
   $('html, body').animate({
     scrollTop: $('#team').offset().top
}, 500, 'linear');
});
///////////////////////////
$(".li-compet").click(function (){
   $('html, body').animate({
     scrollTop: $('#competences').offset().top
}, 500, 'linear');
});
///////////////////////////
$(".li-manag").click(function (){
   $('html, body').animate({
     scrollTop: $('#management').offset().top
}, 500, 'linear');
});
///////////////////////////
$(".li-carer").click(function (){
   $('html, body').animate({
     scrollTop: $('#career').offset().top
}, 500, 'linear');
});
///////////////////////////
$(".li-contact").click(function (){
   $('html, body').animate({
     scrollTop: $('#contact').offset().top
}, 500, 'linear');
});



let $pl=$(".li-pl").find('a');
let $eng=$(".li-eng").find('a');
$(".li-pl").find("a").css("color","rgba(52, 152, 219,1.0)");

$pl.on("click",function () {
  $pl.css("color","rgba(52, 152, 219,1.0)");
  $eng.css("color","#fff");
})
$eng.on("click",function () {
  $eng.css("color","rgba(52, 152, 219,1.0)");
  $pl.css("color","#fff");
})






/////menu-burger

$(".menu-burger").click(function () {
		event.preventDefault();
  $(this).toggleClass("rotate");
  $(this).next().slideToggle();
  $(this).next().css("display","block")
})


$(".about_click").click(function (){
   $('html, body').animate({
     scrollTop: $('#who').offset().top
}, 500, 'linear');
});
///////////////////////////
$(".team_click").click(function (){
   $('html, body').animate({
     scrollTop: $('#team').offset().top
}, 500, 'linear');
});
///////////////////////////
$(".compet_click").click(function (){
   $('html, body').animate({
     scrollTop: $('#competences').offset().top
}, 500, 'linear');
});
///////////////////////////
$(".manag_click").click(function (){
   $('html, body').animate({
     scrollTop: $('#management').offset().top
}, 500, 'linear');
});
///////////////////////////
$(".carer_click").click(function (){
   $('html, body').animate({
     scrollTop: $('#career').offset().top
}, 500, 'linear');
});
///////////////////////////
$(".contact_click").click(function (){
   $('html, body').animate({
     scrollTop: $('#contact').offset().top
}, 500, 'linear');
});


});
