<template>
  <nav>
    <img src="../assets/logo.svg" alt="logo" />
    <div>
      <router-link to="/">首頁</router-link> |
      <router-link to="/introduction">公司介紹</router-link> |
      <router-link to="/products">產品</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: var(--color-secondary);

  img {
    width: 4rem;
    height: 4rem;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin: 16px;
    padding: 0px 0px 8px 0px;
    
    &.router-link-exact-active {
      color: var(--color-primary);
      border-bottom: var(--color-primary) 3px solid;
    }
  }
  a:hover {
    color: var(--color-primary);
  }
}
</style>