function animateLogo(){
	TweenMax.fromTo("#logo",2, {
      // from
      css: {
        y: "-20px",
      }
    },{
      // to
      css: {
        y: "20px",
      },
      repeat: -1,
      yoyo: true,
      ease: Power2.easeInOut
    })
}

function animateRobot(){
	var t = new TimelineMax({yoyo:true,repeat:-1});
	t.to("#android-robot",1,{rotation: "-55deg"}).to("#android-robot",1,{rotation: "-35deg"});
}


function updateSliderControl(){
	var links = document.querySelectorAll("#slider-control a");
	for(var i = 0; i < links.length; i++){
		var link = links[i];
		var section = document.querySelector(link.getAttribute("href"));
		var sectionTop = section.offsetTop;
		var sectionBottom = window.innerHeight + sectionTop;
		if(window.scrollY >= sectionTop && window.scrollY < sectionBottom){
			link.className = "active";
		}else{
			link.className = "";
		}
	}
}

function scrollToElement(element){
	var topOfElement = document.querySelector(element).offsetTop;
	TweenMax.to(window,1,{
		scrollTo:{
			y: topOfElement,
		},
		ease: Power2.easeInOut,
	})
}

function addSmoothScrolling(){
	var links = document.querySelectorAll("#slider-control a");
	for(var i = 0; i < links.length; i++){
		var link = links[i];
		link.addEventListener("click",function(e){
			e.preventDefault();
			var href = this.getAttribute("href");
			scrollToElement(href);
		})
	}
}

function addScrollMagic(){
	var controller = new ScrollMagic.Controller();

	var fademask = new ScrollMagic.Scene({
		triggerElement : "#native",
		triggerHook: "onEnter",
	  duration: "100%"
	}).setTween("#fading-mask",1,{opacity:"1"}).addTo(controller);

	// TweenMax.to("#iphone-overlay",1,{width:"50%",y:0});
	var iphonemask = new ScrollMagic.Scene({
		triggerElement : "#native",
		triggerHook: "onEnter",
	  duration: "100%"
	}).setTween("#iphone-overlay",1,{width:"50%",y:0}).addTo(controller);

	var piniPhone  = new ScrollMagic.Scene({
		triggerElement: "#native",
		triggerHook:"onLeave",
		duration:"100%"
	}).setPin("#iphone-overlay").addTo(controller);
}


window.onscroll = function(){
	updateSliderControl();
}

window.onload = function() {
  animateLogo();
  animateRobot();
  updateSliderControl();
  addSmoothScrolling();
  addScrollMagic();
};