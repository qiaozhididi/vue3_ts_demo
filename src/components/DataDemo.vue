<template>
  <div class="data-demo">
    <h3>provide,inject传递数据</h3>
    <div>{{ currentData }}</div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { key } from "@/utils/key";
const currentData = inject<string>(key,"默认值");
console.log(currentData);
</script>
<style scoped>
.data-demo {
  border: 1px solid red;
  width: 100%;
}
</style>
