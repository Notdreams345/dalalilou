// Fond animé avec Three.js
const canvas = document.getElementById('bgCanvas');
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const geometry = new THREE.IcosahedronGeometry(2, 1);
const material = new THREE.MeshStandardMaterial({
  color: 0x00ffff,
  wireframe: true,
  transparent: true,
  opacity: 0.4
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.003;
  mesh.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();

// GSAP fade-in au scroll
document.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
