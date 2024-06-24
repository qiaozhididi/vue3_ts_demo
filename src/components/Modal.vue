<template>
  <div class="modal">
    <h3>组件模板标注类型引用</h3>
    <div v-show="isShow">{{ msg }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const msg = ref("Hello World!");

const isShow = ref(false);

const open = () => {
  isShow.value = true;
};

defineExpose({ open });
</script>
<style scoped>
.modal {
  width: 100%;
  border: 2px solid blue;
}
</style>
