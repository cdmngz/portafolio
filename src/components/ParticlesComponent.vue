<script setup>
import { loadFull } from "tsparticles";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { onMounted } from "vue";

const options = {
  fullScreen: {
    enable: false,
    zIndex: 0,
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 20,
      limit: 20,
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 4,
    },
  },
  detectRetina: true,
};
const particlesInit = async (engine) => {
  await loadFull(engine);
};

// SCENE
const scene = new THREE.Scene();

// CAMERA
const camera = new THREE.PerspectiveCamera(
  7,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 36, 180); // Set position like this

// RENDERER
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000, 0); // the default
renderer.shadowMap.enabled = true;

// CONTROLS
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping = false;
orbitControls.minDistance = 1;
orbitControls.maxDistance = 30;
orbitControls.enablePan = false;
orbitControls.maxPolarAngle = Math.PI / 2 - 0.05;
orbitControls.update();

// LIGHTS
light();

let mixer;
// MODEL WITH ANIMATIONS
new GLTFLoader().load("/assets/planet.glb", function (gltf) {
  const model = gltf.scene;
  model.traverse(function (object) {
    if (object.isMesh) object.castShadow = true;
  });
  scene.add(model);
  mixer = new THREE.AnimationMixer(model);
  const clips = gltf.animations;
  clips.forEach(function (clip) {
    const action = mixer.clipAction(clip);
    action.play();
  });
});

const clock = new THREE.Clock();
// ANIMATE
function animate() {
  if (mixer) mixer.update(clock.getDelta());
  orbitControls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

// RESIZE HANDLER
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", onWindowResize);

function light() {
  scene.add(new THREE.AmbientLight(0xffffff, 0.7));

  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(-60, 100, -10);
  dirLight.castShadow = true;
  dirLight.shadow.camera.top = 50;
  dirLight.shadow.camera.bottom = -50;
  dirLight.shadow.camera.left = -50;
  dirLight.shadow.camera.right = 50;
  dirLight.shadow.camera.near = 0.1;
  dirLight.shadow.camera.far = 200;
  dirLight.shadow.mapSize.width = 4096;
  dirLight.shadow.mapSize.height = 4096;
  scene.add(dirLight);
}
onMounted(() => {
  const container = document.getElementsByClassName("planet");
  container[0].append(renderer.domElement);
  animate();
});
</script>

<template>
  <div class="container-particles bg-black">
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :options="options"
    />
    <div class="text-particles">
      <h2>May</h2>
      <h2>The <span>FORCE</span></h2>
      <h2>Be</h2>
      <h2>With <span>YOU</span></h2>
    </div>
    <div class="planet"></div>
    <p>
      Thanks to
      <a class="text-green" href="https://codepen.io/ncerminara" target="_blank"
        >ncerminara</a
      >
      for the sword and
      <a class="text-green" href="https://sketchfab.com/grox777" target="_blank"
        >Yo.Ri</a
      >
      for the planet
    </p>
    <div class="lightsaber">
      <label for="yoda-example"></label>
      <input type="checkbox" id="yoda-example" checked="checked" />
      <div class="plasma yoda"></div>
      <div class="switch"></div>
    </div>
    <svg
      style="transform: rotate(180deg) translateY(98%)"
      viewBox="0 0 1440 160"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#ffffff"
        d="M0,160L30,160C60,160,120,160,180,149.3C240,139,300,117,360,96C420,75,480,53,540,64C600,75,660,117,720,138.7C780,160,840,160,900,144C960,128,1020,96,1080,85.3C1140,75,1200,85,1260,85.3C1320,85,1380,75,1410,69.3L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
      ></path>
    </svg>
  </div>
</template>

<style scoped>
#tsparticles {
  position: relative;
  height: 100%;
}
.container-particles {
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.container-particles p {
  color: white;
  font-size: 0.8em;
  font-style: italic;
  position: absolute;
  right: 1%;
  top: 0;
}
.lightsaber {
  position: absolute;
  bottom: 25%;
  right: 10%;
  animation: lightsaber 6s 4s;
}

.lightsaber label {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  text-indent: -9999px;
  width: 20px;
  height: 60px;
  border-bottom: solid 4px grey;
  border-top: solid 5px grey;
  border-radius: 5px;
  background: linear-gradient(
    to right,
    rgba(226, 226, 226, 1) 0%,
    rgba(219, 219, 219, 1) 50%,
    rgba(209, 209, 209, 1) 51%,
    rgba(254, 254, 254, 1) 100%
  );
}
.lightsaber .switch {
  background: #b94a37;
  border-radius: 10px;
  bottom: 25px;
  display: block;
  height: 10px;
  left: 13px;
  position: absolute;
  transition: left 200ms;
  width: 5px;
}

.lightsaber input[type="checkbox"] {
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
}

.lightsaber .plasma {
  border-radius: 12px 12px 0 0;
  bottom: 59px;
  display: block;
  filter: blur(1px);
  height: 0;
  left: 2px;
  position: absolute;
  transition: height 300ms;
  width: 15px;
}
.lightsaber input[type="checkbox"]:checked ~ div.plasma {
  height: 55vh;
}
.planet {
  position: absolute;
  animation: planet 6s 6s ease-out forwards;
}
.text-particles {
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  padding: 2% 5%;
  position: absolute;
  top: 0;
  width: 100%;
}
.text-particles h2 {
  animation: movement 6s 4s;
  color: rgba(255, 255, 255, 0.5);
  font-size: clamp(4rem, 10vw, 5rem);
  font-weight: 400;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}
.text-particles h2 span {
  color: white;
  font-weight: 600;
}
.yoda {
  background: linear-gradient(
    to right,
    rgb(135, 220, 90) 0%,
    rgb(254, 254, 254) 30%,
    rgb(254, 254, 254) 50%,
    rgb(254, 254, 254) 70%,
    rgb(135, 220, 90) 100%
  );
}

@keyframes lightsaber {
  49% {
    right: 50%;
  }
  60%,
  70% {
    right: 35%;
  }
  100% {
    right: 10%;
  }
}

@keyframes movement {
  49% {
    width: 0;
  }
  60%,
  70% {
    width: 5.2em;
  }
  99% {
    width: 99%;
  }
  100% {
    width: 100%;
    border-right: none;
  }
}

@keyframes planet {
  from {
    top: 100%;
  }
  to {
    top: 0%;
  }
}
@media only screen and (max-width: 600px) {
  .text-particles {
    justify-content: center;
    align-items: center;
  }
}
</style>
