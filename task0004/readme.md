# ToDo-WebApp

在任务三中，做了一个 PC 端的 ToDo 应用。任务四是将它优化，以适应移动端设备。

正在学习移动Web应用开发

学习目标：
   系统了解前端工程化
   学会使用gulp自动编译 Sass，压缩 CSS 和 JavaScript 代码，并且配置自动流程。
   
   
移动Web开发
CSS Processing（CSS的预编译）
前端安全（XSS）
性能优化（使用CDN加速）
JavaScript模块化（require.js）
前端工程化（AMD）

* **数据存储**

    以 JSON 模拟数据表的形式存储于 LocalStorage 中

         使用数据库的思想，构建3张表。
         cateJson 分类
         childCateJson 子分类
         taskJson 任务
         
         分类表 cate
         ----------------------
         id* | name | child(FK)
         ----------------------
         
         子分类表 childCate
         --------------------------------
         id* | pid(FK) | name | child(FK)
         --------------------------------
         
         任务表 task
         ----------------------------------------------
         id* | pid(FK) | finish | name | date | content
         ----------------------------------------------


* **响应式布局**
    
    针对手机端细节做了很多调整，更符合手机上的视觉交互习惯。

* **加入页面切换效果**
    
    使用 `translate3d()`，纯 CSS3 切换动画效果。


* **模块化**
    
    使用 requireJS 模块化 JavaScript 代码。重构 JavaScript 代码。优化之前写的耦合性高的绑定事件，重新绑定事件，降低耦合性。期间根据具体需求重写了事件代理的代码。


