import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Object
 */
const createCube = (x = 0) => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = x;

  return mesh;
};

const group = new THREE.Group();
scene.add(group);

const cube1 = createCube(0);
const cube2 = createCube(-2);
const cube3 = createCube(2);

group.add(cube1, cube2, cube3);
group.scale.x = 2;

group.rotateY(10);
group.rotateZ(10);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
scene.add(camera);

camera.lookAt(cube1.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
