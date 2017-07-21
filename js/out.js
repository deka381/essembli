/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

$(document).ready(function (){

let $slider = $("#slider-logo");


let slideCount = $slider .find('ul li').length;
let slideWidth = $slider.find('ul li').width();
let slideHeight = $slider.find('ul li').height();
let sliderUlWidth = slideCount * slideWidth;
let $slideUl= $slider.find('ul');

$slider.css({ width: slideWidth, height: slideHeight });
$slideUl.css({ width: sliderUlWidth, marginLeft: - slideWidth });
$slideUl.find("li:last-child").prependTo($slideUl);
let $leftBtn = $(".col6-prev");
let $rightBtn = $(".col6-next");

function fromLeft() {
        $slideUl.animate({
            left: + slideWidth
        }, 200, function () {
            $slideUl.find("li:last-child").prependTo($slideUl);
            $slideUl.css('left', '');
        });
    };
function fromRight() {
      $slideUl.animate({
          left: - slideWidth
      }, 200, function () {
          $slideUl.find("li:last-child").prependTo($slideUl);
          $slideUl.css('left', '');
      });
  };

    $leftBtn.click(function () {
      fromLeft();
    });

    $rightBtn.click(function () {
      fromRight();
    });

});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);