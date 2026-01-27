import * as Three from 'three';

//Create scene
const scene = new Three.Scene();
scene.background = new Three.Color("#f0f0f0");

//Create camera
const camera = new Three.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//Create and add Cube as an object to the scene
const geometry = new Three.BoxGeometry();
const material = new Three.MeshLambertMaterial({ color: 0x68585 })
const cube = new Three.Mesh(geometry, material);
scene.add(cube);

//Add light to the scene
const light = new Three.DirectionalLight(0x9cdba6, 10);
light.position.set(1, 1, 1);
scene.add(light);

//Create renderer and add it to the DOM
const render = new Three.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(render.domElement);

//Create animation loop to render the scene

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    render.render(scene, camera);
}

animate();
