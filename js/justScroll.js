$( document ).ready(function() {

  var height = $(window).height()
  $( window ).resize(function() {
    height = $(window).height()
  });

  // console.log("HEIGHT: ", height);

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
    console.log("changeRate: ", changeRate);

    var backImage = $('.imageCenterer');
    // var newTop = backImage.position().top + changeRate
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

      var entireDesk = $('#deskAnimation')
      entireDesk.css("visibility", "visible")

      var deskPng = $('#deskPng');
      var chairPng = $('#chairPng');
      var bookPng = $('#bookPng');
      var puterPng = $('#puterPng');
      var treePng = $('#treePng');

      TweenMax.to(deskPng, 1, {left: '0px', top: '0px'})
      TweenMax.to(chairPng, 1.5, {left: '205px', top: '140px'})
      TweenMax.to(bookPng, 1.1, {left: '145px'})
      TweenMax.to(treePng, 1.3, {left: '50px'})
      TweenMax.to(puterPng, 1.6, {top: '0px'})


    }

    //interTwo
    if (pos > interTwoStart && pos < interTwoEnd){
      console.log("interTwo");

    }

    //myWork
    if (pos > myWorkStart && pos < myWorkEnd){
      console.log("myWork");
    }

    //interThree
    if (pos > interThreeStart && pos < interThreeEnd){
      console.log("interThree");

    }
    //myLinks
    if (pos > myLinksStart){
      console.log("myLinks");
    }

  })

})
