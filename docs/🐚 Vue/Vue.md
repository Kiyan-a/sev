---
sidebar_position: 1
---

# Vue

## Vue.js 的优点

- **简单轻巧**，功能强大，拥有非常容易上手的 API；
- 可**组件化** 和 响应式设计；
- 实现数据与结构分离，高性能，易于浏览器的加载速度；
- MVVM 模式，数据双向绑定，**减少了 DOM 操作，将更多精力放在数据和业务逻辑上。**

## el 与 data 的两种写法

通过输出 **new Vue()** 实例对象可以看到：

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140848773.png)

查看对象的隐式原型属性：

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140849889.png)

### el:

mount：挂载

**el:'#root' 或者 vm.$mount('#dom')**

### data

**对象式：new Vue({data:{}})**

**函数式：data:function(){ **return xxx **}** 或者 **data(){return xxx}**

**函数的 this 指向 Vue**

以 `_` 或 `$` 开头的 属性不会被 **Vue 实例代理**，因为它们可能和 Vue 内置的 property、API 方法冲突。你可以使用例如 `vm.$data._property` 的方式访问这些 property。

## 架构模型 MVVM 模型

Vue 受到了 MVVM 启发，遵循 MVVM 模型( **在 Vue 出现之前，MVVM 就已经存在** )

M：数据模型，**对应的是 Vue 实例对象的 data**

V：视图，**对应的是 DOM 模板**

VM：视图模型，**对应的是 Vue 实例对象** **new Vue**

View 和 Model 之间没有联系，它们**通过 ViewModel 这个桥梁进行交互**。

**Model 和 ViewModel 之间的交互是双向的**，因此 **View 的变化会自动同步到 Model**，而 **Model 的变化也会立即反映到 View 上**显示。

当用户操作 View，**ViewModel 感知到变化，然后通知** Model 发生相应改变；反之当 Model 发生改变，**ViewModel 也能感知到变化**，使 View 作出相应更新。

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140850899.png)

## 数据代理

#### Object.defineProperty ES5

应用场景：数据代理、劫持、计算属性等

define：定义 property：属性

Object.defineProperty**(对象,属性,{配置项})**

直接通过**对象属性添加的**：

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140850876.png)

**Object.defineProperty 添加的**：

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140850858.png)

**浅色表达的是---> 不可以被枚举的**(**不参与遍历**)

如何让浅色的也可以枚举(遍历)：**设置配置项---> enumerable**(可列举的)：true

**配置项属性：(默认值都为 false)**

enumerable，是否可以被枚举

witable，属性是否可以被修改，Object.defineProperty 添加的值默认不能修改

configurable，属性是否可以被删除

**get 函数(getter)**：**当读取**Object.defineProperty 方法操作的对象属性时，get 函数就被调用，返回操作的对象它的属性的值

**set 函数(setter)**：**当修改**Object.defineProperty 方法操作的对象属性时，set 函数就被调用，它**接收一个参数，为修改的值**

**数据代理**：**通过一个对象代理另一个对象中的属性**的操作( 读/写 )

```js
let obj1={x:100}
let obj2={y:200}

//通过 defineProperty 代理，然后返回obj1的x和赋值给obj1的x
Object.defineProperty(obj2,x,{
    get:(){
    return obj1.x
},
    set:(value){
    obj1.x=value
}
})
/**
         * Object.defineProperty 缺点：🚟
         * 1、在删除对象属性时，它无法去监听 解决：Vue.$delete
         * 2、在添加对象属性时，它无法去监听，要初始化就添加，解决：Vue.$set
         */
```

### Vue 应用数据代理

通过 defineProperty 代理了 data:{}的数据，**只要 data 里的数据一变化，Vue 就会自动更新**

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140851002.png)

---

步骤：

1、将 new Vue({data:{}}) 里的 data 数据进行**数据收集**到实例对象里的 **\_data{}** 中进行**升级加工**，叫做**数据劫持**

​ 1)收集数据进行加工

​ 2)**`vm_data{}=data{}`**

2、**通过数据代理把 vm{\_data{}} 里的\_data{}的数据再代理到 \_data{}外面，也就是 vm{}里，为每一个添加到 vm 上的属性指定一个 geeter/setter**

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140851299.png)

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140852022.png)

**vue 双向数据绑定是通过 数据劫持 结合 发布者-订阅者模式的方式来实现的， 也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；**

**核心：关于 VUE 双向数据绑定，其核心是 Object.defineProperty()方法；**

---

只要**修改了\_data 里的数据**，Vue 就承诺，只要页面中用到的比如**{{name}}就会自动更新**

**只要\_data 数据修改了，那么模板也会重新解析一遍**

---

**注意：只有在 data 里面的 Vue 才会做数据代理**，比如 methods 这些 Vue 并没有做数据代理，也没有必要做

**事件修饰符**

**滚动条事件@scroll 和@wheel**

windows.event || event

- **`.stop`**：等同于 JavaScript 中的`event.stopPropagation()`，防止事件冒泡
- **`.prevent`**：等同于 JavaScript 中的`event.preventDefault()`，防止执行默认的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播）
- **`.once`**：只会触发一次

---

- **`.capture`**：与事件冒泡的方向相反，事件捕获由外到内，在捕获阶段执行
- **`.self`**：只会触发自己范围内的事件，不包含子元素
- **`.passive`**:事件的默认行为会立即执行，无需等待事件执行完毕

**键盘事件@keydown 和@keyup**

- 回车 .enter
- 删除 .delete
- 退出 .esc
- 空格 .space
- 换行 .tab **特殊，必须配合@keydown 使用**
- 上下左右 .up、.down、.left、.right
- 等等等等

input 输入框的**onchange 事件**，**要在 input 失去焦点的时候才会触发**；

**各按键用法五花八门，需要配合合适的键盘事件和用法**

**自定义别名：Vue.config.keyCodes.别名=键码**

## 计算属性 computed

**属性指的是 Vue 对象里 data 的属性**

所谓的**计算属性**就是用**已经存在的属性( Vue 实例上的 )去计算出一个全新的属性**

```js
computed:{ funNname:{ 当读取funName时，get就会被调用--联想Object.defineProperty
get(){ console.log('get被调用了') return xxx }
//不是必须要写的，但是funName以后会被修改的，就要set函数 set(xxx){
console.log('get被调用了') return xxx } } }
```

