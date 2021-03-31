const module = {
  namespaced: true,
  state() {
    return {
      postPublishStatus: [
        { label: "私密", value: "private" },
        { label: "公开", value: "publish" },
        { label: "草稿", value: "draft" },
        { label: "待审核", value: "pending" }
      ],
      postType: [
        { label: "日志", value: "post" },
        { label: "状态", value: "timeline" },
        { label: "图像", value: "image" },
        { label: "视频", value: "video" },
        { label: "音频", value: "audio" }
      ]
    };
  },
  getters: {},
  mutations: {},
  actions: {}
};
export default module;
