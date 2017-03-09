$( document ).ready(function() {

  var height = $(window).height()
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

    //interOne
    if (pos > interOneStart && pos < interOneEnd){
      // console.log("interOne");
    }

    //whatAmI
    if (pos > whatAmIStart && pos < whatAmIEnd){
      console.log("whatAmI");


      var whatAmIPosDif = pos - whatAmIStart;

      var secondBackImage = $('.imageCenterer.second');
      var secondChangeRate = Math.ceil(whatAmIPosDif/5)
      secondBackImage.css('top', -secondChangeRate + 'px')



      var deskPng = $('#deskPng');
      var chairPng = $('#chairPng');
      var bookPng = $('#bookPng');
      var puterPng = $('#puterPng');
      var treePng = $('#treePng');

      var dopeSauce = $('#dopeSauce');
      var dopeSauceCursor = $('#dopeSauceCursor');

      TweenMax.to(deskPng, 1, {left: '0px', top: '0px'})
      TweenMax.to(chairPng, 1.5, {left: '205px', top: '140px'})
      TweenMax.to(bookPng, 1.1, {left: '145px'})
      TweenMax.to(treePng, 1.3, {left: '50px'})
      TweenMax.to(puterPng, 1.6, {top: '0px'})

      //CHANGE COLOR ITS TOO HARD TO LOOK AT FUCK...
      // setTimeout(() =>{
      //   dopeSauce.css("visibility", "visible")
      //   dopeSauce.addClass("animated bounceIn");
      //
      //   dopeSauceCursor.css("visibility", "visible")
      //   dopeSauceCursor.addClass("animated flash infinite");
      // }, 2000);

    }

    //interTwo
    if (pos > interTwoStart && pos < interTwoEnd){
      console.log("interTwo");
    }


    //myWork
    if (pos > myWorkStart && pos < myWorkEnd){
      console.log("myWork");

      // $(".myWorkParent").sticky({topSpacing:0});

      var moveOver = "translateX(" + pos/10 + "px)"
      var soccerAnimation = $('.soccerAnimation');
      soccerAnimation.css('transform', moveOver);


    }
    //TODO RE-IMPLEMENT THIS STICKY?????
    // else {
    //   $(".myWorkParent").unstick()
    // }



//YO TBHESE ACTUALLY DOPE
//https://www.sitepoint.com/scroll-based-animations-jquery-css3/




    //interThree
    if (pos > interThreeStart && pos < interThreeEnd){
      console.log("interThree");
    }





    //myLinks
    if (pos > myLinksStart){
      console.log("myLinks");
    }

  })

  var screenWidth = $(window).width();
  // console.log("screenWidth: ", screenWidth);
  // console.log("SC HEIGHT", height);

  var slides = $(".slide");
  var currentSlide = 0;

  TweenMax.set(slides.filter(":gt(0)"), {left: "-" + screenWidth + "px"});
  TweenMax.delayedCall(4, nextSlide);

  function nextSlide(){
    TweenMax.to(slides.eq(currentSlide), 1, {left: "-" + screenWidth + "px"})
    if (currentSlide < slides.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }

    TweenMax.fromTo(slides.eq(currentSlide), 1, {left: screenWidth + "px"}, {left: "0px"} );
    TweenMax.delayedCall(4, nextSlide)
  }

})



















//
