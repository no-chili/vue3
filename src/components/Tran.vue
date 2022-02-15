<template>
    <Transition name="caper">
        <h1 v-if="show">Hello World</h1>
    </Transition>
    <Transition name="bounce">
    <p v-if="show" style="text-align: center;">
        你好！你会看到这里正在跳跃！
    </p>
    </Transition>
    <button @click="show = !show">切换</button>
</template>
<script setup>
   import {ref} from 'vue'
   const show=ref(true) 
</script>

<style>
.caper-enter-active,
.caper-leave-active{
    transition: opacity 0.5s ease;
}
.caper-enter-from,
.caper-leave-to{
    opacity: 0;
}
.caper-enter-to,
.caper-leave-from{
    opacity: 1;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>