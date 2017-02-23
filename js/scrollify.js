$(function(){

	$(".section").css({"height":$(window).height()});

	$.scrollify({
			section: ".section",
			// sectionName: true,
			easing: "easeOutExpo",
      scrollSpeed: 2000,
			updateHash: true,
			before: function(index, sections){
				var dataRef = sections[index].attr('data-section-name');

				$('.section').each(function() {
					if( $(this).attr('data-section-name') === dataRef ) {
						$(this).addClass('active-section');
					}
					else {
						$(this).removeClass('active-section');
					}
				});

			},
			after: function(index, sections){
				//--> IDEAS: 1) if it doesn't then animate back? 2)instead of having a specific id to animate, maybe have a class of animateFromLeft or somehting
				var linkedInLogoId = $('#linkedInLogo') //!!!specifically access a child only when the parent has a class of active

				var classRef = sections[index].attr('class');
				var activeClassReg = /active-section/
				if(activeClassReg.test(classRef)){
					//DIDNT NEED TO DO THIS SHIT, JUST SEE IF INDEX IS WHAT YOU WANT IT AS... FML
					// console.log("this log shows that the regex looking for active-section has been hit");
				}
				if(index === 1){
					console.log("we are now on the 2nd section!");
					TweenMax.to(linkedInLogoId, 6, {left:200})
				}

			},
	});

/*
What needs to happen:

in jQuery...
if the section has a class of active, then do an animation...

so how to trigger animations with jquery when a class is set
*/


});
