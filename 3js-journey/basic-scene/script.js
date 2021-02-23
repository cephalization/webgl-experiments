const size = {
  height: 600,
  width: 800,
};
const scene = new THREE.Scene();

// Red Cube object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const cubeMesh = new THREE.Mesh(geometry, material);

// Add Cube to scene
scene.add(cubeMesh);

// Create camera to view scene
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
scene.add(camera);

// Move the camera back a bit so the cube will be visible
camera.position.z = 3;
camera.position.x = 1;

// Create a renderer to shove all this stuff into
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});

// Configure renderer properties
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
