#pragma strict

var score : AudioSource = null;
function OnTriggerEnter2D (hitInfo : Collider2D) {
	if (hitInfo.name == "Ball")
	{
		var wallName = transform.name;
		GameManager.Score (wallName);
		hitInfo.gameObject.SendMessage("ResetBall");
		score.Play();
	}
}