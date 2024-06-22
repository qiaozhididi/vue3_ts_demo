<template>
  <div>首页</div>
  <RefDemo />

  <ReactiveDemo />

  <ComputedDemo />
</template>

<script setup lang="ts">
import RefDemo from "../components/RefDemo.vue";
import ReactiveDemo from "@/components/ReactiveDemo.vue";
import ComputedDemo from "@/components/computedDemo.vue";
</script>
<style scoped></style>
