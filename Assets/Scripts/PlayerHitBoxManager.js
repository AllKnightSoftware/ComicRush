#pragma strict
var frame2 : MeshCollider;
var frame3 : MeshCollider;
var colliders : MeshCollider[];
var localCollider : MeshCollider;

enum hitBoxes{frame2Box, frame3Box, clear};


function Start () {

var colliders : MeshCollider[] = [frame2, frame3];
}

function OnTriggerEnter2D(Collider2D){
	Debug.Log("Collider Hit Something!");
}

function setHitBox(val : hitBoxes) : hitBoxes{
	if(val != hitBoxes.clear){
		return;
	}
}


function Update () {

}


