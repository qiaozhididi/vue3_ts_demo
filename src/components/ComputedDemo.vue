<template>
  <div id="computedDemo">
    <h3>Computed标注类型</h3>
    <div>count1: {{ doubleCount }}</div>
    <div>count2: {{ doubleCount2 }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
const count = ref<number>(100);
//默认推导为number类型
const doubleCount = computed(() => count.value * 2);

// const result = doubleCount.value.split("0") //报错 值类型不能被拆分

//指定了类型 返回值必须是number类型
const doubleCount2 = computed<number>(() => {
  return count.value * 2;
});
</script>
<style scoped>
#computedDemo {
  width: 100%;
  border: 1px solid yellow;
}
</style>
