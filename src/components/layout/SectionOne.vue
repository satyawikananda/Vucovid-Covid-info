<template>
  <section id="section1">
    <v-row no-gutters>
      <v-col
        cols="12"
        md="12"
        sm="12"
        lg="5"
        id="bg-sectionOne"
        :style="{ padding: '50px' }"
      >
        <v-container fluid>
          <v-layout column align-center justify-center>
            <v-row
              align="center"
              justify="space-around"
              class="d-flex justify-center align-center my-12"
            >
              <v-col cols="12" sm="12" md="12" lg="12">
                <h3
                  class="display-1 font-weight-reguler text-white text-center"
                >
                  Select the country
                </h3>
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <p
                  class="body-1 font-weight-reguler text-white text-center m-5"
                >
                  Select the country below to get data that has been infected
                  with the covid virus. This data will always be update
                </p>
              </v-col>
              <v-col cols="12" sm="8" md="12" class="mx-auto">
                <v-select
                  v-model="searchCountry"
                  menu-props="auto"
                  label="Select Country"
                  dense
                  outlined
                  :items="states"
                  @change="getMapsData"
                ></v-select>
              </v-col>
            </v-row>
          </v-layout>
        </v-container>
      </v-col>
      <v-col
        cols="12"
        md="12"
        sm="12"
        lg="7"
        :style="{ padding: '50px', backgroundColor: '#ecf0f1' }"
      >
        <v-container fluid>
          <v-layout column align-center justify-center>
            <h3 class="display-1 font-weight-reguler text-black text-center">
              Place Search: {{ searchCountry }}
            </h3>
            <span class="text-center subtitle-1 font-weight-light">
              Last Update: <b>{{ data.lastupd | lastUpdate }}</b>
            </span>
            <v-row no-gutters>
              <v-col cols="12" sm="12" md="12" lg="12" class="mx-auto mt-5">
                <v-sheet color="accent">
                  <l-map
                    style="height: 350px; width:700px;z-index:1"
                    :zoom="zoom"
                    :center="center"
                  >
                    <l-tile-layer :url="url"></l-tile-layer>
                    <l-marker :lat-lng="markerLatLng">
                      <l-popup class="text-center p-2" style="width:100%;">
                        <h1>Info Covid in {{ searchCountry }}</h1>
                        <span>Confirmed: </span>
                        <span class="font-weight-bold">{{
                          data.confirmed
                        }}</span
                        ><br />
                        <span>Recovered: </span>
                        <span class="font-weight-bold">{{
                          data.recovered
                        }}</span
                        ><br />
                        <span>Deaths: </span>
                        <span class="font-weight-bold">{{ data.deaths }}</span>
                      </l-popup>
                    </l-marker>
                  </l-map>
                </v-sheet>
              </v-col>
            </v-row>
          </v-layout>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>
<script>
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import { getContries } from "@/mixins/getCountries.js";
import { getMapData } from "@/mixins/getMapData.js";
export default {
  mixins: [getContries, getMapData],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      data: {
        lat: "",
        long: "",
        lastupd: "",
        confirmed: "",
        recovered: "",
        deaths: "",
        active: "",
        country: "",
        province: ""
      },
      searchCountry: "Indonesia"
    };
  }
};
</script>
