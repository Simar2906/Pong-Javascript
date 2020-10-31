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
			if(myball.position.x > 0)
			{
				if(myball.position.y < myRigidbody.position.y-1)//ball below paddle then paddle move towards ball
				{
					//Debug.Log("ball below");
					myRigidbody.position += new Vector2(0, -speed*Time.deltaTime);
				}
				else if(myball.position.y > myRigidbody.position.y+1)//ball above paddle then paddle move towards ball
				{
					myRigidbody.position += new Vector2(0, speed*Time.deltaTime);
				}
			}
			else
			{
				if(myRigidbody.position.y>1)//paddle above 0, then paddle move down
				{
					myRigidbody.position += new Vector2(0, -speed*Time.deltaTime);
				}
				else if(myRigidbody.position.y<-1)//paddle below 0, then paddle moves up
				{
					myRigidbody.position += new Vector2(0, speed*Time.deltaTime);
				}
				
			}
		
	}
}
