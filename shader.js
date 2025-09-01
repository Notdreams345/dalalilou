// shader.js
import * as THREE from 'https://cdn.skypack.dev/three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('background'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.PlaneGeometry(2, 2);
const material = new THREE.ShaderMaterial({
  fragmentShader: `
    void main() {
      vec2 uv = gl_FragCoord.xy / vec2(800.0, 600.0);
      gl_FragColor = vec4(uv.x, uv.y, 0.5 + 0.5*sin(uv.x*10.0), 1.0);
    }
  `
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
camera.position.z = 1;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
