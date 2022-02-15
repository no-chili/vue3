<template>
  <input type="text" v-model="keyWord">
  <TransitionGroup
  :css="false"
  @enter="onEnter"
   name="list" tag="ul">
        <li v-for="(item,index) in arr"  :data-index="index" :key="item">{{item}}</li>
  </TransitionGroup>
</template>

<script setup>
import {ref, watchEffect} from 'vue';
const arr=ref([])
const items=['vue','react','view','webpack','node']
const keyWord=ref('')

function obscure(){
    arr.value=[]
    console.log(keyWord.value);
    for(let i=0;i<items.length;i++){
        if(items[i].indexOf(keyWord.value)>=0){
            arr.value.push(items[i])
        }
    }
}

function onEnter(el,done){
    delay: el.dataset.index * 0.15,
    done()
}

watchEffect(obscure)

</script>

<style>
.list-enter-from,
.list-leave-to{
    opacity: 0;
}
.list-leave-action,
.list-enter-action{
    transition: all 0.5s ease;
}
</style>