当页面解析调用到计算属性 funNname 时，并不是每次遇到 funNname 就都会调用，在这里计算属性做了一个**缓存机制(复用)**，当调用到第二次 funNname 时，不会再调用它，而是直接使用缓存返回值

计算属性 get 函数什么时候调用？

1、初次读取 funNname 时

2、当所**依赖的数据发送变化**时，会被再次调用

**计算属性简写**

（当确定计算属性只考虑读 get，不考虑改 set 时才可以使用简写）

```js
computed: {
  /*把funName当成一个函数使用 funName(){ return xxx }*/
}
```

注意：在调用时，简写方式**不能加小括号{{funName()}}**

## 监视属性

监视的属性**必须是已经存在的属性**

**对属性的监听会在属性第一次变化后开始进行监听，如果想在创建时监听属性，要使用 handler 和 immediate 对属性监听。immediate 设为 true，监听方法会在创建的时候执行 handler 里的方法。**

watch --- 也可以**监视 computed 的属性**

**handler 函数：一个回调函数，即监听到变化时执行的函数**

**immediate 函数：立刻执行的，布尔值，确认是否以当前的初始值执行**

```js
data:{ isHot:true }, watch:{ isHot:{
//它接收两个参数，一个修改后的值，一个修改前的值 //当isHot发生改变时就会调用
handler(newval,oldval){ console.log('isHot改变了') } } }
```

另一种监视实现：

**`vm.$watch('isHot',{配置项})`**

### 深度监视 deep:true

```vue
data:{ isHot:{a:1,b:2} }, watch:{ //监视多级结构的某个属性的变化 'isHot.a':{
//它接收两个参数，一个修改后的值，一个修改前的值 //当isHot发生改变时就会调用
handler(newval,oldval){ console.log('isHot.a改变了') } }
//监测多级结构的所有属性的改变a和b --- deep配置项等于true isHot:{
//它接收两个参数，一个修改后的值，一个修改前的值 //当isHot发生改变时就会调用
deep:true handler(newval,oldval){ console.log('isHot改变了') } } }
```

### **监视属性简写**

**当不需要 immediate 和 deep 配置项时就可以简写**

```js
data:{ isHot:{a:1,b:2} }, watch:{ isHot(newval,oldval){
//它接收两个参数，一个修改后的值，一个修改前的值 console.log('isHot.a改变了') }
}
```

**`vm.$watch('isHot',function(){})`** **不允许写箭头函数**

## 条件渲染

**v-show、v-if（v-else-if、v-else）**

**v-show === display：none**，可以访问到条件为 false 时的节点

**当需要使用`<template>`标签进行条件渲染时，template 标签只能配合 v-if 时才会生效，v-show 不会生效**

## 列表渲染

遍历：**数组/对象/字符串/次数**

**v-for ** 也可以配合`<template>`标签使用，需要**注意**的是也要**配合 key 使用**

**`v-for="别名(形参) in 数组/对象/字符串/次数"`**

从 2.6 起，`v-for` 也可以在实现了可迭代协议的值上使用

**`v-for="(value,key) of 数组/对象/字符串/次数"`** --- **value,key 相反了**

**key：**唯一标识，高效更新，防止复用

VNodes：虚拟 DOM

`key` 的特殊 attribute 主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。**如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法，而不是重新渲染。**而使用 key 时，它会**基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。**

有相同父元素的子元素必须有**独特的 key**。**重复的 key 会造成渲染错误。**

最常见的用例是结合 `v-for`：

在**key**中**不建议使用 index**索引，因为**index 不是一个唯一的**

```html
<ul>
  <li v-for="item in items" :key="item.id">...</li>
</ul>
```

它也可以用于强制替换元素/组件而不是重复使用它。当你遇到如下场景时它可能会很有用：

- 完整地触发组件的生命周期钩子
- 触发过渡

​ **当和 `v-if` 一起使用时，`v-for` 的优先级比 `v-if` 更高。**

### key

设置 key 值时不建议使用 index，当对数据节点进行添加删除时(**打乱顺序**)就会出错，因为**index 不是一个唯一的**值，**key 是提供给 Vue 内部使用的**，而不会显示在元素标签上

key 是虚拟 DOM 对象的唯一标识，当状态中的数据发生改变时，Vue 会**根据【新的数据】生成【新的虚拟 DOM】**

**随后 Vue 进行【新的虚拟 DOM】与【旧的虚拟 DOM】的差异比较，如下**

当**新虚拟 DOM 与旧虚拟 DOM 对比**是，**对比一样的就会使用真实的 DOM 内容复用，不一样的就更新** --- 所以不建议使用 index 作为 key 的值

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140854202.png)

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140855488.png)

复习点：abcd.**indexOf('')** 一个空字符串返回 0,abcd.**indexOf('a')**一个空字符串也返回 0

## Vue 如何监测数据改变（原理）

### **Vue 监测对象的改变**

侦听属性(监测监视) watch 是检测一个数据的变化就执行 handle 回调函数，**与 watch 一样，Vue 也是同样使用了这个原理来实现，当 data() 中的数据变化修改，Vue 就更新页面中所有使用到 data 数据的数据**，只不过 watch 是 Vue 提供给开发者用的，Vue 也有自己自身的侦听方法

**注意：当 set 函数检测到数据变化时，就回去解析模板，再生成新的虚拟 DOM，diff 算法比较旧的虚拟 DOM，生成真实 DOM**🚕🚕🚕🚕🚕

```js
let data = {
  name: '尼克杨',
  city: '洛杉矶',
};
/* Object.defineProperty(data, 'name', {
            get() {//RangeError: Maximum call stack size exceed...
                // 给同一个对象进行数据代理
                // 当读取data时就会调用get函数，get函数return又读取data
                // 这样形成了一个递归，重复读取data.name产生内存溢出
                return data.name;
            },
            set(val) {//set函数也一样
                data.name = val
            }
        }) */

let Obs = new Observer(data);

// 加工收集数据
function Observer(obj) {
  let k = Object.keys(obj);
  k.forEach(item => {
    //this 指向 vm
    Object.defineProperty(this, item, {
      get() {
        return obj[item];
      },
      set(val) {
        obj[item] = val;
      },
    });
  });
}

let vm = {};
vm._data = data = Obs;
/*
 *原理：
 *将 data 数据数据劫持到 Observer 的实例对象 Obs 中对数据进行加工，然后数据代理到 vm._data 中
 */
```

