<template>
  <div class="ChildDemo">
    选项式 为组件props标注类型
    <div>{{ name }}</div>
    <div>{{ id }}</div>
    <div>{{ msg }}</div>
    <div>{{ book.name }}</div>
    <div>{{ book.price }}</div>
  </div>

  <div class="ChildDemo">
    选项式 为组件的emits标注类型

    <button @click="handleClick">点击</button>
  </div>

  <div class="ChildDemo">
    <p>选项式 为组件的计算属性标注类型</p>
    <p>{{ getHello }}</p>
    <p>{{ getHelloChange }}</p>
    <p>{{ getMessage }}</p>
  </div>
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
  data() {
    return {
      message: "Hello",
    };
  },
  computed: {
    getHello(): string {
      return this.message + "!";
    },
    getHelloChange: {
      get(): string {
        return this.message + "!";
      },
      set(newValue: string) {
        this.message = this.message + newValue;
      },
    },
    getMessage() {
      this.getHelloChange = "World";
    },
  },
  methods: {
    handleClick() {
      this.$emit("addBook", 1);
    },
  },
});
</script>
<style scoped>
.ChildDemo {
  width: 100%;
  border: 4px solid black;
  margin-bottom: 20px;
}
</style>
