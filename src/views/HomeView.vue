<template>
  <RefDemo />

  <ReactiveDemo />

  <ComputedDemo />
  <EventDemo />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import RefDemo from "../components/RefDemo.vue";
import ReactiveDemo from "@/components/ReactiveDemo.vue";
import ComputedDemo from "@/components/ComputedDemo.vue";
import EventDemo from "@/components/EventDemo.vue";

</script>
<style scoped></style>
