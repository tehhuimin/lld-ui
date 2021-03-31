<template>
  <div>
    <el-table :data="data">
      <el-table-column prop="id" label="内容id"> </el-table-column>
      <el-table-column prop="title" label="标题"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "sourceList",
  components: {},
  data() {
    return {
      data: [
        {
          id: 1,
          title: "看电影闭环了，新增非专业捋的时间线",
        },
        {
          id: 2,
          title: "山河知己名场面之谜香幻境",
        },
      ],
    };
  },
};
</script>