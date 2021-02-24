import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// // example of using Date to compute time delta
// let time = Date.now();
// const tick = () => {
//   // time
//   const currentTime = Date.now();
//   const deltaTime = currentTime - time;
//   time = currentTime;

//   // using the delta means that the animation will perform
//   // at the same speed regardless of the framerate of the user
//   // machine
//   let vel = 0.001 * deltaTime;

//   // update objects
//   mesh.rotation.y += vel;
//   mesh.rotation.x += vel;
//   mesh.rotation.z += vel;

//   // render and call next frame
//   renderer.render(scene, camera);
//   requestAnimationFrame(tick);
// };
// tick();

// example of use Clock to compute time
// const clock = new THREE.Clock();
// const tick = () => {
//   // Clock
//   const elapsedTime = clock.getElapsedTime();

//   // vel = 1 second incrementation over each frame
//   // let vel = elapsedTime;

//   // vel = 1 circle radius (revolution) per second spread across each frame
//   let vel = elapsedTime * Math.PI;

//   // update objects
//   mesh.position.x = Math.cos(vel);
//   mesh.position.y = Math.sin(vel);

//   // update camera
//   camera.lookAt(mesh.position);

//   // render and call next frame
//   renderer.render(scene, camera);
//   requestAnimationFrame(tick);
// };
// tick();

// example of using the gsap library to perform animations
// it will perform its own ticks and updates overtime, you
// just need to re-render the scene yourself every frame
gsap.to(mesh.position, { x: 2, duration: 1, delay: 1 });
gsap.to(mesh.position, { x: 0, duration: 1, delay: 2 });
gsap.to(mesh.position, { x: -2, duration: 1, delay: 3 });
gsap.to(mesh.position, { x: 0, duration: 1, delay: 2 });

const tick = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
};
tick();
