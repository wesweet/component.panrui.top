<!--
 * @Description: 
 * @Author: panrui
 * @Date: 2023-06-28 13:48:44
 * @LastEditTime: 2023-06-30 17:06:57
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="ring-box">
    <a-card title="circleProgress组件使用展示" style="width: 500px">
      <pr-circle-progress
        :progress="progress"
        :baseColor="baseColor"
      ></pr-circle-progress>
    </a-card>
    <a-row type="flex">
      <a-col :span="20" class="markdown-body">
        <circleProgressDocs></circleProgressDocs>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import circleProgressDocs from "@/mds/circleProgressDocs.md";
export default {
  name: "CircleProgress",
  components: {
    circleProgressDocs,
  },
  data() {
    return {
      radius: 60,
      thickness: 5,
      progress: 50,
      baseColor: "#00b09b",
      barColor: ["#aa4b6b", "#fbd786", "#3b8d99"],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.ring-box {
  height: 100%;
  padding-left: 50px;
  padding-top: 20px;
  background-color: #fff;
}
</style>
