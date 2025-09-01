// INITIALISATION DE THREE.JS
const canvas = document.getElementById('bg-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 2;

// Géométrie simple animée
const geometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 16);
const material = new THREE.ShaderMaterial({
  uniforms: { time: { value: 0 } },
  vertexShader: `
    uniform float time;
    varying vec2 vUv;
    void main(){
      vUv = uv;
      vec3 pos = position + normal * sin(time + position.y * 5.0) * 0.1;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(vUv.x, 0.2, 1.0 - vUv.x, 1.0);
    }
  `
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Redimensionnement
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Boucle d’animation
function animate() {
  requestAnimationFrame(animate);
  material.uniforms.time.value += 0.01;
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// ANIMATIONS GSAP
window.addEventListener('load', () => {
  gsap.from('.nav-link', {
    y: -20, opacity: 0, stagger: 0.2, duration: 0.8, ease: 'power3.out'
  });

  gsap.from('#home h1', {
    y: 50, opacity: 0, duration: 1, delay: 0.5, ease: 'power4.out'
  });

  gsap.from('#home p', {
    y: 50, opacity: 0, duration: 1, delay: 0.8
  });

  gsap.from('#home a', {
    y: 50, opacity: 0, duration: 1, delay: 1.1
  });
});
