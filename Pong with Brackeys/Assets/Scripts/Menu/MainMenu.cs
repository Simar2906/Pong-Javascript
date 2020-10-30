using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class MainMenu : MonoBehaviour {

	// Use this for initialization
	public void PlayGame () {
		SceneManager.LoadScene (sceneName:"Main");
	}

	public void QuitGame(){
		Debug.Log ("Quit");
		Application.Quit ();
	}
}
