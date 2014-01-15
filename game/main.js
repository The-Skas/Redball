var Robot = {};
function init() {
	//Globals
	STAGE_WIDTH = 800;
	STAGE_HEIGHT = 600;



	var canvas = document.getElementById("game");
	stage = new createjs.Stage(canvas);

	createjs.Ticker.addEventListener("tick", update);
	createjs.Ticker.setFPS(60)
	createjs.Ticker.useRAF = true;
	Robot.arm =new Robot.arms();

}

function update(event)
{
	//TODO:Player access index.
	if(!event.paused)
	{
		// stage.removeAllChildren();
		input();
		// draw.update();
		stage.clear();
		Robot.arm.update();
		stage.update();
	}
}
