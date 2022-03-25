<template>
  <div v-if="showBlock">testing</div>
  <footer>
    <router-link to="/serviceDeclaration">服務宣告</router-link>
    <router-link to="/customerService">客服中心</router-link>
  </footer>
</template>

<script>
export default {
  // data() {
  //   return {
  //     showBlock: true
  //   }
  // },
  // methods: {
  //   toggleList() {
  //     this.showBlock = !this.showBlock
  //   }
  // }
};
</script>

<style lang="scss" scoped>
footer {
  justify-content: center;
  display: flex;
  background: var(--color-secondary);
  padding: 12px;

  a {
    font-weight: bold;
    color: var(--color-third);
    text-decoration: none;
    margin: 16px;

    &.router-link-exact-active {
      color: var(--color-primary);
    }
  }
  a:hover {
    color: var(--color-primary);
  }
}
</style>