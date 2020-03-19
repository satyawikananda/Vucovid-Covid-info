<template>
  <v-app>
    <Navbar />
    <v-content>
      <section-one />
      <section-two />
      <section-three />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/master/Navbar.vue";
import SectionOne from "@/components/layout/SectionOne.vue";
import SectionTwo from "@/components/layout/SectionTwo.vue";
import SectionThree from "@/components/layout/SectionThree.vue";
import Footer from "@/components/master/Footer.vue";
export default {
  name: "Vucovid",
  components: {
    Navbar,
    "section-one": SectionOne,
    "section-two": SectionTwo,
    "section-three": SectionThree,
    Footer
  }
};
</script>