### \*\*

---

**注意：当定义已经定义好 data 里的属性，在以后再想往 data 里面添加属性时`data.xxx=ooo`，这个属性就不是一个响应式的属性了，也就是说 Vue 监测不到它的变化**。

Vue 提供了一个 API 来解决这种情况:

**`Vue.set(目标,'key属性',value属性值)`**

**`vm.$set(目标,'key属性',value属性值)`**

但是使用 Vue 提供的这个 API **（Set）**也是有**局限性**的：**不能直接给 data(Vue 实例)添加一个响应式属性，也就是不能给 data 对象添加一个一级属性，只能给二级属性添加属性**

---

### **Vue 监测数组的改变** ![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140855705.png)

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140856428.png)

**意味着当通过索引值修改 data 的数组里面的元素时，当你修改数组的长度时，Vue 并没有监测到改变**

解决方法（原理）：

**方法一：**

**当使用可以改变数组的方法( Vue 提供的 )时，Vue 会监测到数据的变化，重新解析模板进行渲染，如：**

**可以修改原数组的**

- push 数组后面添加一个元素
- pop 数组后面删除一个元素
- unshift 数组前面添加一个元素
- shift 数组后面删除一个元素
- sort 数组排序
- reverse 反转数组
- splice 数组删除添加替换

**_注意_**：此时的**数组方法并不是数组原型上提供的方法，而是 Vue 提供的**，也就是我们调用的不是 JS 原生的 prototype 数组方法，而是 **Vue 包装给我们使用的**，当我们调用方法，**最先在原型链上找到的是 Vue 提供给我们的方法**，才到 JS 原生的数组方法

调用 Vue 提供的数组方法步骤：

​ 1）当调用到 Vue 提供的数组方法时，Vue 提供的数组方法它会调用数组的 JS 原生方法

2）当调用完之后它会对模板进行解析解析渲染

**方法二：**

Vue 提供了一个 API 来解决这种情况:

**`Vue.set(目标,'key属性',value属性值)`**

**`vm.$set(目标,'key属性',value属性值)`**

## 数据双向绑定

v-model 是最好的体现

input 输入框的 onchange 事件，要在 input 失去焦点的时候才会触发；

oninput 事件在用户输入时触发，它是在元素值发生变化时立即触发；

## 过滤器

1、**`{{需要过滤的数据 | 过滤器的名字}}`**

2、**`<h1 :x="数据 | 过滤器名"></h1>`** 不允许在 v-model 使用 🚗

方法一(**局部过滤器**)：**filters**

与 methods、computed 同级，

```js
filters:{
//过滤器本质上也是一个函数
//除了可以接受val外，还可以接受上面自定义传过来的参数
过滤器名字(val){ 接收一个参数，参数来自于需要过滤的数据
	处理数据格式/逻辑
           return xxx
          }
}
```

方法二(**全局过滤器**)：**filter**

**`Vue.filter('过滤器名',function(val){})`**

## Vue 内置命令

**v-if、v-else、v-if-else、v-show、v-for、v-bind、v-model、v-text、v-html、v-once、v-pre、v-cloak **=== {12 种}

[**cookie 的重要性**](https://www.bilibili.com/video/BV1Zy4y1K7SH?p=41)

**v-html 的安全性问题**

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140856983.png)

**v-cloak 指令**只是在标签中加入**一个 v-cloak 自定义属性**，在 HTML 编译完成之后()(Vue 接管页面)该属性会被删除。**用于 比如：骨架屏，配合 CSS 实现 Vue 未接管页面时隐藏一些不必要的内容({{xxx}}),解决网速慢时出现一些插值语法{{xxx}}**

**v-pre**可以用来**阻止预编译**，**有 v-pre 指令的标签内部的内容不会被编译，会原样输出。**

## 自定义指令

**指令功能：用于解析标签（操作标签的属性、标签的内容、事件的绑定）**

**directives ** Vue 配置项(与 data 同级)

定义连词时不推荐驼峰命名法，可以连续使用

**指令的 this 指向 window**🚛

指令只能在所在的组件使用(局部指令)，解决方法：

**全局指令**

**`Vue.directive('指令名',{配置项})`**

所谓自定义指令就是**一个函数/对象**

**函数式：**

**注意：这个自定义指令的函数不需要返回值 return ，而是通过参数 element,binding 进行操作**

```js
new Vue({
	data:{},
	//自定义指令
	directives:{
		//指令名(不需要加 v-)
		big(element,binding){不需要return，直接通过参数进行操作},
		big:{}
	}
})
```

【自定义指令函数什么时候会被调用？】

**1、当 v-指令与元素绑定时会被调用**

**2、指令所在的模板被重新解析时被调用**

**对象式：**

**Vue 提供了三个函数供指令使用**

```js
new Vue({
  data: {},
  //自定义指令
  directives: {
    //指令名(不需要加 v-)
    big: {
      //指令与元素绑定时被调用，此时模板还在内存中，没有渲染到页面
      bind() {},
      //指令所在的元素被插入页面时调用
      inserted() {},
      //指令所在的模板被重新解析时调用
      update() {},
    },
  },
});
```

## **ref**

用来给**自身元素或子组件注册引用信息**( ID 替代着 ) --- 组件间**通讯**

应用在**标签元素上获得的是真实的元素**，应用在**组件标签中获得的是组件的实例对象**

设置：**`< 标签或组件标签 ref='xxoo'></ 标签或组件标签 >`**

获取：**`this.$refs.xxoo`** **子传父**

## porps

**通过标签属性传值( 父组件 )**

设置：**`< 标签或组件标签 xx='oo' :aa='oo'></ 标签或组件标签 >`**

**子组件通过与 data 属性同级的 prop 属性接收**

接收:接收时数据并没有放到**子组件的 data 属性**上，而是**直接在子组件上**🚓🚓🚓

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140857796.png)

方法一**数组：porp:['xx','aa']** --- **props 接收不了 key 或 ref 属性**

方法二**对象：porps:{}** -- 需要传指定类型的数据写法

```less
props:{
xx:String,
oo:Number
}
或
props:{
    xx:{
     type:String,//类型
     required:true,//必须的
     default:99,//默认的
    },
}
```

