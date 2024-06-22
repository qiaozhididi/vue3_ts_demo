<template>
  <div id="reactiveDemo">
    <h3>reactive()标注类型</h3>
    <h3>Book1</h3>
    <div>书名：{{ book1.name }}</div>
    <div>价格：{{ book1.price }}</div>
    <h3>Book2</h3>
    <div>书名：{{ book2.name }}</div>
    <div>价格：{{ book2.price }}</div>
    <h3>Book3</h3>
    <ul>
      <li v-for="(item, index) in book3" :key="index">
        {{ item.name }}
        {{ item.version }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

//默认推导了类型
const book1 = reactive({
  name: "Vue源码解析",
  price: 100,
});

//默认推导类型为string
book1.name = "React源码解析";

//利用接口推导类型
interface iBook2 {
  name: string;
  price?: number;
}
const book2: iBook2 = reactive({
  name: "Vue源码解析",
  price: 100,
});

//数组类型
interface item3 {
  name: string;
  version: number;
}
interface iBook3 {
  [index: number]: item3;
}
const book3: iBook3 = reactive([
  {
    name: "php高性能开发",
    version: 2,
  },
  {
    name: "php高并发开发",
    version: 3,
  },
  {
    name: "php高可用开发",
    version: 4,
  },
]);
</script>
<style scoped>
#reactiveDemo {
  border: 1px solid blue;
  width: 100%;
}
</style>
