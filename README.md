# About
PC端公用UI弹窗组件alert, toast, confirm, checkbox, radio, showLoading, showLoading

---

# Home Page
http://leochan2017.github.io/ywpc

---

# USE
1. 同时把 yw.css 和 yw.js 下载到你的项目中
2. 在HTML引入`<script src="./yw.js"></script>`

---

#API
### yw.alert(tit, str)

* @param String  tit  要显示的标题

* @param String  str  要显示的内容

*Demo :*


> ![alert DEMO](http://7xrn7f.com1.z0.glb.clouddn.com/16-6-8/1323893.jpg)


===

### yw.toast(str, icon, s)

* @param String  str  要显示的内容

* @param Boolean icon  默认False是红色的警告样式提示, 传入true是蓝色样式的成功提示

* @param Number  s  显示的毫秒数,默认2000


*False toast Demo :*


> ![False toast Demo](http://7xrn7f.com1.z0.glb.clouddn.com/16-6-8/66475832.jpg)

*Success toast Demo :*

> ![Success toast Demo](http://7xrn7f.com1.z0.glb.clouddn.com/16-6-8/59384873.jpg)

===

### yw.confirm(tit, str, succ, fail)

* @param String  tit  要显示的标题

* @param String  str  要显示的内容

* @param Function  succ  点确定后要执行的动作

* @param Function  fail  点取消后要执行的动作


*Demo :*


> ![confirm DEMO](http://7xrn7f.com1.z0.glb.clouddn.com/16-6-8/12485212.jpg)


===


