<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <router-view />
  <router-link to="/">1-4</router-link> 
  <router-link to="/about">5-8</router-link>
  <router-link to="/news">news</router-link>
  <router-link to="/list">list</router-link>
</template>

<style scoped></style>
