<template>
  <v-footer dark padless color="primary">
    <v-card flat tile class="white--text text-center bg-primary">
      <v-card-text>
        <v-btn
          icon
          variant="text"
          href="https://github.com/cdmngz"
          target="_blank"
        >
          <v-icon size="24px">mdi-github</v-icon>
        </v-btn>
        <v-btn
          icon
          variant="text"
          href="https://www.youtube.com/@cdapps"
          target="_blank"
        >
          <v-icon size="24px">mdi-youtube</v-icon>
        </v-btn>
        <v-btn
          icon
          variant="text"
          href="https://stackoverflow.com/users/12026200/"
          target="_blank"
        >
          <v-icon size="24px">mdi-stack-overflow</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        There was a time I used to look into my father's eyes In a happy home I
        was a king, I had a golden throne Those days are gone Now they're
        memories on the wall I hear the songs from the places where I was born
        Up on a hill across the blue lake That's where I had my first heartbreak
        I still remember how it all changed My father said Don't you worry,
        don't you worry, child See heaven's got a plan for you Don't you worry,
        don't you worry now Yeah</v-card-text
      >
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>@cdmngz</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
