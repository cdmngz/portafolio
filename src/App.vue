<template>
  <v-app>
    <v-main>
      <ParticlesComponent />
      <svg
        style="transform: translateY(-1px)"
        viewBox="0 0 1440 160"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :fill="this.$vuetify.theme.themes.light.colors.primary"
          d="M0,160L30,160C60,160,120,160,180,149.3C240,139,300,117,360,96C420,75,480,53,540,64C600,75,660,117,720,138.7C780,160,840,160,900,144C960,128,1020,96,1080,85.3C1140,75,1200,85,1260,85.3C1320,85,1380,75,1410,69.3L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <CVComponent />
      <svg
        style="transform: rotate(180deg) translateY(-10px)"
        viewBox="0 0 1440 160"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#2E0F15"
          d="M0,160L30,160C60,160,120,160,180,149.3C240,139,300,117,360,96C420,75,480,53,540,64C600,75,660,117,720,138.7C780,160,840,160,900,144C960,128,1020,96,1080,85.3C1140,75,1200,85,1260,85.3C1320,85,1380,75,1410,69.3L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <TimeLineComponent />
      <FooterComponent />
    </v-main>
  </v-app>
</template>

<script>
import CVComponent from "./components/CVComponent.vue";
import ParticlesComponent from "./components/ParticlesComponent.vue";
import TimeLineComponent from "./components/TimeLineComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",

  components: {
    ParticlesComponent,
    CVComponent,
    TimeLineComponent,
    FooterComponent,
  },
};
</script>
