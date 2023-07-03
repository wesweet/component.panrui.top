<template>
  <div class="box">签名</div>
</template>

<script>
export default {
  name: "PrSign",
  // 定义组件prop
  props: {},
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

<style lang="less" scoped></style>
