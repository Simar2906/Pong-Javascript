#pragma strict

import UnityEngine.SceneManagement;

public function PlayGame() {
    SceneManager.LoadScene("Main");
}

public function QuitGame() {
    Debug.Log("Quit");
    Application.Quit();
}