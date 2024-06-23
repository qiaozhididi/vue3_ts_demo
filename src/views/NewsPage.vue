<template>
  <div>
    <h3>News Page</h3>
    <NewsData @send="getData" />

    <
  </div>
</template>

<script setup lang="ts">
import NewsData from "./NewsData.vue";

const getData = (data: string) => {
  console.log(data);
};
</script>
<style scoped></style>
