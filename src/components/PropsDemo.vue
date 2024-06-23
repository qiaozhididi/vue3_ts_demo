<template>
  <div>
    <h3>为组件的 props 标注类型非setup场景</h3>
    <p>{{ props.title }}</p>
    <p>{{ props.text }}</p>
    <p>{{ props.state }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface iState {
  name: string;
  age: number;
}

export default defineComponent({
  props: {
    //默认类型推导 String
    title: {
      type: String,
      default: "标题",
    },
    text: {
      type: String,
    },
    state: {
      type: Object as PropType<iState>,
      default: () => {}, //基本数据类型才可以直接写，工厂函数返回
    },
  },
  setup(props) {
    return { props, state: props.state };
  },
});
</script>
<style scoped></style>
