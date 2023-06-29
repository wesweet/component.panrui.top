<template>
  <div class="box">
    <div class="ring"></div>
  </div>
</template>

<script>
export default {
  name: "PrRing",
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ring {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 10px solid #ccc;
  border-top-color: #f00;
  border-left-color: aqua;
  animation: ring 1s infinite linear;
}
</style>
