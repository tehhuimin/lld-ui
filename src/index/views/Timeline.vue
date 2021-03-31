<template>
  <div class="timeline">
    <div>
      <span style="margin-right: 24px" @click="type=1">线性模式</span>
      <span @click="type=2">日历模式</span>
    </div>
    <div v-if="type === 1">
      <div v-for="item in timeline" :key="item.time">
        <div>{{ item.time }}</div>
        <div>{{ item.data }}</div>
      </div>
    </div>
    <el-calendar class="calendar" v-if="type === 2">
      <template #dateCell="{ data }">
        <div>
          <div>{{ data.day.split("-")[2] }}</div>
          <div>
            {{ (timeline.find((m) => m.time === data.day) || {}).data }}
          </div>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: "timeline",
  components: {},
  data() {
    return {
      type: 1,
      timeline: [
        { time: "2021-03-01", data: "初遇" },
        { time: "2021-03-10", data: "恋爱" },
        { time: "2021-03-20", data: "结婚" },
      ],
    };
  },
};
</script>

<style lang="scss">
.timeline {
  .calendar {
    width: 100%;
  }
}
</style>
