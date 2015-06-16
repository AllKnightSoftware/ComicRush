#pragma strict
var startingHealth : int = 100;
var currentHealth : int;
var healthSlider : UnityEngine.UI.Slider;
var player : GameObject;
var restartDelay: float = 2f;
var restartTimer: float;



function Start () {

healthSlider = GameObject.Find("Slider").GetComponent(UnityEngine.UI.Slider);
currentHealth = startingHealth;

}

function Update () {

healthSlider.value = currentHealth;

if (Input.GetKeyDown(KeyCode.H)){
	currentHealth = currentHealth - 1;
}

if (currentHealth <= 0){
	restartTimer += Time.deltaTime;
	if(restartTimer >= restartDelay){
	Application.LoadLevel("mainmenu");
	}
}
}