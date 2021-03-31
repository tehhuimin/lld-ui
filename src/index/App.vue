<template>
  <div id="app" class="app">
    <div class="layout">
      <HeaderNav />
      <div
        :style="{
          padding: '24px',
          background: '#fff',
          flex: 1,
        }"
      >
        <router-view />
      </div>
      <footer class="layout-footer-center">
        2020-2021 &copy; 守护爱情的长明山仙女
      </footer>
    </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import { mapState } from "vuex";

export default {
  components: {
    HeaderNav,
  },
  computed: {
    ...mapState("theme", {
      $colorDeep: "$colorDeep",
    }),
    ...mapState("user", {
      userName: "userName",
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
.layout {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.layout-footer-center {
  text-align: center;
}
</style>