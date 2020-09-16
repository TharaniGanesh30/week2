(function(window){
	var say={};
	var greet="Hello";
	say.hello=function(a) {
		say.name=a;
		console.log(greet+" "+ say.name);
	
	}
	window.say=say;
})(window)

