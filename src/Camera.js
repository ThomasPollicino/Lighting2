class Camera {
    constructor() {
      this.eye = new Vector([1, 0, 3]);
      this.at = new Vector([0, 0, -100]);
      this.up = new Vector([0, 1.5, 0]);
      this.viewMatrix = new Matrix4();
      this.updateMatrix();
      this.projectionMatrix = new Matrix4();
      this.oldMouseX = null;
      this.oldMousez = null;
    }
  
    rotateUsingMouse(newX) {
      const speed = 0.13;
      //I could easily rotate the camera vertically as well but I did not like it so I left it out
      const rotateHorizontal = new Matrix4().setRotate(newX * speed, 0, 1, 0);
      this.at = new Vector(rotateHorizontal.multiplyVector3(new Vector3(this.at.elements)).elements);
      this.updateMatrix();
    }
  //I had a lot of trouble with the camera, basically took me the whole project, I got assitance from my friend Alfonso and AI for debugging and understanding the functions
    forward() {
      this.moveCamera(0.5);
    }
  
    back() {
      this.moveCamera(-0.5);
    }
  
    left() {
      this.sidewaysCamera(-0.5);
    }
  
    right() {
      this.sidewaysCamera(0.5);
    }
  
    rotateRight() {
      this.rotateCamera(-5);
    }
  
    rotateLeft() {
      this.rotateCamera(5);
    }
  
    updateMatrix() {
      this.viewMatrix.setLookAt(
        this.eye.elements[0], this.eye.elements[1], this.eye.elements[2],
        this.at.elements[0], this.at.elements[1], this.at.elements[2],
        this.up.elements[0], this.up.elements[1], this.up.elements[2]
      );
    }
  
    moveCamera(distance) {
      const dist = new Vector();
      dist.set(this.at);
      dist.sub(this.eye);
      dist.normalize();
      dist.mul(distance);
      this.eye.add(dist);
      this.at.add(dist);
      this.updateMatrix();
    }
  
    sidewaysCamera(distance) {
      const dist = new Vector();
      dist.set(this.at);
      dist.sub(this.eye);
      dist.normalize();
      dist.mul(distance);
      const sidewaysVector = Vector.cross(dist, this.up);
      this.at.add(sidewaysVector);
      this.eye.add(sidewaysVector);
      this.updateMatrix();
    }
  
    rotateCamera(angle) {
      const dist = new Vector();
      dist.set(this.at);
      dist.sub(this.eye);
      const rotationMatrix = new Matrix4().setRotate(angle, this.up.elements[0], this.up.elements[1], this.up.elements[2]);
      const rotatedVector = rotationMatrix.multiplyVector3(dist);
      const eye2 = new Vector();
      eye2.set(this.eye);
      this.at = eye2.add(rotatedVector);
      this.updateMatrix();
    }
  }