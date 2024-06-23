<template>
  <div ref="container">
    <h3>模板类型引用</h3>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const container = ref<HTMLElement | null>();

//保证DOM模板渲染完成
onMounted(() => {
  if (container.value) {
    container.value.innerHTML = "<h1>你好,模板引用测试</h1>";
    console.log(container.value);
  }
});
</script>
<style scoped></style>
