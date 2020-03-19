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
            <data-table />
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </section>
</template>
<script>
import dTable from "@/components/dataTable/DataTable.vue";
export default {
  components: {
    "data-table": dTable
  }
};
</script>
