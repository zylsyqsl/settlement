<template>
  <div id="app"
       v-if="userDataLoaded"
       class="view_container">
    <div v-show="isPageShow">
      <router-view name="menu"></router-view>
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>

<script>
import vMenu from "@/components/Menu";
export default {
  name: "App",
  computed: {
    //页面加载开关，在preConfig中控制，当用户信息获取后，加载页面
    userDataLoaded () {
      return this.$root.userDataLoaded;
    },
    isPageShow () {
      return this.$root.isPageShow;
    }
  }
};
</script>

<style></style>
