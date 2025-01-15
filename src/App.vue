<script setup>
import { RouterLink, RouterView } from "vue-router";
import CommandComponent from "./components/CommandComponent.vue";
import ShortCutComponent from "./components/ShortCutComponent.vue";
</script>

<template>
  <div id="app">
    <RouterView></RouterView>
    <CommandComponent></CommandComponent>
    <ShortCutComponent></ShortCutComponent>
  </div>
</template>
