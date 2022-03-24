<template>
<footer>
  <a href="#"><img src="../assets/app-store-line.svg" alt=""><span>App Store</span></a>
  <a href="#"><img src="../assets/google-play-line.svg" alt=""><span>Google Play</span></a>
  <a href="#"><img src="../assets/mac-line.svg" alt=""><span>Mac</span></a>
  <a href="#"><img src="../assets/windows-line.svg" alt=""><span>Windows</span></a>
</footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  footer {
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 0px;
    margin: 0px;

    a {
      align-items: center;
      
      img {
      padding-right: 5px;
      }

      :hover {
        color: var(--color-third);
      }
    }       
  }
</style>