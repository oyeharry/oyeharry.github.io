;
(function(window, document) {

	document.getElementsByClassName('container')[0].style.visibility = 'visible';

	var txtContainer = document.getElementsByClassName('txt-container')[0];
	TweenLite.from(txtContainer, 0.8, {
		scaleY: 0.8,		
		transformOrigin: 'left bottom',
		ease: Expo.easeOut
	});

	//show msg
	var spans = document.getElementsByClassName('msg-container')[0].getElementsByTagName('span');
	TweenLite.from(spans[0], 0.6, {
		alpha:0,				
		ease: Expo.eseOut,
		delay: 0.8
	});

	TweenLite.from(spans[1], .6, {
		css: {								
			'alpha': 0
		},				
		ease: Expo.eseOut,
		delay: 0.9
	})

	//social in 
var scoialIcons = document.getElementsByClassName('social-container')[0].getElementsByTagName('li');
TweenLite.from(scoialIcons[0],.8,{alpha:0,delay:1.2,ease:Expo.easeOut});
TweenLite.from(scoialIcons[1],.8,{alpha:0,delay:1.35,ease:Expo.easeOut});
TweenLite.from(scoialIcons[2],.8,{alpha:0,delay:1.45,ease:Expo.easeOut});
	

})(window, document);