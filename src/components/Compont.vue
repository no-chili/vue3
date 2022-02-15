<template>
<KeepAlive><component  :is="activeComponent?A:B"></component ></KeepAlive>
<button @click="activeComponent=!activeComponent">切换组件</button>
</template>

<script setup>
    import {ref} from 'vue';
    import A from '../components/A.vue';
    import B from '../components/B.vue';
    const activeComponent=ref(true);
</script>

<style>

</style>