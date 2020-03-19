<template>
  <section id="sectionthree">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" md="12" lg="12" sm="12">
          <div class="text-center">
            <h1 class="text-black display-2 font-weight-light mb-3">
              All Data global
            </h1>
            <span class="subtitle-1 font-weight-light"
              >This is the data global covid-19, this data is taken from JHU
              CSSE for now.
            </span>
            <v-divider />
          </div>
        </v-col>
      </v-row>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex md10 xs12 class="mx-auto">
            <v-card>
              <v-card-title>
                Data Global Covid-19
                <v-spacer />
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search data"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :headers="thead"
                :items="tbody"
                :search="search"
                :loading="isLoading"
                loading-text="Loading data covid-19... Please wait"
              >
                <template v-slot:item.provinceState="{ item }">
                  <span>{{ getNull(item.provinceState) }}</span>
                </template>
                <template v-slot:item.lastUpdate="{ item }">
                  <span>{{ getDate(item.lastUpdate) }}</span>
                </template>
              </v-data-table>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </section>
</template>
<script>
import { API_URL } from "@/const.js";
import moment from "moment";
export default {
  data() {
    return {
      thead: [
        {
          text: "Country",
          align: "center",
          sortable: false,
          value: "countryRegion"
        },
        {
          text: "Province State",
          sortable: false,
          align: "center",
          value: "provinceState"
        },
        {
          text: "Confirmed",
          align: "center",
          value: "confirmed"
        },
        {
          text: "Recovered",
          align: "center",
          value: "recovered"
        },
        {
          text: "Deaths",
          align: "center",
          value: "deaths"
        },
        {
          text: "Active",
          align: "center",
          value: "active"
        },
        {
          text: "Last Update",
          align: "center",
          value: "lastUpdate"
        }
      ],
      tbody: [],
      search: "",
      isLoading: false
    };
  },
  methods: {
    async getData() {
      try {
        this.isLoading = true;
        const { data } = await this.$http.request({
          method: "GET",
          url: `${API_URL}confirmed`
        });
        this.tbody = data;
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        throw new err();
      }
    },
    getNull(provinceState) {
      if (provinceState == null) return "N/a";
      else return provinceState;
    },
    getDate(lastUpdate) {
      return moment(lastUpdate).format("DD/MM/YYYY HH:mm:ss ZZ");
    }
  },
  created() {
    this.getData();
  }
};
</script>
