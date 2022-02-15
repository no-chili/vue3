<template>
    <button @click="ranAdd()">随机添加</button>
    <button @click="ranRemove()">随机删除</button>
    <TransitionGroup name="list" tag="ul">
      <li v-for="item in items" :key="item">
        {{item}}
      </li>
    </TransitionGroup>
</template>
<script setup>
   import {ref} from 'vue'
   const show=ref(true) 
   const items=ref(['vue','react','angule'])
   function ranAdd(){  
    items.value.splice(Math.floor(Math.random()*items.value.length),0,items.value.length)
   }
   function ranRemove(){
     items.value.splice(Math.floor(Math.random()*items.value.length),1)
   }
</script>

<style>
.list-enter-from,
.list-leave-to{
  opacity: 0;
  transform: translateX(30px);
}
.list-move,
.list-enter-active,
.list-leave-active{
  transition: all 0.5s ease;
}
.list-leave-active{
  position: absolute;
}


</style>