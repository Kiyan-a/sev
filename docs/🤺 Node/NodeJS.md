---
sidebar_position: 3
---

# NodeJS

Node.js 是一个能够**在服务端运行**的 **Javascript 运行环境**，Node 大部分基本模块都用 Javascript 编写。运行在 Node.jS 中的 JS 的用途是**操作磁盘文件**或**搭建 HTTP 服务器**，NodeJS 就相应提供了`fs`、`http`等内置对象。

**NodeJs 高性能 Web 服务器、JS、单线程、异步、V8 引擎、硬件要求低**

_V8 引擎，目前速度最快的 JS 引擎_

🚕*奇数为测试版、偶数为稳定版*

可以做什么???

- Web 服务器后台
- 命令行工具
  1. npm
  2. git
  3. hexo
  4. ......
- 第三方模块( 自己写的少,主要使用别人开发的第三方库 )
  1. webpack
  2. npm
  3. gulp

🥞**在 Node 中有一个全局对象 (global)，与浏览器全局对象 (window) 类似**

### **[模块化](https://www.jianshu.com/p/fb96179c40bf)**

**CommonJS、AMD、CMD、ES6 模块化**

### **模块化优点：**

1. **避免命名冲突**，减少命名空间污染
2. 更好的文件分离，**按需加载**
3. 更高的**复用性**
4. 更高的**维护性**

#### **CommonJS 规范**

**注意：🚄 在 Node 中 , 每一个 js 文件中的代码都是独立运行在一个函数中的(函数包裹代码 IIEF) , 【不是全局作用域的】, 模块中的变量和函数在其它模块中是无法访问的**

#### **require**

**模块引入**：**在 node 中**,通过 **require 函数来引入**外部的模块

require() 引入的模块【返回的是一个对象】，这个对象代表的是引入的模块内容

注意：相对路径必须以 **./ ../** 开头

#### **exports**

**模块导出：**模块中向外部【暴露属性和方法 **/** 使用 exports 属性】

**`exports.xxx=yyy`**

缺点：**加载模块是同步的**，只有加载完后才能执行后面的操作；**现加载现用**，在服务器端编程，**加载的模块一般存在本地硬盘里，加载起来比较快，不用考虑异步加载的问题，因为 CommonJS 规范比较适用。**然后，并不适用于浏览器环境，同步意味着阻塞线程，浏览器资源的加载方式是异步的。

**模块的标识：**使用 require() 引入外部模块时，使用的就是模块标识 require('模块标识') ，可以通过模块标识来找到指定的模块。

**模块主要分两大类:**核心模块**：-由 node 引擎提供的模块，核心模块的标识就是模块的名字 require('模块名')**文件模块\*\*：由开发者创建的模块，文件模块的标识就是模块的相对路径 require('相对路径')

模块文件结构：当 Node 在执行代码时会自动用下面函数将内容包裹

```js
function (exports, require, module, __filename, __dirname){
	.../文件内容
}
```

🍤 注意：从这个函数可以看出，开发者使用的 exports , require , module .exports 都是这个函数提供的，在函数执行时传递进去的五个实参，而不是在全局中的，

exports：- 该对象用来将变量或函数暴露到外部

require：- 函数，用来引入外部的模块

module:- 代表的是模块本身，exports 实际上就是 module 的属性

\_\_filename:- 当前模块的【完整路径】

\_\_dirname:- 当前模块的所处的【文件夹名】

### module

通过`module`对象可以访问到当前模块的一些相关信息，但最多的用途是替换当前模块的导出对象。例如模块导出对象默认是一个普通对象，如果想改成一个函数的话，可以使用以下方式。

```js
obj.a --- module.exports
a=obj.a --- exports=module.exports
引用数据类型在堆栈中的关系
exports只能通过 . 来暴露数据
module.exports既可以通过 . 的形暴露，也可以直接赋值

错误🍳：
exports={xxx=yyy,aaa(){}}
正确🍖：exports.xxx=yyy 或者
	   module.exports={xxx=yyy,aaa(){}} 或者
       module.exports.xxx=yyy
```

### 包 package

Common.Js 的包规范允许**将一组模块组合到一起，形成一组完整的工具。**

组成：**包结构、包描述文件**

包结构：-用于组织包中的各种文件( 压缩文件，解压以后还原为目录 )

​ 规范目录：

​ **-package.js -描述文件( 必须 )**

​ -bin -可执行二进制文件

​ -lib -js 代码

​ -docc -文档

​ -test -单元测试

包描述文件：-描述包的相关信息，以供外部读取分析

#### **Node 包管理器 npm**

