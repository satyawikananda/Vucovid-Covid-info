<template>
  <v-card>
    <v-footer class="font-weight-medium cyan lighten-3">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>VuCovid | Covid-19 info</strong
        ><br />
        <span
          >Built with<v-icon color="pink">mdi-heart</v-icon> by
          <a
            href="https://github.com/satyawikananda/Vucovid-Covid-info"
            style="text-decoration:none"
            target="_blank"
            rel="noreferrer"
            >Satya Wikananda</a
          ></span
        ><br />
        <span
          >Data API provided by
          <a
            href="https://github.com/mathdroid/covid-19-api"
            style="text-decoration:none"
            target="_blank"
            rel="noreferrer"
            >Mathdroid</a
          ></span
        >
      </v-col>
    </v-footer>
  </v-card>
</template>
