# 查漏补缺VUE3

## 侦听器

同步创建的监听器会在组件卸载时自动停止

```
watch()
默认开启深度监听，只有源更改时才会调用，需要指明监听的源
watchEffect()
上来就发起一次调用，自动跟踪数据
```

## 模版ref

* 配合组合式api使用时需要声明一个同名的ref

* 只能在组件挂在之后才能访问ref

##  props

setup中使用defineProps()接受prop参数，即可在模版中使用

```
接收
defineProps(['title'])
使用
<h4>{{title}}</h4>
```

如果要在script中使用需要定义一个props接收

```
const props = defineProps(['title'])
console.log(props.title)

// 使用 <script setup>限制prop类型
defineProps({
  title: String,
  likes: Number
})
```

## emit

和prop一样在setup中使用时使用defineEmits()接收，即可在模版中使用$emit()调用

```
defineEmits(['enlarge-text'])
<button @click="$emit('enlarge-text')">放大文字</button>
```

需要在script中使用需要声明一个emit接受

```
const emit = defineEmits(['enlarge-text'])

emit('enlarge-text')
```

* 注意defineProps和defineEmits仅可在script setup中使用并且不需要导入

## 插槽 

v-slot 可以简写成 #



* 作用域插槽

有时候我们需要同时使用到子组件和父组件的数据，可以先props传值一样向一个插槽的插口上传递属性

```
定义插槽处
<slot :text="greetingMessage" :count="1"></slot>
使用插槽处
<MyComonent v-slot="slotProps">
  {{ slotProps.text }} {{ slotProps.count }}
<MyComponent>
```

##  可组合函数

hooks

命名 fetch.ts

```
export function useFetch(){
	
	//fetch数据等等操作
	//可写生命周期钩子
	
	return {data,error}
}
```

对比mixin优点：

* 清楚属性来源
* 命名不容易冲突（方便重命名）
* 返回值可以作为参数传入另一个可组合函数

## 自定义指令

```
// 在模板中注册 v-focus
const vFocus = {
  mounted: (el) => el.focus()
}

//使用
 <input v-focus />
```

