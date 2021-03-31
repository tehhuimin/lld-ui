<template>
  <header class="admin-header">
    <div class="nav-container">
      <nav class="nav">
        <div class="nav-item">
          <router-link to="/" exact>首页</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/source-list">资源列表</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/source">添加资源</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/user-list">用户列表</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
.admin-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
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
}
</style>