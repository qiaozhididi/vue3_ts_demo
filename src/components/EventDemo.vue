<template>
  <div id="EventDemo">
    <h3>事件处理函数标注类型</h3>
    <button @click="handleClick">点击</button>
    <input type="text" @change="handleClickInput" />
    <button @click="clickHandle2('msg',$event)">传参</button>
  </div>
</template>

<script setup lang="ts">
// 'event' 隐式标注为any类型，需要手动标注类型
//没有标注类型的时候，会提示错误
const handleClick = (e: MouseEvent) => {
  console.log(e);
};

//显式地强制转换 event 上的属性
const handleClickInput = (e: Event) => {
  console.log((e.target as HTMLInputElement).value);
};

//参数传递
const clickHandle2 = (msg: string,event: MouseEvent) => {
  console.log(msg,event);
};
</script>
<style scoped>
#EventDemo {
  width: 100%;
  border: 1px solid purple;
}
</style>
