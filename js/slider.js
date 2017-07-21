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
