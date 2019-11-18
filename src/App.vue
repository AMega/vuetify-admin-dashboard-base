<template>
  <v-app id="inspire">
    <AppDrawer />

    <AppBar />

    <AppContent />

    <AppFooter />
  </v-app>
</template>

<script>
import AppDrawer from "./components/AppDrawer.vue";
import AppContent from "./components/AppContent.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  props: {
    source: String
  },
  components: {
    AppDrawer,
    AppContent,
    AppFooter
  },
  data: () => ({})
};
</script>