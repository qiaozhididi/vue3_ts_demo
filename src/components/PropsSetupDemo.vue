<template>
  <div id="propsDemo">
    <h3>为组件的 props 标注类型setup场景</h3>
    <!-- <div>{{ props.title }}</div> -->
    <!-- <div>{{ props.text }}</div> -->
    <!-- <div>{{ state.name }}</div> -->
    <!-- <div>{{ state.age }}</div> -->
    <div>{{ stateInfo.name }}</div>
    <div>{{ stateInfo.age }}</div>
  </div>
</template>

<script setup lang="ts">
// const props = defineProps({
//   title: {
//     type: String,
//     required: true,
//   },
//   text: {
//     type: String,
//     default: "默认值",
//   },
// });

//明确参数类型
// const props = defineProps<{
//   //默认推导为string类型
//   title: { type: string; required: true };
//   text: string;
// }>();

//接口形式 泛型
// interface Props {
//   title: string;
//   text: string;
// }
// const props = defineProps<Props>();

//复杂数据类型
interface iState {
  name: string;
  age?: number; //？可选项
}

// const stateInfo = defineProps<{ state: iState }>();
// 语法限制
// 为了生成正确的运行时代码，传给 defineProps() 的泛型参数必须是以下之一：

// 一个类型字面量 defineProps<{ /*... */ }>()
// 接口或对象类型字面量的引用 interface Props {/* ... */}
// 传递给 defineProps 的泛型参数本身不能是一个导入的类型

// Props结构赋值操作
// 当使用基于类型的声明时，我们失去了为 props 声明默认值的能力。这可以通过 withDefaults 编译器宏解决
const stateInfo = withDefaults(defineProps<iState>(), {
  name: "默认值",
  age: 18,
});
</script>
<style scoped>
#propsDemo {
  border: 1px solid #ccc;
  width: 100%;
}
</style>
