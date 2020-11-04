#pragma strict
import UnityEngine.SceneManagement;

public static var GameIsPaused: System.Boolean  = false;

public var pauseMenuUI: GameObject ;

// Update is called once per frame
function Update() {
	if (Input.GetKeyDown(KeyCode.Escape)) {
		if (GameIsPaused) {
			Resume();
		} else {
			Pause();
		}
	}
}

public function Resume(){
	pauseMenuUI.SetActive(false);
	Time.timeScale = 1;
	GameIsPaused = false;
}

function Pause(){
	pauseMenuUI.SetActive(true);
	Time.timeScale = 0;
	GameIsPaused = true;
}

public function LoadMenu(){
	Time.timeScale = 1;
	SceneManager.LoadScene(0);
}

public function QuitGame(){
	Debug.Log("Quitting game...");
	Application.Quit();
}