<template>
  <div>首页</div>
  <RefDemo />

  <ReactiveDemo />

  <ComputedDemo />
  <EventDemo />
  <PropsDemo title="Props传参" text="123123" :state="state" />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import RefDemo from "../components/RefDemo.vue";
import ReactiveDemo from "@/components/ReactiveDemo.vue";
import ComputedDemo from "@/components/ComputedDemo.vue";
import EventDemo from "@/components/EventDemo.vue";
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
