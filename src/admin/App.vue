<template>
  <div id="app" class="app">
    <div class="layout">
      <AdminNav />
      <div :style="{ padding: '24px', background: '#fff', flex: 1 }">
        <router-view />
      </div>
      <footer class="layout-footer-center">
        2020-2021 &copy; 守护爱情的长明山仙女
      </footer>
    </div>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav.vue";
import { mapState } from "vuex";

export default {
  components: {
    AdminNav,
  },
  computed: {
    ...mapState("theme", {
      $colorDeep: "$colorDeep",
    }),
  },
};
</script>
<style lang="scss">
@font-face {
  font-family: Alibaba-PuHuiTi-Regular;
  src: url("../assets/font/Alibaba-PuHuiTi-Regular.ttf");
}
@font-face {
  font-family: AlibabaSans-Italic;
  src: url("../assets/font/AlibabaSans-Italic.otf");
}
.app {
  position: relative;
  z-index: 0;
  height: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
