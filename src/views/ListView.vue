<template>
  <div>List页面</div>
  <ChildDemo name="名字" :id="1001" msg="消息" :book="book" />
</template>

<script lang="ts">
import ChildDemo from "../components/ChildDemo.vue";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      book: {
        name: "book",
        price: 100,
      },
    };
  },
  components: {
    ChildDemo,
  },
});
</script>
<style scoped></style>
