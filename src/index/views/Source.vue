<template>
  <div class="source">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-for="o in 4" :key="o">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../assets/image/test1.png" class="image" width="100%">
          <div style="padding: 14px;">
            <div>山河知己名场面之谜香幻境</div>
            <div>2021-03-31 官方花絮</div>
            <div>
              <el-tag>花絮</el-tag>
              <el-tag type="success">官方</el-tag>
              <el-tag type="info">张哲瀚</el-tag>
              <el-tag type="warning">龚俊</el-tag>
            </div>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">
                <router-link to="/source-detail">去看看</router-link>
              </el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "source",
  components: {},
  data() {
    return {};
  },
};
</script>
