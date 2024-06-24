<template>
  <div>5-8</div>
  <PropsSetupDemo title="Props传参" text="123123" :state="state" />

  <PropsDemo title="Props传参" text="456456456" :state="state" />

  <DataDemo />

  <RefsDemo />

  <Modal ref="MyModal" />
  <button @click="MyModal?.open()">打开组件消息</button>
</template>

<script setup lang="ts">
import { reactive, provide, ref } from "vue";
import PropsSetupDemo from "@/components/PropsSetupDemo.vue";
import PropsDemo from "@/components/PropsDemo.vue";
import DataDemo from "@/components/DataDemo.vue";
import RefsDemo from "@/components/RefsDemo.vue";
import Modal from "@/components/Modal.vue";

//建议将注入key的类型放在一个单独的文件中
// import type { InjectionKey } from "vue";
// const key = Symbol() as InjectionKey<string>;
import { key } from "@/utils/key";

provide(key, "我的数据");

interface iState {
  name: string;
  age: number;
}
const state: iState = reactive({
  name: "王五",
  age: 28,
});

//标注类型
const MyModal = ref<InstanceType<typeof Modal> | null>();
</script>
<style scoped></style>