```js
npm -v //查看版本号
npm version //查看所有依赖版本号
npm search 包名 //搜索包
npm install/i 包名 //安装包
npm remove/r 包名 //删除包
//安装包并添加到依赖中(package.json文件中),可以查看保证我们需要的包版本
//现在7.7.6版本不需要提交 --save (自动添加)
npm install 包名 --save
npm install 包名 -g //全局安装包(一般是一些工具)
```

**当把包提交到依赖中( package.json )**,在安包时就不需要一个个去 install 安装,**只需要 npm install 就可以**

#### **模块初始化**

**注意 🥩**：一个模块中的 JS 代码仅在模块**第一次被使用时执行一次**，并在执行过程中初始化模块的导出对象。之后，**缓存起来**的导出对象被**重复利用**。

### **Buffer(缓冲区)**

用户发送接收的数据(2 进制)，在服务器端这里它存放在哪？？？ --- Buffer

在 Node.js 中，定义了一个 Buffer 类，该类用来创建一个 🍜**专门存放二进制数据**的缓存区。一个 Buffer **类似于一个数组**，但它对应于 V8 堆内存**之外的一块原始内存。**Buffer 库为 Node.js 带来了一种**存储原始数据的方法**。

注意 🥫：在 Unicode 编码，**存储时为二进制、显示时为十六机制(0x)、读取时为十进制(日常使用)**

目前使用**new Buffer()构造函数**来创建对象实例已废弃（Buffer 对内存的权限操作相比很大，可以直接捕获一些敏感信息），目前官方文档里面**建议使用 Buffer.from()接口去创建 Buffer 对象**。

Buffer.from(str) 代替 new Buffer(str) 将一个字符串保存到 Buffer 中

Buffer.alloc(10) 代替 new Buffer(10) 设置 10 个字节的 Buffer

性能 🍖：Buffer.alloc(清空再分配空间) > Buffer.allocUnsafe(不会清空再分配空间，可能包含敏感数据)

Buffer 一旦大小确定，则不能修改，因为 Buffer 实际上是对底层的内存的直接操作

buffer.length -占用内存的大小

**中文占 3 个字节(byte)内存**

buffer 中每个元素的范围是从 00-ff(16 进制)、 0-255(10 进制)、 00000000- 11111111(2 进制)

**只要数字在控制台或者页面输出都是一个 10 进制 的数据( 自动转化 )**

```js
let str = '你好 node!';
let buffer = Buffer.from(str);
/* 将一个字符串保存到Buffer中 */
Buffer.from(str);

console.log(str.length); //8 -字符串的长度
console.log(buffer.length); //12 -占用内存的大小

// 00000000 或 11111111

// 计算机 一个0 或 一个1 我们称为1位（bit）

/* 
    8bit=1byte(字节)
    1024byte=1kb
    1024kb=1mb
    1024mb=1gb
    1024gb=1tb
    🍕buffer 里的一个元素占用内存一个字节
*/
```

Buffer 实例与普通的 JavaScript 字符串之间进行**相互转换 toString()**

### **fs ( 文件系统 )**

服务器的本质就是将本地的文件发送给远程的客户端，**通过 Node 来操作系统中的文件，Node 通过 fs 模块来和文件系统进行交互。**

fs 模块提供了一些标准文件访问的 API 来打开、读取、写入文件。

使用： **`const fs = require('fs')`**

### **同步和异步**

调用 fs 模块中所有的操作都**有两种形式可供选择同步和异步。**

同步文件系统会**阻塞**程序的执行,也就是除非操作完毕,否则不会向下执行代码。

异步文件系统不会阻塞程序的执行,而是在操作完成时,通过回调函数将结果返回。

区别：🛹

**同步：_const fd =_ fs.方法名 Sync ( path [, mode] )**

**异步：fs.方法名 ( path [, mode] , _callback_)**

**异步方法**无需赋值给变量( **无返回值** )，通过回调函数的参数返回值

Sync :同步; callbck:回调;

**性能：异步 > 同步**

文件的写入:🚗

---手动操作的步骤

### 同步

​ 1.打开文件

​ **fs. openSync (path, flagsI, model)**

- path 要打开文件的路径

- flags 打开文件要做的操作的类型

  r 只读的

  w 可写的

- mode 设置文件的操作权限,一般不传

- 返回值：---该方法会返回一个文件的描述符作为结果,我们可以通过读描述符来对文件进行各种操作

  **fs. openSync ("path", "w/r")**

​ 2.向文件中写入内容

​ **fs.writeSync(fd, string[, position[, encoding]])**

- fd：文件的描述符

- string：写入得到内容

- position：初始位置

- encoding：写入的编码,默认 utf-8

- 返回: number 写入的字节数。

  **fs.writeSync( fd , '内容')**

  注意 🚒：**此时如果不关闭文件，文件一直存在 内存 中得不到释放**

