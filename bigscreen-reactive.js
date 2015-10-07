BigScreen.reactiveFullscreen = new ReactiveVar(false);

//Track fullscreen on pageclasses and session
BigScreen.onEnter(function() {
	BigScreen.reactiveFullscreen.set(true);
})

BigScreen.onExit(function() {
	BigScreen.reactiveFullscreen.set(false);
})