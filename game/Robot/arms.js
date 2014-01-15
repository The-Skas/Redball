
Robot.ACC_MOVE = 1.8;
Robot.ACC_THRUSTER = 1.5;
Robot.shape = new createjs.Shape();
Robot.arm;
Robot.right = false;
Robot.left  = false;
Robot.vY = 0;
Robot.vX = 0;
Robot.fY = 0;
Robot.fX = 0;
Robot.arms = function(){
	//Inhertis from Entity Coords (x,y)

	this.x = 5; this.y = 5;
	Robot.shape.graphics.beginFill("red").drawCircle(Robot.shape.x, Robot.shape.y, 40);
	//Attatch to relevant point. This would mean it has to be a container.
}
Robot.arms.prototype = new Entity();

Robot.arms.prototype.update = function(){
		stage.addChild(Robot.shape);
	//Check state of arm.. 
		//Is it damaged?
		//Can it launch itself?
		//

	
		

		//Gravity 
		if((Robot.shape.y) < 300)
		{
			Robot.vY += 0.4;
			// Robot.vY = Math.min(Robot.vY, 10);
			debugger;

		}
		//Bounce
		else
		{
			Robot.vY = -Robot.vY/1.5;
		}
		
		if(Robot.right)
		{
			Robot.vX += Robot.ACC_MOVE;
			Robot.vX = Math.min(Robot.vX, 5);
		}
		if(Robot.left)
		{
			Robot.vX -= Robot.ACC_MOVE;
			Robot.vX = Math.max(Robot.vX, -5);
		}

		if(Robot.up)
		{
			Robot.vY -= Robot.ACC_THRUSTER;

			Robot.vY = Math.max(Robot.vY, -4);
		}
		Robot.shape.y += Robot.vY;

		if(Robot.shape.y > 300)
			Robot.shape.y = 300;


		Robot.shape.x += Robot.vX;

		Robot.vX *= 0.9;
		console.log("Im in.");
		// Robot.vY *= 0.98;
		//Fix Floating point
		// if(Robot.vY < 0.1 && Robot.vY > -0.1)
		// 	Robot.vY = 0;
		// else if(Robot.vy )

}