​ 3.保存并关闭文件

​ **fs.closeSync( fd )**

- fd：文件的描述符

### 异步

​ 1.打开文件

​ **fs. open (path, flagsl, model, callback)**

​ -用来打开一个文件一异步调用的方法，结果都是通过回调函载 的参救返回的

​ -回调函数两个参数：

​ err 错误对象，如果**没有错误则为 null**

​ fd 文件的描述符 个

​ **fs. open (path, flagsl, model, _functiom( fd , err ){}_)**

​ 2.向文件中写入内容

​ **fs.write(fd, string[, position[, encoding]], functiom( err ){})**

​ 3.保存并关闭文件

​ **fs.close( fd, functiom( err ){} )**

### 实用(常用)写入文件操作

上面两种方式的操作并不实用

异步：

**fs.writeFile(file, data[, {options}], _callback_)**

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140919033.png)

**fs.writeFile(file, data, _{flag:'w'}_, _functiom( err ){}_ )**

options 配置： 常用 r 、 w 、 a ![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140919867.png)

知识点补充：当出现路径 C:\ 时，会报错误。解决方法：

1、使用 \ 转义：C:\\\

2、使用 / : C:/

同步：

**fs.writeFileSync(file, data[, options])**

### 流式文件写入

**可以持续写入**(累加)

同步、异步或者简单文件写入( **一次性写入**，消耗**性能大**，容易导致**内存溢出** )都不适合操作大文件

使用：

--- 创建一个可写流( 接水管,往水缸放数据 )

**fs.createWriteStream(path[, options])**

```js
//创建一个可写流
const ws = fs.createWriteStream('./public/test.txt');

// 可以通过监听流的open和close事件来监听流的打开和关闭

ws.once('open', function () {
  console.log('流式打开了');
});

ws.once('close', function () {
  console.log('流式关闭了');
});

// 往文件里添加数据,可以连续持续添加
ws.write('1!');
ws.write('2!');
ws.write('3!');
ws.write('4!');

// 关闭流
// ws.close();  ---尾部关闭
// ws.end();  ---头部关闭
ws.end();
```

on(事件字符串,回调函数)-可以为对象绑定一个事件

once(事件字符串,回调函数)-可以为对象绑定一个一次性的事件，该事件将会在触发一次以后自动失效

关闭流

### 文件的读取

**fs.readFile 异步; fs.readFileSync 同步;** ---参数与写入类似

返回的是一个 **Buffer 类型的数据**，需要**使用 toString() 转化**

**流式文件写入**

**fs.createReadStream(path[, options])**

如果要读取一个可读流中的数据,**必须要为可读流绑定一个 data 事件**, data 事件绑定完毕,它会**自动开始读取数据**,**读取完毕就会自动关闭流**

```js
/* 流式文件的读写 */
const fs = require('fs');
//创建一个可读流
const rs = fs.createReadStream(
  './public/#雄狮少年 18岁的他远走他乡，靠一人撑起整个家！再苦再累，他也没有放.mp4'
);
//创建一个可写流
const ws = fs.createWriteStream('./public/test.mp4');

// 可以通过监听 可写流 的open和close事件来监听流的打开和关闭
ws.once('open', function () {
  console.log('可写流打开了');
});

ws.once('close', function () {
  console.log('可写流关闭了');
});

// 可以通过监听 可读流 的open和close事件来监听流的打开和关闭
rs.once('open', function () {
  console.log('可读流打开了');
});
//这里的close事件 可读流读取完毕会自动关闭，无需手动调用 end/close 关闭
rs.once('close', function () {
  console.log('可读流关闭了');
  // 关闭可写流
  ws.end();
});

//当读取大文件不是一次性读取的，会一次读取xxx字节大小(累加)
rs.on('data', function (data) {
  // console.log(data);
  // 在这里进行写入文件操作
  ws.write(data);
  //  ### 不能在这里将可写流关闭，因为数据是一段一段读取的
});
// ws.close();  ---尾部关闭
// ws.end();  ---头部关闭
```

**更加简单的方法**：

### **pipe()**

**pipe()可以将可读流中的内容，直接输出到可写流中**

**`rs.pipe (ws) ;`**

直接 pipe 无需再绑定 data 事件再写入，自动开启关闭读/写流

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140920540.png)

### 🧨 其它操作

fs.stat 检测是文件还是目录

fs.mkdir 创建目录

fs.writeFile 创建写入文件

fs.appendFile 追加文件

fs.readFile 读取文件

fs. readdir 读取目录

fs.unlink 删除文件

fs.rmdir(Sync) 删除目录

重命名文件和目录(剪切) fs.renmae

监视文件更改写入 fs.watchFile

http://nodejs.cn/api/
