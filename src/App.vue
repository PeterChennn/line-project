<template>
  <Navbar />
  <Carousel />
  <router-view/>
  <DownloadLink />
  <Footer />
  
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Carousel from './components/Carousel.vue'
import DownloadLink from './components/DownloadLink.vue'

export default {
  components: { Navbar, Footer, Carousel, DownloadLink }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-third);
  font-size: 16px;
}
</style>
