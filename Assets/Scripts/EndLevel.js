#pragma strict
var level : String;
var player: GameObject;
var levelDelay : float = 2f;
var levelTimer : float;

function Start () {



}

function Update () {

}



//Debug.Log("Door " + doorPosition);
//Debug.Log("Player" + playerPosition);


function OnTriggerEnter (other : Collider){
	if(other.gameObject == player){
	Application.LoadLevel(level);
	if (other.GetComponent(ScreenFade)){
	other.GetComponent(ScreenFade).OnGUI();
	}
	}
 }

