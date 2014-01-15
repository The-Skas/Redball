function input() {

	Mousetrap.bind('up', function() {
		Robot.up = true;
	}, "keydown");
	Mousetrap.bind('up', function() {
		Robot.up = false;
	}, "keyup");
	Mousetrap.bind('down', function() {
		
		return false;
	});
	Mousetrap.bind('left', function() {
		Robot.left = true;
		return false;
	}, "keydown");
	Mousetrap.bind('left', function() {
		Robot.left = false;
		return false;
	}, "keyup");
	Mousetrap.bind('right', function() {
		Robot.right = true;
		return false;
	}, "keydown");
	Mousetrap.bind('right', function() {
		Robot.right = false;
		return false;
	}, "keyup");
	Mousetrap.bind('ctrl', function() {
		return false;
	});
	Mousetrap.bind('space', function() {
		return false;
	});
	Mousetrap.bind('shift', function() {
		return false;
	});
	Mousetrap.bind('p', function() {
		return false;
	});
}
