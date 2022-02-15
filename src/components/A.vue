<template>
  <h1>A组件:{{a}}</h1>
  <button @click="a++">A++</button>
</template>

<script setup>
import {ref} from 'vue';
const a=ref(0)
</script>

<style>

</style>