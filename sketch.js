// draw a spinning box
// with width, height and depth of 50
 // this variable will hold our webcam video
 let cam;
function setup() {
  createCanvas(1500, 1500, WEBGL);
  cam = createCapture(VIDEO);
   cam.size(710, 400);
  describe('a box rotating in 3D space with specular highlight. Clicking the mouse toggles the specular highlight color between rgb(255,255,255) and the default rgb(255,255,255).');
}

function draw() {
   background(0);
  // move your mouse to change light position
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  // to set the light position,
  // think of the world's coordinate as:
  // -width/2,-height/2 ----------- width/2,-height/2
  //                   |           |
  //                   |    0,0    |
  //                   |           |
  //  -width/2,height/2 ----------- width/2,height/2
  pointLight(250, 250, 250, locX, locY, 50);
  texture(cam);
  rotateX(0.5);
  noStroke();
  sphere(200);
  background(200);
  rotateX(frameCount * 0.008);
  rotateY(frameCount * 0.008);
  box(mouseX, mouseY, 100);
}