$( document ).ready(function() {

  if (window.matchMedia('(max-width: 768px)').matches) {

    // console.log("IM A SMALL SCREEN");

    $('html, body').css({
      'overflow': 'hidden',
      'height': '100%',
      'background': '#3a58ff',
      'background': '-webkit-linear-gradient(#a8ffff, #3a58ff)',
      'background': '-o-linear-gradient(#a8ffff, #3a58ff)',
      'background': '-moz-linear-gradient(#a8ffff, #3a58ff)',
      'background': 'linear-gradient(#a8ffff, #3a58ff)',
      'background-size': 'cover'
    });

    var mobileh1 = $('<h1>Please Visit This Portfolio Website On a Desktop</h1>');
    var mobileh3 = $('<h3>Thanks, <br />Matt Elmquist</h3>');

    $('.mobile').append(mobileh1);
    $('.mobile').append(mobileh3);

    $('.mobile').css({
      'height': '100vh',
    	'text-align': 'center',
    	'margin': '10px'
    });



  } else {

    var height = $(window).height()
    var width = $(window).width();

    $( window ).resize(function() {
      height = $(window).height()
    });

    var welcomeSectionHeight = height

    var interOneStart = height
    var interOneEnd = height * 1.5

    var whatAmIStart = height * 1.5
    var whatAmIEnd = height * 2.5

    var interTwoStart = height * 2.5
    var interTwoEnd = height * 3

    var myWorkStart = height * 3
    var myWorkEnd = height * 4

    var interThreeStart = height * 4
    var interThreeEnd = height * 4.5

    var myLinksStart = height * 4.1

    //set desk animation location and size
    var deskAnimation = $('.deskAnimation');

    var deskPng = $('#deskPng');
    var chairPng = $('#chairPng');
    var bookPng = $('#bookPng');
    var puterPng = $('#puterPng');
    var treePng = $('#treePng');


    //soccerAnimation
    var fieldOne = $('#fieldOne')
    var fieldTwo = $('#fieldTwo')
    var fieldThree = $('#fieldThree')


    //start mountain all off screen
    var mtnWaterFront = $('#mtnWaterFront');
    var mtnGround = $('#mtnGround');
    var mtnMtn = $('#mtnMtn');
    var mtnClouds = $('#mtnClouds');
    var mtnMoon = $('#mtnMoon');

    var linksDiv = $('.linksDiv');

    //bottom, right, left, top initially positioned png later to be tweened in
    mtnWaterFront.css('top', height + "px");
    mtnGround.css('left', width + "px");
    mtnMtn.css('left', -width + "px");
    mtnClouds.css('top', -height + "px");

    linksDiv.css('top', height + "px");

    // var newHover = $('#newHover');
    // newHover.hover(() => {
    //   console.log("new Hover Hit")
    // })

    $(window).scroll(function() {

      var pos = $(this).scrollTop();
      var changeRate = Math.ceil(pos/5)

      // console.log("position: ", pos);
      // console.log("changeRate: ", changeRate);

      var backImage = $('.imageCenterer.first');
      backImage.css('top', -changeRate + 'px')

      //WELCOME
      if (pos < interOneStart){
        // console.log("WELCOME");
      }

      //interOne/whatAmI
      if (pos > interOneStart && pos < whatAmIEnd){
        // console.log("whatAmI");

        var whatAmIPosDif = pos - whatAmIStart;

        var secondBackImage = $('.imageCenterer.second');
        var secondChangeRate = Math.ceil(whatAmIPosDif/5)
        secondBackImage.css('top', -secondChangeRate + 'px')

        var popUpCopy = $('.popUpCopy');
        popUpCopy.css("visibility", "visible")
        popUpCopy.addClass('animated flipInY')

        var dopeSauce = $('#dopeSauce');
        var dopeSauceCursor = $('#dopeSauceCursor');

        TweenMax.to(deskPng, 1.1, {left: '-10vh', top: '-25vh'})
        TweenMax.to(chairPng, 1.6, {left: '-10vh', top: '-25vh'})
        TweenMax.to(bookPng, 1.2, {left: '-10vh', top: '-25vh'})
        TweenMax.to(puterPng, 1.7, {left: '-10vh', top: '-25vh'})
        TweenMax.to(treePng, 1.4, {left: '-10vh', top: '-25vh'})

        setTimeout(() =>{
          dopeSauce.css("visibility", "visible")
          dopeSauce.addClass("animated bounceIn");

          dopeSauceCursor.css("visibility", "visible")
          dopeSauceCursor.addClass("animated flash infinite");
        }, 2250);

      }

      //interTwo/Mywork
      if (pos > 2100){
        // console.log("myWork");

        TweenMax.to(fieldOne, 1, {left: '0px'})
        TweenMax.to(fieldTwo, 1.7, {left: '0px'})
        TweenMax.to(fieldThree, 2.1, {left: '0px', top: '0px'})



      }

      //interThree
      if (pos > interThreeStart && pos < interThreeEnd){
        // console.log("interThree");
      }

      //myLinks
      if (pos > myLinksStart){
        // console.log("myLinks");

        var popUpLinksCopy = $('.popUpLinksCopy');

        setTimeout(() =>{
          popUpLinksCopy.css("visibility", "visible")
          popUpLinksCopy.addClass('animated flipInX')
        }, 1);

        TweenMax.to(linksDiv, 1.6, {top: '450px'})
        TweenMax.to(mtnWaterFront, 1.6, {left: '0px', top: '0px'})
        TweenMax.to(mtnGround, 2.1, {left: '0px', top: '0px'})
        TweenMax.to(mtnMtn, 2.0, {left: '0px', top: '0px'})
        TweenMax.to(mtnClouds, 1.3, {left: '0px', top: '0px'})

      }

    })

    // console.log("width: ", width);
    // console.log("SC HEIGHT", height);

    var slides = $(".slide");
    var currentSlide = 0;

    TweenMax.set(slides.filter(":gt(0)"), {left: "-" + width + "px"});
    TweenMax.delayedCall(4, nextSlide);

    function nextSlide(){
      TweenMax.to(slides.eq(currentSlide), 1, {left: "-" + width + "px"})
      if (currentSlide < slides.length - 1) {
        currentSlide++;
      } else {
        currentSlide = 0;
      }

      TweenMax.fromTo(slides.eq(currentSlide), 1, {left: width + "px"}, {left: "0px"} );
      TweenMax.delayedCall(4, nextSlide)
    }
  }


})



















//
