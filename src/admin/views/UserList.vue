<template>
  <div>
    <el-table :data="data">
      <el-table-column prop="id" label="用户id"> </el-table-column>
      <el-table-column prop="userName" label="标题"> </el-table-column>
      <el-table-column prop="role" label="用户组"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "userList",
  components: {},
  data() {
    return {
      data: [
        {
          id: 1,
          userName: "小仙女1",
          role:"管理员"
        },
        {
          id: 2,
          userName: "小仙女2",
          role:"管理员"
        },
      ],
    };
  },
};
</script>