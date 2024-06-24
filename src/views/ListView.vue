<template>
  <div>List页面</div>
  <h3>{{ bookNum }}</h3>
  <ChildDemo
    name="名字"
    :id="1001"
    msg="消息"
    :book="book"
    @addBook="getBook"
  />
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
      bookNum: 0,
    };
  },
  components: {
    ChildDemo,
  },
  emits: {
    addBook(num: number) {
      return num > 0;
    },
  },
  methods: {
    getBook(num: number) {
      this.bookNum = num;
    },
  },
});
</script>
<style scoped></style>
