$( document ).ready(function() {
  // $("body").css("overflow", "hidden");

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
    var scrollPosition = [
      self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
      self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    ];

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

      var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
      html.data('scroll-position', scrollPosition);
      html.data('previous-overflow', html.css('overflow'));
      html.css('overflow', 'hidden');
      window.scrollTo(scrollPosition[0], scrollPosition[1]);

      // un-lock scroll position
      var html = jQuery('html');
      var scrollPosition = html.data('scroll-position');
      html.css('overflow', html.data('previous-overflow'));
      window.scrollTo(scrollPosition[0], scrollPosition[1])
    }

    //SECTION whatAmI
    if (pos > whatAmISectionHeight && pos < myWorkSectionHeight){
      console.log("SECTION whatAmI");
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
