<template>
  <div class="box">
    <a-card title="sign组件使用展示" style="width: 500px">
      <pr-sign
        :cWidth="cWidth"
        :cHeight="cHeight"
        :lineWidth="lineWidth"
        :lineColor="lineColor"
        :isCrop="isCrop"
      ></pr-sign>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "Sign",
  data() {
    return {
      cWidth: 300, // 预设宽度
      cHeight: 300, // 预设高度
      lineWidth: 2, // 线条宽度
      lineColor: "#000", // 线条颜色
      isCrop: false, // 是否裁剪
    };
  },
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.box {
  height: 100%;
  padding-left: 50px;
  padding-top: 20px;
  background-color: #fff;
}
</style>
