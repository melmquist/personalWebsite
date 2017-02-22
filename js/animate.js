$(function() {

  //SCROLLIFY DO YOU SUCK?

  var $bat = $('.bat');
  var $box = $('.box');
  var $boxRight = $('.boxRight');

  $(window).on('scroll', function () {
    var top = $(window).scrollTop();
    var rotateDegrees = "rotate(" + top/10 + "deg)";
    // console.log("rotateDegrees: ", rotateDegrees);
    $bat.css('transform', rotateDegrees);

    // var pushDown = "translateY(" + top + ")"
    $box.css('transform', 'scale(' + top/50 + ')');

    $boxRight.css('transform', 'translateX(' + top + 'px)');
  })

  //GREEN SOCKS IN BETWEENs
  // TweenMax.to(".logo", 2, {left:600}) //--> document.query BY CLASS

  // Modularize the references to dom objects
  var linkedInLogo = document.getElementById('linkedInLogo')
  TweenMax.to(linkedInLogo, 6, {left:600})

//IM TRYING TO ACCESS ANY OF THOSE FUCKERS TO DO A TWEEN AND IT AINT ACCESSING!!!!!!
  var wallOne = document.getElementById('Rectangle')

  var wallTwo = document.getElementById('linkedInLogo')
  var wallThree = document.getElementById('linkedInLogo')
  var wallFour = document.getElementById('linkedInLogo')
  var floor = document.getElementById('linkedInLogo')

  TweenMax.to(wallOne, 6, {left:600})

  var test = document.getElementById('Oval123');

  TweenMax.to(test, 6, {left:600})

});