当 props 的值与子组件 data 的属性同名时，**props 的属性优先级更高**

将 props 传进来的值赋值给 data 属性 ( 因为 props 的优先级高，所以子组件是先接收 prop 再初始化 data 数据 )

**注意：通过 prop 方式传到子组件时，Vue 不希望修改它的值的**

解决方法：

```less
data(){
	return {
		myXX:this.xx	//复制 props 到 data 中
	}
},
props:['xx']
```

## **mixin 混入**/混合

分发 Vue 组件中的**可复用功能**，一个混入对象**可以包含任意组件选项**。

**局部混合：**

```less
//创建一个 mixin.js 文件
export const mixin = {
  //配置项 混合
  methods: {
    hello: function () {
      console.log("hello from mixin!");
    },
  },
};
```

**与 data 同级创建一个 mixins 配置项**

```less
//在需要引用的功能组件中引入
import {mixin} from 'xxx/mixin'
//与data同级创建一个mixins配置项
mixins:[mixin]
```

**注意：当组件中已经有了相同名字的混合项时，mixin 的混合项会与组件的合并，而不是覆盖它**

**生命钩子：同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。**🦽🦽🦽🦽🦽

**data：当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。**

**比如，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先**

**全局混合：**

```less
main.js文件
import {mm} from 'xxx/mixin'
Vue.mixin(mm)
```

**注意的是全局混合的话，Vue 所有的组件都会使用它**

## Vue 插件

插件通常用来**为 Vue 添加全局功能**。插件的功能范围**没有严格的限制**——一般有下面几种：

