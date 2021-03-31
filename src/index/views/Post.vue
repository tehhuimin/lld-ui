<template>
  <div class="post">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-for="o in 2" :key="o">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 14px;">
            <div>看电影闭环了，新增非专业捋的时间线</div>
            <div>2021-03-31 细节分析</div>
            <div>
              <el-tag>分析</el-tag>
              <el-tag type="success">非官方</el-tag>
              <el-tag type="info">张哲瀚</el-tag>
              <el-tag type="warning">龚俊</el-tag>
            </div>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">
                <router-link to="/post-detail">去看看</router-link>
              </el-button>
            </div>
          </div>
          <img src="../../assets/image/test2.jpg" class="image" width="100%"/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "post",
  components: {},
  data() {
    return {};
  },
};
</script>
