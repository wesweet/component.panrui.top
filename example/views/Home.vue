<!--
 * @Description: 主页
 * @Author: panrui
 * @Date: 2021-05-21 18:02:50
 * @LastEditTime: 2023-06-27 13:33:29
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <a-layout id="components-layout-demo-side" style="height: 100%">
    <!-- 左侧 -->
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <LeftMenu></LeftMenu>
    </a-layout-sider>
    <!-- 右侧 -->
    <a-layout>
      <!-- 右侧顶部 -->
      <a-layout-header style="background: #001529; padding: 0; color: #fff">
        wesweet-vue-component
      </a-layout-header>
      <a-layout-content style="overflow-y: auto">
        <router-view></router-view>
      </a-layout-content>
      <!-- 右侧底部 -->
      <a-layout-footer style="text-align: center">
        wesweet-vue-component ©2023 Created by panrui
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
// @ is an alias to /src
import LeftMenu from "@/components/LeftMenu.vue";
export default {
  name: "Home",
  data() {
    return {
      collapsed: false,
    };
  },
  components: {
    LeftMenu,
  },
};
</script>
<style lang="less" scoped>
#components-layout-demo-side {
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .ant-layout-header {
    height: 68px;
  }
}
</style>
