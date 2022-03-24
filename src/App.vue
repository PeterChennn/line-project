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
  // text-align: center;
  color: #2c3e50;
  font-size: 16px;
}

nav, footer {
  padding: 12px;
  background: #F7F8F9;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin: 16px;
    padding: 0px 0px 8px 0px;

    // &.router-link-exact-active {
    //   color: var(--color-primary);
      // border-bottom: var(--color-primary) 3px solid;
    // }
  }
  // a:hover {
  //   color: var(--color-primary);
  // }
}
</style>
