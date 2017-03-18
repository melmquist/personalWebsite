$( document ).ready(function() {

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


  $(window).scroll(function() {

    var pos = $(this).scrollTop();
    var changeRate = Math.ceil(pos/5)

    console.log("position: ", pos);
    // console.log("changeRate: ", changeRate);

    var backImage = $('.imageCenterer.first');
    backImage.css('top', -changeRate + 'px')

    //WELCOME
    if (pos < interOneStart){
      console.log("WELCOME");
    }

    //interOne/whatAmI
    if (pos > interOneStart && pos < whatAmIEnd){
      console.log("whatAmI");

      var whatAmIPosDif = pos - whatAmIStart;

      var secondBackImage = $('.imageCenterer.second');
      var secondChangeRate = Math.ceil(whatAmIPosDif/5)
      secondBackImage.css('top', -secondChangeRate + 'px')

      var popUpCopy = $('.popUpCopy');
      popUpCopy.css("visibility", "visible")
      popUpCopy.addClass('animated flipInY')

      var deskPng = $('#deskPng');
      var chairPng = $('#chairPng');
      var bookPng = $('#bookPng');
      var puterPng = $('#puterPng');
      var treePng = $('#treePng');

      var dopeSauce = $('#dopeSauce');
      var dopeSauceCursor = $('#dopeSauceCursor');

      TweenMax.to(deskPng, 1, {left: '-45px', top: '0px'})
      TweenMax.to(chairPng, 1.5, {left: '195px', top: '175px'})
      TweenMax.to(bookPng, 1.1, {left: '135px', top: '165px'})
      TweenMax.to(puterPng, 1.6, {left: '120px', top: '8px'})
      TweenMax.to(treePng, 1.3, {left: '15px'})

      setTimeout(() =>{
        dopeSauce.css("visibility", "visible")
        dopeSauce.addClass("animated bounceIn");

        dopeSauceCursor.css("visibility", "visible")
        dopeSauceCursor.addClass("animated flash infinite");
      }, 2250);

    }

    //interTwo/Mywork
    if (pos > interTwoStart && pos < myWorkEnd){
      console.log("myWork");

      var moveOver = "translateX(" + pos/10 + "px)"
      var soccerAnimation = $('.soccerAnimation');
      // soccerAnimation.css('transform', moveOver);

    }

    //interThree
    if (pos > interThreeStart && pos < interThreeEnd){
      console.log("interThree");
    }

    //myLinks
    if (pos > myLinksStart + 200){
      console.log("myLinks");

      TweenMax.to(linksDiv, 1.6, {top: '450px'})
      TweenMax.to(mtnWaterFront, 1.6, {left: '0px', top: '0px'})
      TweenMax.to(mtnGround, 2.1, {left: '0px', top: '0px'})
      TweenMax.to(mtnMtn, 2.0, {left: '0px', top: '0px'})
      TweenMax.to(mtnClouds, 1.3, {left: '0px', top: '0px'})

      var popUpLinksCopy = $('.popUpLinksCopy');

      setTimeout(() =>{
        popUpLinksCopy.css("visibility", "visible")
        popUpLinksCopy.addClass('animated flipInX')
      }, 2000);

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

})



















//
