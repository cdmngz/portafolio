<script setup>
import { loadFull } from "tsparticles";

const options = {
  background: {
    color: {
      value: "#141236",
    },
  },
  fullScreen: {
    enable: false,
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
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 60,
      limit: 62,
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};
const particlesInit = async (engine) => {
  await loadFull(engine);
};
</script>

<template>
  <div class="container-particles">
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :options="options"
    />
    <div class="text-particles">
      <h1>Welcome... May the Force be with you.</h1>
    </div>
  </div>
</template>

<style scoped>
#tsparticles {
  position: relative;
  height: 100%;
}
.container-particles {
  position: relative;
  height: 40vh;
}
.text-particles {
  display: flex;
  left: 0;
  position: absolute;
  top: 60%;
  user-select: none;
  width: 100%;
}

.text-particles h1 {
  animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 800ms steps(44) infinite normal none;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  color: white;
  overflow: hidden;
  margin: 0 auto;
  text-align: center;
  transform: translateY(-50%);
  white-space: nowrap;
  width: 24em;
  font-size: clamp(1rem, 5vw, 2rem);
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 17.5em;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
