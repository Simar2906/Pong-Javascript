#pragma strict
import UnityEngine.Audio;

public var audioMixer:AudioMixer;

public function SetVolume (volume:float){
    audioMixer.SetFloat ("volume", volume);
}