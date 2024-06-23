<template>
  <div>5-8</div>
  <PropsSetupDemo title="Props传参" text="123123" :state="state" />

  <PropsDemo title="Props传参" text="456456456" :state="state" />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import PropsSetupDemo from "@/components/PropsSetupDemo.vue";
import PropsDemo from "@/components/PropsDemo.vue";

interface iState {
  name: string;
  age: number;
}
const state: iState = reactive({
  name: "王五",
  age: 28,
});
</script>
<style scoped></style>
