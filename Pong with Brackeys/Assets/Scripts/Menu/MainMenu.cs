using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class MainMenu : MonoBehaviour {

	public void PlaySinglePlayer () {
		SceneManager.LoadScene (2);
	}

	public void Play2Player (){
		SceneManager.LoadScene (1);
	}
	public void QuitGame(){
		Debug.Log ("Quit");
		Application.Quit ();
	}
}
