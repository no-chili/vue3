<template>
    <div class="col">
    <h2>子组件</h2>
    <h4>{{title}}</h4>
    <button @click="$emit('changeFS',1)">放大字体</button>
    <button @click="ss">缩小字体</button>
    </div>
    <div>
        <p></p>
        <h3>插槽</h3>
        <div>
            <slot name="header" :chili="'chiliText'"></slot>
        </div>
        <div>
            <slot name="foot"></slot>
        </div>
    </div>
</template>

<script setup>
import { useAttrs } from "@vue/runtime-core";

    const props= defineProps({
        title:String
    })
    const emit=defineEmits(['changeFS'])
    console.log(props.title);

    function ss(){
        emit('changeFS',-1)
    }
</script>

<style>
.col{
    background-color: #666;
}
</style>