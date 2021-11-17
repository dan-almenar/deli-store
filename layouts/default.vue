<template>
  <v-app dark>
    <v-main>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Flores Deli</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn href="">btn</v-btn>
    </v-app-bar>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <div class="footer-text">
        <span>&copy; {{ new Date().getFullYear() }} Flores Deli</span>
        <br><span>Sitio web desarrollado por Dan Almenar</span>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      fixed: false,
    }
  },
}
</script>

<style scoped>
.footer-text {
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  display: inline-flex;
  justify-content: space-around;
}
@media (max-width: 480px) {
  .footer-text {
    width: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>