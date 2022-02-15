<template>
  <h1>B组件:{{b}}</h1>
  <button @click="b++">B++</button>
</template>

<script setup>
    import {ref} from 'vue';
    const b=ref(0)
</script>

<style>

</style>