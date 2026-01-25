import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#f0f0f0");

    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create and add object to the scene
    const geometry = new THREE.DodecahedronGeometry();
    const material = new THREE.MeshLambertMaterial({ color: "#468585", emissive: "#468585" });
    const dodecahedron = new THREE.Mesh(geometry, material);

    const cube = new THREE.BoxGeometry(2, 0.1, 2);
    const boxMaterial = new THREE.MeshStandardMaterial({ color: "#b4b4b5", emissive: "#b4b4b5" });
    const box = new THREE.Mesh(cube, boxMaterial);
    box.position.y = -1.5;

    scene.add(dodecahedron);
    scene.add(box);

    // Add ambient light for base illumination
    const light = new THREE.SpotLight(0x006769, 100);
    light.position.set(1, 1, 1);
    scene.add(light);

    // Orbit control
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = true;
    controls.enableZoom = true;

    // Animation
    function animate() {
      requestAnimationFrame(animate);

      dodecahedron.rotation.x += 0.01;
      dodecahedron.rotation.y += 0.01;
      box.rotation.y += 0.005;

      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    // Handle window resize - re-renders DOM on resize
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener and prevent memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
