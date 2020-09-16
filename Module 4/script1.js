
(function(window){
	var say1={};
	var greet="Goodbye";
	say1.goodbye=function(a) {
		say1.name=a;
		console.log(greet+" "+ say1.name);
	}
	window.say1=say1;
})(window)