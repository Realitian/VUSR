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
  camera.position.z = 1;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);

  makeTextPanel();
  animate();
});

class Scene extends {

}

class ScenePanel extends Object3D {
  constructor(){
    super();
  }

  init(title, description){

  }
}

function makeTextPanel() {
  const container = new ThreeMeshUI.Block({
    width: 1.2,
    height: 0.5,
    padding: 0.05,
    justifyContent: "center",
    alignContent: "left",
    fontFamily:
      "https://unpkg.com/three-mesh-ui/examples/assets/Roboto-msdf.json",
    fontTexture:
      "https://unpkg.com/three-mesh-ui/examples/assets/Roboto-msdf.png"
  });

  container.position.set(0, 0, 0);
  container.rotation.x = -0.3;
  scene.add(container);

  //

  container.add(
    new ThreeMeshUI.Text({
      content: "This library supports line-break-friendly-characters,",
      fontSize: 0.055
    }),

    new ThreeMeshUI.Text({
      content:
        " As well as multi-font-size lines with consistent vertical spacing.",
      fontSize: 0.08
    })
  );
}

//

const animate = function () {
  requestAnimationFrame(animate);

  ThreeMeshUI.update();

  controls.update();

  renderer.render(scene, camera);
};
