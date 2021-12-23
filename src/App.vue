<template>
  <div>
    <Header />
    <div class="wrap">
      <Menu />
      <Content />
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Content from "@/components/Content";

export default {
  name: "app",
  components: {
    Header,
    Menu,
    Content,
  },
};
</script>

<style scoped>
h1 {
  color: #634300
}
.wrap {
  display: flex;
}
</style>
