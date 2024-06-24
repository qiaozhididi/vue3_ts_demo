<template>
  <div class="ChildDemo" >选项式 为组件props标注类型
  <div>{{ name }}</div>
  <div>{{ id }}</div>
  <div>{{ msg }}</div>
  <div>{{ book.name }}</div>
  <div>{{ book.price }}</div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
export default defineComponent({
  props: {
    name: String,
    id: Number,
    msg: {
      type: String,
      required: true,
    },
    book: {
      type: Object as PropType<{
        //精细化验证
        name: string;
        price: number;
      }>,
      required: true,
    },
  },
});
</script>
<style scoped>
.ChildDemo {
   width: 100%;
   border: 4px solid black;
}
</style>