1. 添加全局方法或者 property。如：[vue-custom-element](https://github.com/karol-f/vue-custom-element)
2. 添加全局资源：**指令/过滤器/过渡等**。如 [vue-touch](https://github.com/vuejs/vue-touch)
3. 通过**全局混入**来添加一些组件选项。如 [vue-router](https://github.com/vuejs/vue-router)
4. **添加 Vue 实例方法**，通过把它们添加到 `Vue.prototype` 上实现。
5. 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 [vue-router](https://github.com/vuejs/vue-router)

**使用：**

通过全局方法 **`Vue.use()` 使用插件**。它需要在你调用 **`new Vue()` 启动应用之前**完成 🚉🚉🚉🚉

创建一个 plugin.js 文件插件
插件**暴露一个 install 方法**，这个方法的**第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象**：

```less
plugin.js export default {
  install(Vue, options) {
    // 1. 添加全局方法或 property
    Vue.myGlobalMethod = function () {
      // 逻辑...
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
        bind (el, binding, vnode, oldVnode) {
          // 逻辑...
        }
        ...
      })

      // 3. 注入组件选项
      Vue.mixin({
        created: function () {
          // 逻辑...
        }
        ...
      })

      // 4. 添加实例方法
      Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
    }
  }
}
```

在 main.js 文件下，**在调用 new Vue() 启动应用之前完成导入和使用**

```less
//main.js
import plugin from '@/plugin'
// 调用 `plugin.install(Vue)`
Vue.use(plugin)
//或也可以传入一个可选的选项对象：
Vue.use(plugin, { someOption: true })
Vue.use(plugin,参数)
```

## scoped(私有的)

在 style 标签上添加 scoped 属性，**让样式在局部生效，防止选择器命名冲突**(其实就是给当下组件设置一个随机属性，通过标签属性选择器来进行添加样式)

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140857367.png)

**注意：App.vue 文件不推荐使用 scoped**

知识点复习:查看插件/配置等版本 **`npm view axios versions`**

### uuid

生成一个全球唯一的 ID---体积庞大

替代者 **nanoid**

## **组件间传递数据**

#### **父子互传**

通常我们说 props 是父传子，其实**props 是父子互传**

实现 props**子传父\*\***前提\*\*

**我们可以通过 props 传递一个回调函数过去，通过子组件调用这个回调函数返回一个值就可以实现 props 子传父**

**回调函数**

**通过父组件创建一个回调函数，通过 prop 传给子组件，子组件通过 props 接收进行调用传回来参数**

**利用 v-model 的双向数据绑定也可以来修改 组件间的值！！！(子传父)**

**利用 v-model 的双向数据绑定也可以来修改 组件间的值！！！(子传父)**

**利用 v-model 的双向数据绑定也可以来修改 组件间的值！！！(子传父)**

**我们知道 Vue 不推荐或者会监测我们修改 props 接收的值，也就是父传子之间的值**

**但是实际上 Vue 不希望我们修改的是基本类型的值，对于引用类型的值我们还是可以修改的**

**实际上 Vue 不希望我们修改的是属性的指针(地址值)，类似于 const 关键字**

**注意：v-model 的值只能是对象，虽然通过 v-model 也可以修改，但是还是不太推荐注意做法**

## 子传父

### **组件自定义事件 $emit**

**注意：是组件的**

**@自定义事件名='methods 方法'**

**this.$emit('自定义事件名',传递的参数) --- 子组件**(静态绑定) 或

**this.$refs.xxx.$on('自定义事件名','methods 方法(这里需要注意 this 的指向)')**(动态绑定/灵活)

**通过 ref 方式绑定自定义事件时，methods 方法要么在 methods 中配置，要么直接在括号配置方法（需要用箭头函数）**，否则 this 指向会出现问题

注意：谁调用自定义事件名，它的 this 就指向谁，事件的回调在父组件中(methods 里的方法)

### **组件自定义事件 $emit 解绑**

类似于定时器一样，当不需要时我们可以给组件自定义事件解绑

谁创建的自定义事件就在谁那边解绑( 子组件 )

方法一：解绑一个自定义事件

**this.$off('自定义事件名')**

方法二:解绑多个自定义事件(放到数组里面)

**this.$off(['自定义事件名 1','自定义事件名 2])**

方法三：解绑**所有的**自定义事件 什么都不传

**this.$off()**

方法四：销毁组件

**this.$destroy**

**注意：当一个组件被销毁了 this.$destroy 那么它身上的自定义事件也就不奏效了**。**当一个父组件被销毁了，那么它自身的和子组件的定义事件也就不奏效了**。需要注意的是它**JS 原生的事件还在**

### 组件如何使用 JS **原生事件**

如何在标签内使用 JS 原生事件

注意：在组件标签内**不支持使用@click**，当在组件内使用@xxx JS 原生事件时，Vue **会把原生事件当做它的组件自定义事件**

解决方法：在事件后面添加事件修饰符 **native** **@click.native**

**为什么一个组件里面只允许有一个 div(父 div)？？？**

原因一：我们在为组件添加事件时，**如果在组件中出现两个 div，Vue 不知道给哪个 div 添加事件**

### **ref**

应用在**标签元素上获得的是真实的元素**，应用在**组件标签中获得的是组件的实例对象**

**标签/组件 ref='xxx'**

**this.$refs.xxx**

### **全局事件总线 $bus 兄弟互传**

**其实可以实现任意组件互传**

**沟通桥梁的概念**，所有组件**共用相同的事件中心**，可以向该中心**注册发送事件或接收事件**，所以组件都可以上下平行地通知其他组件，但也就是太方便所以**若使用不慎，就会造成难以维护的灾难**，因此才需要更完善的 Vuex 作为状态管理中心，将通知的概念上升到共享状态层次。

全局事件总线的条件：

1、创建全局事件总线，需要所有的组件都能看到它 --- **挂载到 Vue 显示原型上**

实质上它是一个**不具备 DOM 的组件**，它具有的仅仅只是它实例方法而已，因此它非常的轻便。

```js
在main.js文件;
new Vue({
  router,
  store,
  render: h => h(App),
  //在初始化前将 $bus 挂载到Vue显示原型上，让所有组件都能访问它
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  },
}).$mount('#app');
```

2、拥有$on、$emit、$off方法 --- **$on、$emit、$off 方法在 Vue 组件实例的原型上\*\*

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140859469.png)

3、通过**$emit、$on 组件自定义事件进行兄弟间数据传递**，当在**不需要时**我们注意要**把组件自定义事件销毁**

4、最好在 beforeDestroy 生命钩子中，用$off('xxx')去**解绑当前组件所用到的自定义事件。**

步骤：

(**发送**)创建/触发自定义事件：![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140859294.png)

(**接收**)绑定自定义事件：![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140859960.png)

(**接收**)解绑自定义事件：![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140900967.png)

### 消息订阅与发布(任意组件间通讯)

1、消息订阅：消息名

2、消息发布：消息内容

原生 JS 里面并没有办法实现消息订阅与发布，**需要借助第三方库**

推荐：**pubsub-js** publish 订阅；subscribe 发布

**`npm install punsub-js`**

步骤：

**接收数据**(组件)：

```vue
<script>
//导入 pubsub-js 插件
import pubsub from 'pubsub-js'
export default {
    data(){return {punID:''}},
    mounted() {
    订阅消息
    this.pubID=pubsub.subscribe('eve', (a 或 _ 000000,data) => {
      console.log('eve消息订阅执行了',data)
      这里的如果正常函数function this 为 undefind
    })
  },
}
</script>
```

**当不需要第一个参数时，我们怎么去占位呢？？？**

使用一个 **\_** 下划线

**发布数据**(组件)：

```vue
<script>
//导入 pubsub-js 插件
import pubsub from 'pubsub-js';
export default {
  data() {
    return {
      pub: '消息订阅与发布',
    };
  },

  methods: {
    ee() {
      发布内容;
      pubsub.publish('eve', this.pub);
    },
  },
};
</script>
```

注意：与全局事件总线不一样的是，**在订阅消息(在$bus 是绑定自定义事件)时，消息订阅与发布接收两个参数**

**`pubsub.subscribe('消息名', (a,data) =>{console.log(a,data)})`**

**a：消息名； data：接收的数据**

(**接收**)解绑销毁订阅：（与全局数事件总线不相同）**接收的是 pubsub 的一个 ID**

```vue
beforeDestroy() { pubsub.unsubscribe(this.pubID) },
```

## $nextTick

**nextTick(回调函数(){})，是将回调函数延迟在下一次 dom 更新数据后调用**

简单的理解是：**当数据更新了，【在 dom 中渲染后】，自动执行该函数，**

1、Vue 生命周期的 created()钩子函数**进行的 DOM 操作一定要放在 Vue.nextTick()的回调函数中**，**原因是在 created()钩子函数执行的时候 DOM 其实并未进行任何渲染，而此时进行 DOM 操作无异于徒劳，所以此处一定要将 DOM 操作的 js 代码放进 Vue.nextTick()的回调函数中**。与之对应的就是 mounted 钩子函数，因为该钩子函数执行时所有的 DOM 挂载已完成。

2、当项目中你想在**改变 DOM 元素的数据后**基于新的 dom 做点什么，**对新 DOM 一系列的 js 操作都需要放进 Vue.nextTick()的回调函数中；**通俗的理解是：更改数据后当你想立即使用 js 操作新的视图的时候需要使用它

vue 改变 dom 元素结构后使用 vue.$nextTick()方法来实现 dom 数据更新后延迟执行后续代码

**3、在使用某个第三方插件时 ，希望在 vue 生成的某些 dom 动态发生变化时重新应用该插件，也会用到该方法，这时候就需要在 $nextTick 的回调函数中执行重新应用插件的方法。**

## **过渡 & 动画**

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140900632.png)

注意：在需**过渡 & 动画**的结构标签加上**`<transition></transition>`**包裹

在进入/离开的过渡中，会有 **6 个 class** 切换。

1. `v-enter`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
2. `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
3. `v-enter-to`：定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除。
4. `v-leave`：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
5. `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
6. `v-leave-to`：定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除。

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140900112.png)

#### **自定义过渡的类名**

解决一个页面中多个元素需要添加动画过渡时，出现多个 v-xxx 的 **class 命名冲突**

**` <transition name="自定义的类名"></transition>`**

**默认过渡的类名**中的 **“v”** 变成了**自定义的类名**

#### **初始渲染的过渡**

让页面一加载就拥有动画效果

可以通过 `appear` 设置节点在初始渲染的过渡

```html
<transition appear></transition>
```

#### **显性的过渡持续时间**

在这种情况下你可以用 `<transition>` 组件上的 `duration`定制一个显性的过渡持续时间 (以毫秒计)：

```html
<transition :duration="1000">...</transition>
```

你也可以定制进入和移出的持续时间：

```html
<transition :duration="{ enter: 500, leave: 800 }">...</transition>
```

### **多个元素的过渡!!!**

**注意：当嵌套多个元素时，使用`<transition></transition>`会报错误生效，因为 transition 只适用于包裹一个元素！！！！！！！！！！！！！！！！！**

解决方法：使用**`<transition-group></transition-group>`,**并且**需要给每个元素匹配一个 key 值**

**给每个元素匹配一个 key 值<br/>给每个元素匹配一个 key 值<br/>给每个元素匹配一个 key 值**

```html
<transition>
  <h1></h1>
</transition>

<transition-group>
  <h1></h1>
  <h1></h1>
</transition-group>
```

### **使用第三方集成动画**

推荐：animate https://animate.style/

安装：**`npm install animate.css --save`**

引入：**`import 'animate.css'`**

使用：添加三个属性配置**name、enter-active-class、leave-active-class**

**name="animate**\_\_**animated animate\_\_\_bounce"**

**进入动画**：enter-active-class=“动画类名”

**离开动画**：leave-active-class=“动画类名”

```html
<transition-group
  name="animate__animated animate__bounce"
  enter-active-class="animate__backOutDown"
  leave-active-class="leave-active-class"
>
  <h1></h1>
  <h1></h1>
</transition-group>
```

## 配置代理

发请求：

1、xhr(**XMLHTTPRequest**)：**元老**

2、Jquery

3、axios **主流**，需手动引入第三方库，居于 Promise 封装

4、fetch **浏览器自身拥有无需引入**第三方库，也是居于 Promise 封装，**缺点:将返回的数据包两层 Promise，需两次.then() 才能拿到数据，兼容性差(不支持 IE)**

浏览器的同源策略：同源策略是一种约定，它是浏览器**最核心也是最基本的安全功能。**出于安全考虑，**浏览器限制从 JS 脚本发起的跨源 HTTP 请求。** 例如，**XMLHttpRequest 和 Fetch** API 都遵循同源策略。

注意:同源指的是**协议、域名、端口号相同**

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140901698.png)

**同源策略“只针对于浏览器端”，浏览器一旦检测到请求的结果的域名不一致后，会堵塞请求结果**。这里注意，**跨域请求是可以发去的，但是请求响应 response 被浏览器堵塞了**。

- 同源策略的非绝对性：`<script> <img> <iframe> <link> <video> <audio>`等带有 src 属性的标签可以从不同的域加载和执行资源。

解决方案：

### **CORS**( 真正意义上的解决 )

写服务器的开发者，**在服务器里给前端返回响应时，添加一些特殊的响应头**

也就是虽然跨域了，但是服务器在返回响应时添加特殊的响应头，浏览器发现跨域和特殊的响应头后，同意了将数据返回给页面

### **JSONP**

**原理：**

- JSONP 本质上是利用 `<script><img><iframe>` 等标签不受同源策略限制，可以从不同域加载并执行资源的特性，来实现数据跨域传输。
- JSONP 由两部分组成：**回调函数和数据**。回调函数是当响应到来时应该在页面中调用的函数，而**数据就是传入回调函数中的 JSON 数据**。
- JSONP 的理念就是，与服务端约定好一个回调函数名，服务端接收到请求后，将返回一段 Javascript，在这段 Javascript 代码中调用了约定好的回调函数，并且将数据作为参数进行传递。当网页接收到这段 Javascript 代码后，就会执行这个回调函数，这时数据已经成功传输到客户端了。

JSONP 请求，**缺点是仅支持 GET 请求**，必须完全信任提供服务的第三方，**优点是支持老式浏览器，兼容性较好**。

​ CORS 比 JSONP 更强大，支持所有类型的 HTTP 请求。

### **开启代理服务器**

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140902668.png)

