#pragma strict

static var playerScore01: int = 0;
static var playerScore02: int = 0;
private var theBall: Transform = null;
var theSkin: GUISkin;

function Start() {
	theBall = GameObject.FindGameObjectWithTag("Ball").transform;
}
static function Score(wallName: String) {
	if (wallName == "rightWall") {
		playerScore01 += 1;
	}
	else if (wallName == "leftWall") {
		playerScore02 += 1;
	}
	Debug.Log("Player Score 1 is " + playerScore01);
	Debug.Log("Player Score 2 is " + playerScore02);
}

function OnGUI() {
	GUI.skin = theSkin;
	GUI.Label(new Rect(Screen.width/2 - 150 -18, 25, 100, 100), "" + playerScore01);
	GUI.Label(new Rect(Screen.width/2 + 150 -18, 25, 100, 100), "" + playerScore02);
	if (GUI.Button(new Rect(Screen.width/2 -150/2, 35, 121, 53), "RESET")) {
		playerScore01 = 0;
		playerScore02 = 0;
		theBall.SendMessage("ResetBall");
	}
}