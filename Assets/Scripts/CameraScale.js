#pragma strict
var orthographicSize : float = 643.887;
var aspect : float = 1.65f;

function Start () {
Camera.main.projectionMatrix = Matrix4x4.Ortho(
	-orthographicSize * aspect, orthographicSize * aspect,
	-orthographicSize, orthographicSize,
	GetComponent.<Camera>().nearClipPlane, GetComponent.<Camera>().farClipPlane);


}

function Update () {
Camera.main.projectionMatrix = Matrix4x4.Ortho(
	-orthographicSize * aspect, orthographicSize * aspect,
	-orthographicSize, orthographicSize,
	GetComponent.<Camera>().nearClipPlane, GetComponent.<Camera>().farClipPlane);


}