#### [#](https://cli.vuejs.org/zh/config/#devserver-proxy)devServer.proxy

方式一：

通过 `vue.config.js`文件 中的 `devServer.proxy` 选项来配置。`devServer.proxy` 可以是一个指向开发环境 API 服务器的字符串

```js
module.exports = {
  devServer: {
    //让代理服务器去放数据的服务器(http://localhost:4000)里拿数据
    proxy: 'http://localhost:4000',
  },
};
```

优点：配置简单，请求资源时直接发给代理服务器(8080)即可

缺点：不能配置多个代理，不能灵活控制请求是否走代理(如果在 public 文件夹下有相同路径名(路径冲突)，代理服务器会优先返回 public 下的数据)

方式二：

```js
module.exports = {
  devServer: {
    proxy: {
      '/api': {//请求资源时必须加的前缀
        target: '<url>',
        ws: true,
        changeOrigin: true,
        //请求到代理服务器时将^/api开头的路径重写
        pathRewrite{'^/api':''}
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
```

优点：能配置多个代理，能灵活控制请求是否走代理

缺点：配置略微繁琐，**请求资源时必须加前缀**

### **引入全局 CSS 样式**

方式一：把文件放到 src/assets 文件夹下，通过在 main.js(不推荐)导入或在 App.vue 引入。缺点：当 CSS 文件里有不存在的依赖文件(font 字体等)，Vue 会在页面报错

方式二：把文件放到 public 文件夹下，通过在 index.html 的标签 link 导入。这样解决了当 CSS 文件里有不存在的依赖文件(font 字体等)，Vue 会在页面报错

## 插槽

在组件中使用**`<slot>默认内容，当没有使用插槽时可以默认显示这里的内容</slot>`**标签，在使用组件标签时里面嵌套内容，**内容将在插槽中展示**

### **动态插槽名**

```vue
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>
</base-layout>
```

### **具名插槽**

在插槽标签中定义名字**`<slot name="名字"></slot>`**

在组件标签使用时设置名字**`<组件名><某标签 slot="名字"></某标签></组件名>`**

**注意：使用 `<template>` 包裹标签，需要使用另外一种写法**

**`<template v-slot:名字></template>`** 或 简写

**`<template #名字></template>`** 仅仅能使用在**template**标签上

### **作用域插槽**

让**插槽内容**能够访问**子组件**中**才有的数据**

插槽需要使用的数据在子组件中，使用插槽内容的组件并没有它的数据

**解决方法：类似于 props 一样设置 slot 标签的属性进行对插槽的传值**

```vue
子组件current-user中，user为数据(类似props)
<span>
  <slot :user="user"></slot>
</span>
```

```vue
使用子组件的组件中
<current-user>
  //<template scope>
  //<template v-slot:default="user">
  <template scope={支持解构赋值}>
    {{ user }}
  </template>
</current-user>
```

