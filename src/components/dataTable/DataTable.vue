<template>
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
</template>
<script>
import { getGlobalData } from "@/mixins/getGlobalData.js";
export default {
  mixins: [getGlobalData],
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
      search: ""
    };
  }
};
</script>
