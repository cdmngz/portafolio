<script setup>
import { ref } from "vue";

const yearValue = ref(0);
const flagLang = ref(1);
const profession = [
  "Ingeniero de Software",
  "Software Engineer",
  "Engenheiro de Software",
  "Ingegnere del Software",
  "Enginyer de Software",
];
const flags = [
  {
    level: "✔️",
    countries: [
      { value: 0, flag: "esp.svg" },
      { value: 1, flag: "usa.svg" },
      { value: 2, flag: "bra.svg" },
    ],
  },
  {
    level: "👍",
    countries: [
      { value: 3, flag: "it.svg" },
      { value: 4, flag: "cat.svg" },
    ],
  },
];
const infolang = [
  "#include, functions, int *, struct, c++ class", //C
  "await fetch, --allow-[net-read], for await, WebAssembly, Workers", //Deno
  "Firestore, auth, analytics, storage", //"gCloud + Firebase"
  "checkout -b branch, log, diff, stash", //Git
  "abstract, extends, interface, implements, static", //Java
  "EM6, Async/Await, Modules", //Js
  "JOIN, IF, GROUP_CONCAT, DROP TABLE", //MySql
  "find().sort().limit(), $gt, $lte", //MongoDB
  "npm, cors, jwt, middleware, axios", // Node
  "var_dumb, merge, fopen", //PHP
  "Flask, SqlAlchemy, FastApi", //Python
  "Hooks, Components, JSX", //React
  "Vue2, Vue3", //Vue
  "Web3, solidity, BSC, Mint NFT", //Blockchain
];
const infoArray = [
  {
    imagen: "cerebro.svg",
    subtitulo: "POO, SQL, Patterns23",
    titulo: [
      "Universidad",
      "University",
      "Universidad",
      "Universidad",
      "Universitat",
    ],
    subImg: ["ven.svg"],
    lang: {
      C: 20,
      Deno: 0,
      "gCloud + Firebase": 0,
      Git: 0,
      Java: 20,
      Js: 10,
      MySql: 20,
      MongoDB: 0,
      "NodeJs + Express": 0,
      PHP: 20,
      Python: 0,
      React: 0,
      Vue: 0,
      Blockchain: 0,
    },
  },
  {
    imagen: "sensible.svg",
    subtitulo: "Lex-Tempus",
    titulo: [
      "Backend Developer",
      "Backend Developer",
      "Backend Developer",
      "Backend Developer",
      "Backend Developer",
    ],
    subImg: ["ven.svg"],
    lang: {
      C: 30,
      Deno: 0,
      "gCloud + Firebase": 0,
      Git: 0,
      Java: 30,
      Js: 20,
      MySql: 30,
      MongoDB: 0,
      "NodeJs + Express": 0,
      PHP: 30,
      Python: 0,
      React: 0,
      Vue: 0,
      Blockchain: 0,
    },
  },
  {
    imagen: "travel.svg",
    titulo: [
      "Mochilero",
      "Backpacker",
      "Mochileiro",
      "Saccopelista",
      "Motxiller",
    ],
    subImg: ["bra.svg", "ven.svg"],
    lang: {
      C: 30,
      Deno: 0,
      "gCloud + Firebase": 0,
      Git: 0,
      Java: 30,
      Js: 20,
      MySql: 30,
      MongoDB: 0,
      "NodeJs + Express": 0,
      PHP: 30,
      Python: 0,
      React: 0,
      Vue: 0,
      Blockchain: 0,
    },
  },
  {
    imagen: "bug.svg",
    subtitulo: "HyperPBX",
    titulo: [
      "FullStack Developer",
      "FullStack Developer",
      "FullStack Developer",
      "FullStack Developer",
      "FullStack Developer",
    ],
    subImg: ["arg.svg"],
    lang: {
      C: 50,
      Deno: 0,
      "gCloud + Firebase": 0,
      Git: 30,
      Java: 50,
      Js: 30,
      MySql: 30,
      MongoDB: 0,
      "NodeJs + Express": 0,
      PHP: 50,
      Python: 0,
      React: 0,
      Vue: 0,
      Blockchain: 0,
    },
  },
  {
    imagen: "bug.svg",
    subtitulo: "HyperPBX",
    titulo: [
      "FullStack Developer",
      "FullStack Developer",
      "FullStack Developer",
      "FullStack Developer",
      "FullStack Developer",
    ],
    subImg: ["arg.svg"],
    lang: {
      C: 60,
      Deno: 0,
      "gCloud + Firebase": 0,
      Git: 40,
      Java: 60,
      Js: 60,
      MySql: 40,
      MongoDB: 0,
      "NodeJs + Express": 10,
      PHP: 60,
      Python: 10,
      React: 0,
      Vue: 0,
      Blockchain: 0,
    },
  },
  {
    imagen: "travel.svg",
    titulo: [
      "Mochilero",
      "Backpacker",
      "Mochileiro",
      "Saccopelista",
      "Motxiller",
    ],
    subImg: ["arg.svg", "bra.svg", "chi.svg"],
    lang: {
      C: 60,
      Deno: 0,
      "gCloud + Firebase": 0,
      Git: 50,
      Java: 60,
      Js: 60,
      MySql: 50,
      MongoDB: 0,
      "NodeJs + Express": 10,
      PHP: 60,
      Python: 20,
      React: 0,
      Vue: 0,
      Blockchain: 0,
    },
  },
  {
    imagen: "tuerca.svg",
    subtitulo: "Ministerio de Educación",
    titulo: [
      "FullStack Developer",
      "FullStack Developer",
      "FullStack Developer",
      "FullStack Developer",
      "FullStack Developer",
    ],
    subImg: ["arg.svg"],
    lang: {
      C: 60,
      Deno: 0,
      "gCloud + Firebase": 10,
      Git: 60,
      Java: 70,
      Js: 70,
      MySql: 60,
      MongoDB: 20,
      "NodeJs + Express": 20,
      PHP: 70,
      Python: 30,
      React: 0,
      Vue: 0,
      Blockchain: 0,
    },
  },
  {
    imagen: "tuerca.svg",
    subtitulo: "Ministerio de Educación",
    titulo: [
      "FullStack Developer",
      "FullStack Developer",
      "FullStack Developer",
      "FullStack Developer",
      "FullStack Developer",
    ],
    subImg: ["arg.svg"],
    lang: {
      C: 60,
      Deno: 0,
      "gCloud + Firebase": 30,
      Git: 70,
      Java: 80,
      Js: 80,
      MySql: 70,
      MongoDB: 30,
      "NodeJs + Express": 40,
      PHP: 80,
      Python: 50,
      React: 20,
      Vue: 30,
      Blockchain: 10,
    },
  },
  {
    imagen: "proceso.svg",
    subtitulo: "Mundo Estudiante",
    titulo: [
      "Profesor Prog",
      "Dev Teacher",
      "Professor Prog",
      "Professore Prog",
      "Professor Prog",
    ],
    subImg: ["esp.svg"],
    lang: {
      C: 70,
      Deno: 20,
      "gCloud + Firebase": 50,
      Git: 80,
      Java: 80,
      Js: 85,
      MySql: 80,
      MongoDB: 40,
      "NodeJs + Express": 60,
      PHP: 80,
      Python: 80,
      React: 40,
      Vue: 50,
      Blockchain: 30,
    },
  },
  {
    imagen: "techarm.svg",
    subtitulo: "Freelance/BBVA/Indra",
    titulo: [
      "FullStack Developer",
      "FullStack Developer",
      "FullStack Developer",
      "FullStack Developer",
      "FullStack Developer",
    ],
    subImg: ["esp.svg"],
    lang: {
      C: 70,
      Deno: 40,
      "gCloud + Firebase": 90,
      Git: 95,
      Java: 95,
      Js: 95,
      MySql: 95,
      MongoDB: 70,
      "NodeJs + Express": 90,
      PHP: 80,
      Python: 95,
      React: 60,
      Vue: 95,
      Blockchain: 50,
    },
  },
];
const ticksLabels = {
  0: "2012",
  1: "2013",
  2: "2014",
  3: "2015",
  4: "2016",
  5: "2017",
  6: "2018",
  7: "2019",
  8: "2020",
  9: "2021",
};
const ticksSize = Object.getOwnPropertyNames(ticksLabels).length;
const handleFlagLangOnClick = (value) => {
  flagLang.value = value;
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col class="text-center" cols="12" xs="12" sm="4">
        <v-list class="d-flex flex-column">
          <v-list-item-avatar style="margin: 0">
            <img src="/assets/pic.png" />
          </v-list-item-avatar>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold title"
                >Carlos Domínguez</v-list-item-title
              >
              <v-list-item-subtitle class="font-weight-light">{{
                profession[flagLang]
              }}</v-list-item-subtitle>
              <v-list-item-subtitle class="font-weight-light mt-7"
                >📧 crlsdmngz3@gmail.com</v-list-item-subtitle
              >
              <v-list-item
                class="font-weight-bold mt-7"
                v-for="(item, index) in flags"
                :key="index"
              >
                <span class="d-block mb-1">{{ item.level }}</span>
                <v-img
                  contain
                  class="d-flex d-inline-flex mx-3 pointer"
                  @click="handleFlagLangOnClick(country.value)"
                  :src="`/assets/${country.flag}`"
                  :style="[
                    'cursor: pointer',
                    flagLang === country.value
                      ? 'opacity: 1;'
                      : 'opacity: 0.6;',
                  ]"
                  v-for="(country, j) in item.countries"
                  :key="j"
                  width="30"
                >
                </v-img>
              </v-list-item>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-divider :vertical="!$vuetify.display.xs"></v-divider>

      <v-col cols="12" xs="12" sm="7" class="mx-4">
        <h3 class="text-center" style="user-select: none">🌏🔬👨🏻‍💻</h3>
        <br /><br /><br /><br />
        <v-row row wrap>
          <v-slider
            color="yellow"
            :max="ticksSize - 1"
            step="1"
            :direction="$vuetify.display.xs ? 'vertical' : 'horizontal'"
            :ticks="ticksLabels"
            :show-ticks="true"
            tick-size="1"
            track-color="primary"
            v-model="yearValue"
            class="pa-2 mt-15 align-self-start"
            thumb-label
            thumb-color="primary"
          >
            <template v-slot:thumb-label="{ value }" style="background: red">
              <v-card
                width="280"
                :style="
                  $vuetify.display.xs
                    ? 'margin: -60% 0 0 -55%'
                    : 'transform: translateY(-45%)'
                "
              >
                <v-row>
                  <v-col cols="12">
                    <v-card-title class="d-flex mt-4 align-stretch">
                      <v-avatar size="32" rounded>
                        <v-img
                          :src="`/assets/${infoArray[yearValue].imagen}`"
                          alt="https://www.flaticon.es/autores/nikita-golubev"
                        ></v-img>
                      </v-avatar>
                      <span class="ml-3">
                        {{ infoArray[yearValue].titulo[flagLang] }}
                      </span>
                    </v-card-title>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-card-text class="d-flex">
                      <span>
                        {{ infoArray[yearValue].subtitulo }}
                      </span>
                      <v-img
                        height="30"
                        class="align-self-start"
                        :src="`/assets/${item}`"
                        width="20"
                        v-for="item in infoArray[yearValue].subImg"
                        :key="item"
                      >
                      </v-img
                    ></v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </template>
          </v-slider>
        </v-row>
        <v-row no-gutters>
          <v-col
            v-for="(item, label, index) in infoArray[yearValue].lang"
            :key="index"
            cols="6"
            class="pa-3"
          >
            <div cols="12" xs="12">
              <v-tooltip>
                <template v-slot:activator="{ props }">
                  <span class="font-weight-light mb-1" v-bind="props">{{
                    label
                  }}</span>
                </template>
                <span>{{ infolang[index] }}</span>
              </v-tooltip>
              <v-progress-linear
                height="5"
                background-color="primary"
                :model-value="item"
                color="yellow-lighten-2"
                rounded
              ></v-progress-linear>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
