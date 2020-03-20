<template>
  <v-app>
    <navbar />
    <v-content>
      <section-one />
      <section-two />
      <section-three />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: "Vucovid",
  components: {
    navbar: () => import("./components/master/Navbar.vue"),
    sectionOne: () => import("./components/layout/SectionOne.vue"),
    sectionTwo: () => import("./components/layout/SectionTwo.vue"),
    sectionThree: () => import("./components/layout/SectionThree.vue"),
    Footer: () => import("./components/master/Footer.vue")
  }
};
</script>
