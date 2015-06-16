#pragma strict
var speed : float = 300;
var jumpSpeed : float = 300;
var gravity : float = 500;
var mass : float = 500;
var animator : Animator;
 


function Start () {
//distToGround = GetComponent.<Collider>().bounds.extents.y;
GetComponent.<Rigidbody2D>().velocity = Vector2.zero;
}
function Update () {
//gives movement

	//var playerPosition = gameObject.transform.position;
	//var controller : Rigidbody2D = GetComponent.<Rigidbody2D>();
	/*	if (distToGround <= 0.1){
	moveDirection = Vector2(gameObject.transform.position.x, gameObject.transform.position.y);
	//moveDirection *= speed;
	
	if (Input.GetKey(KeyCode.UpArrow)){
	moveDirection.y = jumpSpeed;
	}
	
	}
	//moveDirection.y -= gravity * Time.deltaTime;
	if(Input.GetKey(KeyCode.RightArrow)){
	//GetComponent.<Rigidbody2D>().AddForce(Vector2.right * speed);
	GetComponent.<Rigidbody2D>().velocity = Vector2.right * speed;
	}
	else{
	GetComponent.<Rigidbody2D>().velocity = Vector2.right * 0;
	}
	
	if(Input.GetKey(KeyCode.LeftArrow)){
	//GetComponent.<Rigidbody2D>().AddForce(Vector2.right * speed);
	GetComponent.<Rigidbody2D>().velocity = Vector2.left * speed;
	}
	else{
	GetComponent.<Rigidbody2D>().velocity = Vector2.left * 0;
	}*/
	
	
	//animations
	if(Input.GetKey(KeyCode.RightArrow)){
		animator.SetBool("isMoving", true);
		animator.SetBool("FacingRight", true);
		animator.SetBool("FacingLeft", false);
	}
	else if(Input.GetKey(KeyCode.D)){
		animator.SetBool("isMoving", true);
		animator.SetBool("FacingRight", true);
		animator.SetBool("FacingLeft", false);
	}
	else{
		animator.SetBool("isMoving", false);
		animator.SetBool("isAttacking", false);
		}
	if(Input.GetKey(KeyCode.UpArrow)){
		animator.SetBool("Jump", true);
		animator.SetBool("isAttacking", false);
		}
	else if(Input.GetKey(KeyCode.W)){
		animator.SetBool("Jump", true);
		animator.SetBool("isAttacking", false);
	}
	else{
		animator.SetBool("Jump", false);
		animator.SetBool("isAttacking", false);
	}
	if(Input.GetKey(KeyCode.LeftArrow)){
		animator.SetBool("isMovingLeft", true);
		animator.SetBool("FacingRight", false);
		animator.SetBool("FacingLeft", true);
		animator.SetBool("isAttacking", false);
		}
	else if(Input.GetKey(KeyCode.A)){
		animator.SetBool("isMovingLeft", true);
		animator.SetBool("FacingRight", false);
		animator.SetBool("isAttacking", false);
		}
	else{
		animator.SetBool("isMovingLeft", false);
	}	
	if(Input.GetButton("Fire1")){
		animator.SetBool("isAttacking", true);		
	}
	else{
		animator.SetBool("isAttacking", false);
	}
	}
	function FixedUpdate () {
	
	if(Input.GetKey(KeyCode.RightArrow)){
		if(GetComponent.<Rigidbody2D>().velocity.magnitude < 300){
			GetComponent.<Rigidbody2D>().velocity += Vector2.right * speed/2;
	}
	}
	if(Input.GetKey(KeyCode.LeftArrow)){  
		if(GetComponent.<Rigidbody2D>().velocity.magnitude <= 300){
			GetComponent.<Rigidbody2D>().velocity += Vector2.left * speed/2;
	}
	}
	if(GetComponent.<Rigidbody2D>().IsTouchingLayers(LayerMask.GetMask("Floor"))){
	
		if(Input.GetKey(KeyCode.UpArrow)){
			GetComponent.<Rigidbody2D>().velocity += Vector2.up * jumpSpeed;
			}	
		if(Input.GetKey(KeyCode.DownArrow)){
			GetComponent.<Rigidbody2D>().velocity += Vector2.down * speed;
			}
	}
}



