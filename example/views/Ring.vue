<!--
 * @Description: 
 * @Author: panrui
 * @Date: 2023-06-28 13:48:44
 * @LastEditTime: 2023-06-28 13:49:00
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="ring-box">
    <a-card title="圆环组件使用展示" style="width: 500px">
      <pr-ring></pr-ring>
    </a-card>
    <a-row type="flex">
      <a-col :span="20" class="markdown-body">
        <!-- <ringDocs></ringDocs> -->
      </a-col>
    </a-row>
  </div>
</template>

<script>
// import ringDocs from "@/mds/ringDocs";
export default {
  name: "Ring",
  components: {
    // ringDocs,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.ring-box {
  padding-left: 50px;
  padding-top: 20px;
  background-color: #fff;
}
</style>
