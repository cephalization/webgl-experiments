import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

// perspective camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  1,
  100
);

// orthographic camera
// const aspectRatio = sizes.width / sizes.height;
// const camera = new THREE.OrthographicCamera(
//   -aspectRatio,
//   aspectRatio,
//   1,
//   -1,
//   0.1,
//   100
// );
// camera.position.x = 2;
// camera.position.y = 2;
camera.position.z = 5;
camera.lookAt(mesh.position);
scene.add(camera);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animate
const clock = new THREE.Clock();

// const mouseCoords = {
//   x: 0,
//   y: 0,
// };

// const keyVel = {
//   left: 0,
//   right: 0,
// };

// const emptyVector = new Vector3();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  //   camera.position.x = Math.sin(mouseCoords.x * 1.5 * -1) * 3;
  //   camera.position.z = Math.cos(mouseCoords.x * 1.5) * 3;

  //   camera.position.y += keyVel.left * elapsedTime * 0.5;
  //   camera.position.y += keyVel.right * elapsedTime * 0.5;

  //   camera.position.y = mouseCoords.y * 5;
  //   camera.lookAt(mesh.position);

  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

// addEventListener("mousemove", (e) => {
//   const { clientX, clientY } = e;

//   mouseCoords.x = (clientX / sizes.width - 0.5) * 3;
//   mouseCoords.y = (clientY / sizes.height - 0.5) * 3;
// });

// addEventListener("keydown", (e) => {
//   if (e.key === "a") {
//     keyVel.left = -1;
//   }

//   if (e.key === "d") {
//     keyVel.right = 1;
//   }
// });

// addEventListener("keyup", (e) => {
//   if (e.key === "a") {
//     keyVel.left = 0;
//   }

//   if (e.key === "d") {
//     keyVel.right = 0;
//   }
// });
