"use strict";

(function(){
	init();

	function init(){
		var container = new PIXI.Container(); //our stage
		//will either use canvas or webgl, depending on browser
		var renderer = PIXI.autoDetectRenderer(512, 384, {
			view:document.getElementById("game-canvas")
		});

		//we finally render our stage according to render
		renderer.render(container);
	}
})();