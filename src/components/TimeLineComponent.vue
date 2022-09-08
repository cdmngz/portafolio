<script setup>
const timeLineData = [
  {
    title: "Blockchain",
    class: "text-white",
    lineColor: "#777",
    dotColor: "#611",
    projects: [
      {
        imageSrc: "secretfans.png",
        href: "https://www.secretfans.fans/",
        btnColor: "white",
      },
      {
        imageSrc: "mint.png",
        href: "https://prueba-ad103.web.app/",
        btnColor: "primary",
      },
    ],
  },
  {
    title: "Systems",
    class: "text-white",
    lineColor: "#777",
    dotColor: "#713",
    projects: [
      {
        imageSrc: "keeped.png",
        href: "https://vue-calendario-c810c.web.app/",
        btnColor: "white",
      },
      {
        imageSrc: "madrina.png",
        href: "https://madrina-madrid.web.app/",
        btnColor: "white",
      },
    ],
  },
  {
    title: "Utils",
    class: "text-white",
    lineColor: "#777",
    dotColor: "#625",
    projects: [
      {
        imageSrc: "cmd.png",
        href: "https://comandosdev.web.app/",
        btnColor: "primary",
      },
      {
        imageSrc: "canipay.png",
        href: "https://canipay3.web.app/",
        btnColor: "primary",
      },
    ],
  },
  {
    title: "Curious things",
    class: "text-white",
    lineColor: "#777",
    dotColor: "#658",
    projects: [
      {
        imageSrc: "windows.png",
        href: "https://cdmngz.github.io/windows/",
        btnColor: "white",
      },
      {
        imageSrc: "pokedex.png",
        href: "https://poke-dex-pokemon.web.app/",
        btnColor: "white",
      },
      {
        imageSrc: "trex.png",
        href: "https://cdmngz.github.io/T-RexChrome/",
        btnColor: "primary",
      },
    ],
  },
];
</script>

<template>
  <div class="container-timeline">
    <div v-for="(item, index) in timeLineData" :key="index">
      <h1 :class="item.class">{{ item.title }}</h1>
      <v-timeline :line-color="item.lineColor">
        <v-timeline-item
          :dot-color="item.dotColor"
          v-for="project in item.projects"
          :key="project"
          size="small"
        >
          <Transition name="fade" appear>
            <a :href="project.href" target="_blank">
              <v-card width="30vw">
                <v-img
                  class="align-end text-white bg-black"
                  :src="`/assets/${project.imageSrc}`"
                  :lazy-src="`/assets/lazySrc.png`"
                >
                </v-img>
              </v-card>
            </a>
          </Transition>
        </v-timeline-item>
      </v-timeline>
    </div>
    <svg
      style="transform: rotate(180deg) translateY(-50px)"
      viewBox="0 0 1440 160"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        :fill="$vuetify.theme.themes.light.colors.primary"
        d="M0,160L30,160C60,160,120,160,180,149.3C240,139,300,117,360,96C420,75,480,53,540,64C600,75,660,117,720,138.7C780,160,840,160,900,144C960,128,1020,96,1080,85.3C1140,75,1200,85,1260,85.3C1320,85,1380,75,1410,69.3L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
      ></path>
    </svg>
  </div>
</template>

<style scoped>
.container-timeline {
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(46, 15, 21, 1) 0%,
    rgba(46, 15, 21, 1) 35%,
    rgba(76, 117, 190, 1) 100%
  );
}

.v-enter-active,
.v-leave-active {
  transform: translateX(20px);
}

.v-enter-from,
.v-leave-to {
  transform: translateX(0px);
}
</style>
