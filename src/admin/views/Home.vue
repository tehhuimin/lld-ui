<template>
  <div>{{getGreeting()}}{{userName}}</div>
</template>

<script>
import { mapState } from "vuex";
import dayjs from "dayjs";

const GREETING = [
  { start: 0, end: 3, content: "夜深了，注意睡眠～" },
  { start: 3, end: 6, content: "看过凌晨的风景，快日出了～" },
  { start: 6, end: 12, content: "新的一天，元气满满！" },
  { start: 12, end: 18, content: "盼望晚饭～" },
  { start: 18, end: 22, content: "今天结束了，活得还好吗？" },
  { start: 22, end: 24, content: "就快要午夜了，不去休息吗？" }
];
export default {
  computed: {
    ...mapState("theme", {
      $colorDeep: "$colorDeep"
    }),
    ...mapState("user", {
      userName: "userName"
    })
  },
  data() {
    return {};
  },
  methods: {
    getGreeting() {
      const hour = dayjs().hour();
      return GREETING.find(m => hour >= m.start && hour < m.end).content;
    }
  }
};
</script>