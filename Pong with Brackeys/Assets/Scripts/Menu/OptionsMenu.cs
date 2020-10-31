using UnityEngine;
using System.Collections;
using UnityEngine.Audio;

public class OptionsMenu : MonoBehaviour {
	public AudioMixer audioMixer;

	public void SetVolume (float volume){
		audioMixer.SetFloat ("volume", volume);
	}
}
