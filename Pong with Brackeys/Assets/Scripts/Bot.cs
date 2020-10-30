using UnityEngine;
using System.Collections;

public class Bot : MonoBehaviour {

	private Rigidbody2D myRigidbody = null;
	public Transform myball = null;
	public float speed = 10f;
	void Start () {
		myRigidbody = GetComponent<Rigidbody2D>();

	}
	
	void Update () {
		if(myball.position.y < myRigidbody.position.y)//ball below paddle then paddle move towards ball
		{
			//Debug.Log("ball below");
			myRigidbody.velocity = new Vector2(0, speed * -1);
		}
		else if(myball.position.y > myRigidbody.position.y)//ball above paddle then paddle move towards ball
		{
			myRigidbody.velocity = new Vector2(0, speed);
		}
	}
}
