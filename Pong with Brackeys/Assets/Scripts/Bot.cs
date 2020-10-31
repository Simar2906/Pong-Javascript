using UnityEngine;
using System.Collections;

public class Bot : MonoBehaviour {

	private Rigidbody2D myRigidbody = null;
	public Transform myball = null;
	public float speed = 5f;
	public float diff = 0;

	void Start () {
		myRigidbody = GetComponent<Rigidbody2D>();

	}
	
	void Update () {
		diff = myball.position.y - myRigidbody.position.y;
			if(myball.position.x > 0)
			{
				if(myball.position.y < myRigidbody.position.y)//ball below paddle then paddle move towards ball
				{
					//Debug.Log("ball below");
					myRigidbody.velocity = new Vector2(0, speed * -1f);
				}
				else if(myball.position.y > myRigidbody.position.y)//ball above paddle then paddle move towards ball
				{
					myRigidbody.velocity = new Vector2(0, speed);
				}
			}
			else
			{
				if(myRigidbody.position.y>0)//paddle above 0, then paddle move down
				{
					myRigidbody.velocity = new Vector2(0, speed * -1f);
				}
				else if(myRigidbody.position.y<0)//paddle below 0, then paddle moves up
				{
					myRigidbody.velocity = new Vector2(0, speed);
				}
			}
		
	}
}
