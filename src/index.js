import * as THREE from "three";
import { Object3D } from "three";
import ThreeMeshUI from "three-mesh-ui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

let scene, camera, renderer, controls;

window.addEventListener("load", () => {
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
  camera.position.z = 3;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);

  makeTextPanel();
  animate();
});

class Scene extends Object3D {
  // const room = new THREE.LineSegments(
  //   new BoxLineGeometry(6, 6, 6, 10, 10, 10).translate(0, 3, 0),
  //   new THREE.LineBasicMaterial({ color: 0x808080 })
  // );

  constructor(){

    this.add()
  }
}

class ScenePanel extends Object3D {
  constructor(title, description, position){
    super();

    this.init('Scene Title', 'Scene Description');
  }

  init(title, description){
    const container = new ThreeMeshUI.Block({
      width: 1,
      height: 0.5
    });
  
    container.position.set(0, 0, 0);
    // container.rotation.x = -0.3;
    this.add(container);

    const textBlock = new ThreeMeshUI.Block({
      height: 0.1,
      width: 0.9,
      margin: 0.01,
      padding: 0.02,
      fontSize: 0.025,
      alignContent: "left",
      backgroundColor: new THREE.Color( 'blue' ),
      backgroundOpacity: 0.0,

      fontFamily:
        "https://unpkg.com/three-mesh-ui/examples/assets/Roboto-msdf.json",
      fontTexture:
        "https://unpkg.com/three-mesh-ui/examples/assets/Roboto-msdf.png"
    }).add(
      new ThreeMeshUI.Text({
        content: title + '\n',
        fontSize: 0.05,
        // fontColor: new THREE.Color(0x96ffba)
      }),  
      new ThreeMeshUI.Text({
        content: description
      })
    );

    textBlock.position.set(0, -0.13, 0.04);
    // textBlock.rotation.x = -0.3;

    this.add(textBlock);
  }
}

function makeTextPanel() {

  for(var i = 0;i<3;i++){
    for(var j=0;j<3;j++){

      var x = 1.1*i-1;
      var y = j*0.6;

      let panel = new ScenePanel();
      panel.position.set(x, y, 0);
    
      scene.add(panel);
    }
  }
}

const animate = function () {
  requestAnimationFrame(animate);

  ThreeMeshUI.update();

  controls.update();

  renderer.render(scene, camera);
};