**注意：在使用子组件的组件中 必须 使用 template 标签 + scope 属性 🚗 **

## VueX

采用**集中式存储管理应用的所有组件的状态(数据)**，并以相应的规则保证状态以一种可预测的方式发生变化。Vue 的插件。

**对 Vue 应用中多个组件的共享状态(数据)进行集中的管理(读/写)**，也是一种组件间的通信方式，且适用于**任意组件间通讯**，它不属于任何组件

**什么时候使用 VueX**

多个组件依赖同一状态(数据)

来自不同组件的行为需要变更同一状态(不同组件的操作都是改变同一状态)

**知识点补充：import 无论在文件哪个位置下都会优先执行(类似变量提升)**🚍🚍🚍🚍🚍🚍🚍

**知识点补充：新对象替换老对象，利用对象展开运算符 🏎**

```js
当旧对象里面的key与新对象的key属性一样时，就会替换调
obj={...oldObj,...newObj}
```

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140902381.png)

**缺点：如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。**

**mutations 里的同步意义在于，每个 mutation 执行完毕之后，可以得到对应的状态，使用 devtools(Vue 扩展)可以跟踪状态的变化**

如果是异步的，就没法知道状态是什么时候更新的，才有了 actions。

actions 用来专门处理异步，里面触发 mutations，就可以很清楚的看到 mutation 是何时被记录下来的，并且立即查看他们对应的状态。这样异步更新也可以清楚看到状态的流程。

### **Action **dispatch

**Action 可以是异步函数**

**Action 提交的是 mutation，而不是直接变更状态。**

**Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 `context.commit` 提交一个 mutation，**或者通过 `context.state` 和 `context.getters` 来获取 state 和 getters。

接收一个或多个参数

**context 表示 mini 版的 Store(拥有 Store 上的一些方法供 actions 的函数使用)**

```js
通过dispatch调用 actions 里的函数
this.$store.dispatch('actions 里的函数'，传递过去的一些业务数据)

store文件下
actions: {
    increment (context) {
      context.commit('increment')//调用mutations的方法
    }
  }
```

使用 **`mapActions` 辅助函数**将组件的 methods 映射为 `store.dispatch` 调用（**需要先在根节点注入 `store`**）：

#### Mutations commit

**mutation 必须是同步函数，mutation 的方法名建议使用全大写命名**🚓

更改 Vuex 的 store 中的状态的**唯一方法是提交 mutation**

**接受 state 作为第一个参数**

```js
通过commit调用 mutations 里的函数
store.commit('increment', {
  amount: 10
})
或 对象风格
store.commit({
  type: 'increment',
  amount: 10
})
或
this.$store.commit('mutations 里的函数'，传递过去的一些业务数据)

store文件下
mutations: {
  increment (state, payload) {//接受 state 作为第一个参数
    state.count += payload.amount
  }
}
```

Vuex 的 **store 中的状态是响应式的**，那么当我们变更状态时，监视状态的 Vue 组件**也会自动更新**。这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项：

1. 最好提前在你的 store 中**初始化好所有所需属性**。
2. 当需要在对象上添加新属性时，你应该

- 使用 `Vue.set(obj, 'newProp', 123)`, 或者

- 以**新对象替换老对象**。例如，利用对象展开运算符 我们可以这样写：

  ```js
  state.obj = { ...state.obj, newProp: 123 };
  ```

可以在组件中使用 `this.$store.commit('xxx')` 提交 mutation，或者使用 `mapMutations` **辅助函数**将组件中的 methods 映射为 `store.commit` 调用（**需要在根节点注入 `store`**）。

---

### **辅助函数(Vuex 在组件中的简写方式)**

**import { mapXxx, mapXxx } from 'vuex'**

**mapState({别名:'接收的数据' _注意需要添加引号接收_}) **

**可以使用数组或对象接收 ...mapXXX 扩展运算符语法添加**

**mapState 和 mapGetters 在组件中都是写在 computed 里面**

```vue
<template>
  <div>
    <h2>Home页面的数字：{{ num }}</h2>
    <h2>About页面的数字：{{ getNum }}</h2>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['num'])
    ...mapGetters(['getNum'])
  }
}
</script>
```

**mapMutations 和 mapActions 在组件中都是写在 methods 里面**

```vue
<template>
  <div>
    <button @click="increase(2)">点击加1</button>
    <button @click="decreaseAsync()">点击延迟减1</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  methods: {
    ...mapMutations(['increase']),
    ...mapActions(['decreaseAsync']),
  },
};
</script>
```

---

#### **getters 非必须的配置项**

**类似于 Vue 的计算属性 computed**

```vue
//将state数据加工，接受 state 作为第一个参数 getters: { getNum(state) { return
state.num } },
```

**为什么都不在组件里面写业务逻辑函数，都在 store 里写业务逻辑函数？？？**

**提高复用**，避免在每个组件中都写一套相同的业务逻辑代码

#### 模块化

```js
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
...mapState('a',['x','c','v'])
...mapState('b',['a','s','d'])
```

# **router**

Vue 的一个插件，**专门用来实现 SPA 应用**

路由就是一组**key(路径) - value(组件) 的应对关系**

多对路由需要一个路由器管理

**hash 模式**: url 带一个#, 但是**#和它后面的**路径(值)**不会包含在发送 http 请求中带给服务器**,**兼容性好**,若以后将地址**通过第三方手机 app 分享**,**若 app 校验严格,则地址会被标记为不合法**

**history 模式**(嘿斯特旅):url 正常显示**无#哈希值**,**兼容性略差**,**当页面刷新时会出现 404 页面,**因为 url 的路径可能被当做资源去向后台请求数据了,后台也没有这些路径资源

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140903056.png)

## **对 SPA 应用的理解：**

**1、单页面 Web 应用**

2、整个应用**只有一个完整的页面( index.html )**

3、点击页面中的导航链接**不会刷新页面**，**只会做页面的局部更新**

4、数据需要 Ajax 请求获取

路由组件通常放到**pages 文件夹**下，一般组件放**components 文件夹**下

提供两个组件：**router-link 、router-view**

router-link 标签的属性 **active-class(激活时添加 class)、to(跳转的路径)、tag(渲染成什么标签)**、**replace(当点击时，会调用 `router.replace()` 而不是 `router.push()`，于是导航后不会留下 history 记录。)、name(如果 `<router-view>`设置了名称，则会渲染对应的路由配置中 `components` 下的相应组件)**

