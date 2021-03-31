<template>
  <div>
    <el-form ref="form" :model="post">
      <el-form-item label="标题">
        <el-input v-model="post.title"></el-input>
      </el-form-item>
    </el-form>
    <div>
      <mavon-editor v-model="mdValue" @change="onChange" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "post",
  data() {
    return {
      post: { title: "" },
      mdValue: "",
      mdHtml: "",
      checkedCategories: [],
      categories: [],
      sticky: false,
      status: "publish",
      type: "post",
    };
  },
  computed: {
    ...mapState("enum", {
      STATUS: "postPublishStatus",
      TYPE: "postType",
    }),
  },
  mounted() {},
  methods: {
    onChange(value, html) {
      this.mdHtml = html;
    },

    onSave() {
      console.log("保存并发布");
    },
  },
};
</script>

