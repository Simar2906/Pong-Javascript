#pragma strict

import UnityEngine.SceneManagement;

public function Play2Player() {
    SceneManager.LoadScene(1);
}

public function PlaySinglePlayer(){
	SceneManager.LoadScene(2);
}

public function QuitGame() {
    Debug.Log("Quit");
    Application.Quit();
}