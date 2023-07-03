<template>
  <div class="box">
    <a-card title="sign组件使用展示" style="width: 500px">
      <pr-sign></pr-sign>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "Sign",
  data() {
    return {
      canvas: null, // canvas 实例对象
      cWidth: 700, // 预设宽度
      cHeight: 700, // 预设高度
      ctx: null, // 画布
      x: 0, // x坐标
      y: 0, // y坐标
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
