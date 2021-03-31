<template>
  <header class="header">
    <div class="nav-container">
      <nav class="nav">
        <div class="nav-item">
          <router-link to="/" exact>首页</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/timeline">时间线</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/source">公开资料汇总</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/post">名侦探时间</router-link>
        </div>
        <div class="nav-item">
          <router-link to="admin" target="_blank">管理</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderNav",
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
}
.nav-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
}
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  font-size: 16px;
  font-weight: 600;
}
.nav-item {
  display: flex;
  align-items: center;
}
</style>