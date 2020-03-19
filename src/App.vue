<template>
  <v-app>
    <Navbar />
    <v-content>
      <section-one />
      <section-two />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/master/Navbar.vue";
import SectionOne from "@/components/layout/SectionOne.vue";
import SectionTwo from "@/components/layout/SectionTwo.vue";
export default {
  name: "Vucovid",
  components: {
    Navbar,
    "section-one": SectionOne,
    "section-two": SectionTwo
  }
};
</script>
