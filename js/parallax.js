	var parallaxController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#parallax1"})
					.setTween("#parallax1 > div", {y: "200%", ease: Linear.easeNone})
					.addTo(parallaxController);

          new ScrollMagic.Scene({triggerElement: "#parallax2"})
        					.setTween("#parallax2 > div", {y: "200%", ease: Linear.easeNone})
        					.addTo(parallaxController);
