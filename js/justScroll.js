$( document ).ready(function() {

  var height = $(window).height()
  $( window ).resize(function() {
    height = $(window).height()
  });

  console.log("HEIGHT: ", height);


  // var welcomeSectionHeight = height
  var buildThingsSectionHeight = height
  var whatAmISectionHeight = height * 2
  var myWorkSectionHeight = height * 3
  var myLinksSectionHeight = height * 3.6




  $(window).scroll(function() {


    var pos = $(this).scrollTop();

    console.log("position: ", pos);
    // console.log("Scroll Position --> ", scrollPosition);

    //SECTION WELCOME
    if (pos < buildThingsSectionHeight){
      console.log("SECTION WELCOME");
    }

    //SECTION buildThings
    if (pos > buildThingsSectionHeight && pos < whatAmISectionHeight){
      console.log("SECTION buildThings");

    }

    //SECTION whatAmI
    if (pos > whatAmISectionHeight && pos < myWorkSectionHeight){
      console.log("SECTION whatAmI");

      var entireDesk = $('#deskAnimation')
      var deskPng = $('#deskPng');
      var chairPng = $('#chairPng');
      var bookPng = $('#bookPng');
      var puterPng = $('#puterPng');
      var treePng = $('#treePng');

      entireDesk.css("visibility", "visible")

      TweenMax.set('.deskAnimation', {visibility: "visible"})

      //top
      TweenMax.from(deskPng, 1, {top:500})
      //left
      TweenMax.from(chairPng, 1, {left:500})
      //right
      TweenMax.from(treePng, 1, {left:500})
      //bottom
      TweenMax.from(bookPng, 1, {left:500})
      TweenMax.from(puterPng, 1.2, {left:5000})






    }


    //SECTION myWork
    if (pos > myWorkSectionHeight && pos < myLinksSectionHeight){
      console.log("SECTION myWork");
    }


    // SECTION myLinks
    if (pos > myLinksSectionHeight){
      console.log("SECTION myLinks");
    }







  })

})
