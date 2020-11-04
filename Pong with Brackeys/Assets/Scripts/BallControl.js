#pragma strict

private var myRigidbody: Rigidbody2D = null;
var ballSpeed: float = 100f;
var click: AudioSource = null;
private var xVel: float = 0f;
function Start() {
	yield WaitForSeconds(2);
	myRigidbody = GetComponent.<Rigidbody2D>();
	goBall();
}
function OnCollisionEnter2D(colInfo: Collision2D) {
	if (colInfo.collider.tag == "Player" || colInfo.collider.tag == "Bot") {
		var v: Vector3 = GetComponent.<Rigidbody2D>().velocity;
		v.y = myRigidbody.velocity.y / 2 + colInfo.collider.attachedRigidbody.velocity.y / 3; // addes spin due to paddle
		GetComponent.<Rigidbody2D>().velocity = v;
		click.pitch = Random.Range(0.8, 1.2);
		click.Play();
	}
}
function Update() {
	myRigidbody = GetComponent.<Rigidbody2D>();
	xVel = myRigidbody.velocity.x;
	if (xVel < 18 && xVel > -18 && xVel != 0) {
		if (xVel > 0) {
			xVel = 20;
		}
		else {
			xVel = -20;
		}
	}
}
private function goBall() {
	var randomNumber: float = Random.Range(0, 2);
	if (randomNumber <= 0.5) {
		Debug.Log("Shoot Right");
		myRigidbody.AddForce(new Vector2(ballSpeed, 10));
	}
	else {
		Debug.Log("Shoot Left");
		myRigidbody.AddForce(new Vector2(-ballSpeed, -10));
	}
}

function ResetBall() {
	myRigidbody.velocity = new Vector2(0, 0);
	myRigidbody.position = new Vector2(0, 0);

	yield WaitForSeconds(0.5);
	goBall();
}
