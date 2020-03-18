<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <h5 class="title font-weight-regular ml-5 ">VuCovid | Covid info</h5>
    </div>

    <v-spacer></v-spacer>

    <template>
      <v-toolbar-items class="mr-5">
        <v-btn v-for="item in menu" :key="item.key" text large>{{
          item.title
        }}</v-btn>
      </v-toolbar-items>
    </template>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          title: "Map Covid",
          link: "/",
          key: "anime"
        }
      ]
    };
  }
};
</script>
