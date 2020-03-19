<template>
  <section id="sectionTwo">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" sm="12" md="12" lg="12">
          <div class="text-center">
            <h1 class="text-black display-2 font-weight-light mb-3">
              Data Graph Image
            </h1>
            <span class="subtitle-1 font-weight-light"
              >This is the data graph image corona virus, this data is taken
              from JHU CSSE for now.
            </span>
            <p class="subtitle-1 font-weight-light">
              This Graph image is taken from:
              <a
                href="https://github.com/mathdroid/covid-19-api"
                style="text-decoration:none"
                >mathdroid/covid-19-api</a
              >
            </p>
            <v-divider />
          </div>
        </v-col>
      </v-row>
      <v-container grid-list-md>
        <v-flex md6 xs12 class="mx-auto">
          <v-select
            v-model="searchCountry"
            menu-props="auto"
            label="Select Country"
            solo
            dense
            :items="states"
            @change="getImgGraph"
          ></v-select>
        </v-flex>
        <v-layout row wrap>
          <v-flex md6 xs12>
            <div v-if="isLoading">
              <loading loading="Loading Image" />
            </div>
            <v-img
              :src="srcSpecific"
              :lazy-src="srcSpecific"
              aspect-ratio="1.7"
              contain
              v-else
            />
          </v-flex>
          <v-flex md6 xs12>
            <v-img :src="src" :lazy-src="src" aspect-ratio="1.7" contain />
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </section>
</template>
<script>
import { getContries } from "@/mixins/getCountries.js";
import { API_URL } from "@/const.js";
import loading from "@/components/loading/Loading.vue";
export default {
  mixins: [getContries],
  components: {
    loading
  },
  data() {
    return {
      src: `${API_URL}og`,
      states: [],
      searchCountry: "Indonesia",
      srcSpecific: "",
      isLoading: false
    };
  },
  methods: {
    async getImgGraph() {
      try {
        this.srcSpecific =
          `${API_URL}countries/` + this.searchCountry + "/" + "og";
        if (this.srcSpecific == false) {
          this.srcSpecific =
            "https://firebasestorage.googleapis.com/v0/b/weebsclopedia.appspot.com/o/img%2Fplaceholder.jpg?alt=media&token=d008bbbe-af3b-4a4a-a37e-dd90ab1bf023";
        }
      } catch (err) {
        console.log(err);
        throw new err();
        // eslint-disable-next-line no-unreachable
      }
    }
  },
  created() {
    this.getImgGraph();
  }
};
</script>
