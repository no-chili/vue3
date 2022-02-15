<template>
    <h1>{{$message()}}</h1>
    <h1>{{count}}</h1>
    <h1>{{doubleCount}}</h1>
    <h1>{{content}}</h1>
    <button  @click="add">count++</button>
    <input v-model="ttext" type="text" v-focus ref="input">
    <div :style="{fontSize:FS+'em'}">
      <Suspense>
      <!-- 主要内容 -->
      <template #default>
        <COM @changeFS="cahngeFS" :title="ttext">
        <template #header="slotprops">
          Header
          {{slotprops.chili}}
        </template>
        <template #foot>
          Foot
        </template>
        </COM>
      </template>
      <!-- 加载中状态 -->
      <template #fallback>
        正在加载...
      </template>
      </Suspense>
    </div>
</template>

<script setup>
import { computed, inject, onMounted, reactive,ref, watch, watchEffect } from 'vue';
import {defineAsyncComponent} from 'vue';
const i18n =inject('i18n');
const COM=defineAsyncComponent(()=>import('./com.vue'))
  const res={
    age:1
  }

  let ttext=ref('')
  
  const pro=reactive(res)

  let FS=ref(1)

  pro.age++

  const count =ref(0)

  const doubleCount=computed(()=>{
    return count.value*2
  })

  function add(){
    count.value++
    url.value+='/'
    pro.age++
  }

  const content=ref(null)

  const url=ref("http://chili.space")

  watchEffect(()=>{
    content.value=url.value+"content"
  })

  watch(()=>pro.age,(age)=>{
    console.log("age change"+age);
  })

  // const input =ref(null)

  // onMounted(()=>{
  //   input.value.focus()
  // })
  import {vFocus} from '../direactives/vFocus';
  console.log(vFocus);
  // const vFocus={
  //   mounted:(el)=>{
  //     el.focus()
  //   }
  // }

  function cahngeFS(n){
    FS.value=n+FS.value
  }


</script>

<style>

</style>