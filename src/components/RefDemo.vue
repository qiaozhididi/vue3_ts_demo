<template>
  <div id="refDemo">
    <h3>Ref标注类型</h3>
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <div>{{ job }}</div>
    <button @click="change">修改</button>
    <div>{{ address }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

//赋值为String类型 默认name为string类型
const name = ref("张三");

//赋值为number类型
const age: Ref<number> = ref(18);

const job = ref<string | number>("前端开发");

const change = () => {
  name.value = "李四";
  age.value = 20;
  job.value = "后端开发";
};

//当不赋值值的时候，默认为string|undefined
const address = ref<string>();
address.value = "北京";
</script>
<style scoped>
#refDemo{
    width: 100%;
    border: 1px solid red;
}
</style>
