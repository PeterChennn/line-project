<template>
  <div v-if="showBlock">testing</div>
  <footer>
    <router-link to="/serviceDeclaration">服務宣告</router-link
    ><span class="material-icons list" @click="toggleList">expand_less</span>
    <router-link to="/customerService">客服中心</router-link
    ><span class="material-icons">expand_less</span>
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
  align-items: center;
  display: flex;
  padding: 0px;

  a {
    padding-bottom: 8px;
    margin: 16px 0px 16px 16px;
    border-bottom: none;

    &.router-link-exact-active {
      color: var(--color-primary);
    }
  }
  a:hover {
    color: var(--color-primary);
  }
  span {
    padding-bottom: 8px;
    margin: 16px 16px 16px 0px;
    border-bottom: none;
  }
}

.list {
  cursor: pointer;
}
</style>