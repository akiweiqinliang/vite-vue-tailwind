<template>
<div>
  <Hero />
  <Stats />
  <Content />
  <Feature />
  <Cta />
  <Team />
  <LogoClouds />
  <Footer />
</div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Stats from "@/components/Stats.vue";
import Content from "@/components/Content.vue";
import Feature from "@/components/Feature.vue";
import Cta from "@/components/Cta.vue";
import Team from "@/components/Team.vue";
import LogoClouds from "@/components/LogoClouds.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Home",
  components: {Footer, LogoClouds, Team, Cta, Feature, Content, Stats, Hero}
}
</script>

<style scoped>

</style>
