<template>
  <div>
    <h3>News Data</h3>
    <button @click="sendHandle">发送信息</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "send", data: string): void;
}>();
const sendHandle = () => {
  emit("send", "我是新闻数据");
};
</script>
<style scoped></style>