要注意，当 `<router-link>` 对应的路由匹配成功，将自动设置 class 属性值 `.router-link-active`。

**active-class** : router-link 的属性，当 router-link 的 to 属性路径被激活时，会往标签上添加一个 class --- **`active-class="xxx"`**，默认值: `"router-link-active"`

**注意：通过切换，“隐藏”来的路由组件，默认是被销毁的，需要的时候再去挂载**

**每个组件都有一个自身的$route,整个SPA都独有一个$router**

---

### 二级路由(路由嵌套) children

**注意点:路由规则 path 不需再加 '/' ，to 路径匹配需要加上父级路径**🚗🚗🚗🚗🚗🚗🚗

### 动态路由匹配

把某种模式匹配到的所有路由，全都**映射到同个组件**。例如，我们有一个 `User` 组件，对于所有 **ID 各不相同的用户**，**都要使用这个组件来渲染**。那么，我们可以在 `vue-router` 的路由路径中使用“**动态路径参数**”(dynamic segment) 来达到这个效果：

```js
const User = {
  template: '<div>User</div>',
};

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User },
  ],
});
```

现在呢，像 `/user/foo` 和 `/user/bar` 都将映射到相同的路由。

| 模式                          | 匹配路径            | $route.params                          |
| ----------------------------- | ------------------- | -------------------------------------- |
| /user/:username               | /user/evan          | `{ username: 'evan' }`                 |
| /user/:username/post/:post_id | /user/evan/post/123 | `{ username: 'evan', post_id: '123' }` |

**注意：获取动态路径参数需要使用 $route.params 方式**

### 路由组件传参

**$route.query、$route.params**

**_query 方式_**：**xxx.html?nnn&mmm 或 对象形式{path:'',query:{id:''}}**

**\*params 方式：\*\*\***xxx.html/xx/nn/mmm 或 对象形式{name:'',params:{id:''}} 配置路由规则 path:xxx.html/:id/:tit/:a\*\*

**注意 🚙:params 方式使用对象形式传参时,不允许使用 path 传路劲,只能使用命名路由 name!!!**

使用占位符 :xxx 的形式规则去获取 params 参数

### 命名路由

**可以简化一些比较长的路径**

```html
<router-link :to="{ name: 'user'}">User</router-link>
```

### props

使用 `props` 将组件和路由解耦：

**简化大量`$route` 获取参数的代码取代与 `$route` 的耦合**

**1.🪂 对象方式:**值为对象,key-value 会以 props 的形式传给激活的组件

,组件接收数据与 props 传值一样

```js
routes: [
  {
    path: '/promotion/from-newsletter',
    component: Promotion,
    props: { a: xxx, b: xxx },
  },
];

组件;
props: ['a', 'b'];
```

**2.🚤 布尔值方式:当`props:true`**时,会把**所有的 params 的参数**,以 props 的形式传给激活的组件 --- **只适用于 🚤params 🚤 query 无效**

**3.🚅 函数方式:**

```js
routes: [
    {
      path: '/promotion/from-newsletter',
      component: Promotion,
        //回调函数形式
      props($route){ 或 解构赋值
      	return {
      		id:$route.query.id
      		title:$route.query.ttle
      	}
      }
      //或 解构赋值
      props({query}){}
      return {
      		id:query.id
      		title:query.ttle
      	}
    }
  ]
```

### 路由元信息

**注意:$route.meta,meta 为路由元信息,开发者自定义的信息都会放到这**

### SPA 的历史纪录(进退)

默认 push( 压栈 ):**有前进后退功能**(追加历史记录)

replace( 替换 ):**无前进后退功能**(替换**当前**历史记录)

**开启:给 router-link 添加 replace 属性**

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140904416.png) ![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140904726.png)

### 缓存路由组件 keep-alive(不被销毁)

**属性 include="组件名"** :缓存特定的组件,不设置会把它包含的所有组件都缓存 exlude

```vue
<transition>
  <keep-alive include="组件名 或 ['组件名','组件名']">
    <router-view></router-view>
  </keep-alive>
</transition>
```

### **新生命周期**

路由(keep-alive)独有的两个生命周期函数:

**activated(激活的)**

**deactivated (失活的或取消激活的)**

## **路由守卫**

**作用:对路由进行权限控制**

**分:全局路由 独享路由 组件内路由**

### **全局路由**

### **全局前置路由守卫**

**beforEach (保护路由的安全)(权限)\*\***

**登录用户个人中心或 token 等信息的验证**

注意:🚓 每一次**路由切换之前**和**初始化时**

**`beforEach((to,from,next)=>{})`**

**to(去哪),from(来自哪),next(放行,是否允许切换),添加配置时往$route.meta 添加,如标题...**

---

**全局后置路由守卫**

**afterEach(对标题等信息的修改)**

注意:🚓 每一次**路由切换之后**和**初始化时**, 无 next

**`beforEach((to,from)=>{})`**

---

**独享路由守卫 唯有一个**

**`beforEnter((to,from,next)=>{})`**

**单独对一个路由进行权限控制,可以和全局后置路由配合使用**

```js
routes: [
    {
      path: '/promotion/from-newsletter',
      component: Promotion,
      props: { a:xxx,b:xxx },
      beforEnter((to,from,next)=>{
      	对权限token等控制是否跳转
      })
    }
  ]
```

---

### **组件内路由**

**beforRouteEnter(to,from,🛴next) 通过路由规则(注意是通过,可能会出现一种情况是首次加载就展示组件,这时组件并不用通过),进入组件之前调用**

**beforRouteLeave(to,from,🛴next) 通过路由规则,离开组件之后调用**

---

## 生命周期总数(11 个)

**beforCreate\created**

**beforMouted\mouted**

**beforupdate\updated**

**beforDesroy\destroy**

**另外三 activated\deactivated $nextTick**

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140906870.jpg)

## history 刷新 404

Node 专门解决 history 刷新出现 404 的 npm 包

https://www.npmjs.com/package/connect-history-api-fallback

安装:**`npm install --save connect-history-api-fallback`**

在配置静态页面 use(express,())前引入:

const history **=** require('connect-history-api-fallback');

使用: app.use(history());
