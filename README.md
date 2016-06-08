# About
PC端公用弹窗UI组件alert, toast, confirm, checkbox, radio, showLoading



# Home Page
http://leochan2017.github.io/ywpc


# Started
1. 把 yw.css 和 yw.js 下载到你的项目中
2. 在HTML引入yw.js


#API
### yw.alert(tit, str)
---
```
@param String  tit  要显示的标题
@param String  str  要显示的内容
```

*Demo :*


> ![alert Demo](https://raw.githubusercontent.com/leochan2017/ywpc/master/images/demo/alert.png)



### yw.toast(str, icon, s)
---
```
@param String  str  要显示的内容
@param Boolean icon  默认False是红色的警告样式提示, 传入true是蓝色样式的成功提示
@param Number  s  显示的毫秒数,默认2000
```

*False toast Demo :*

> ![False toast Demo](https://raw.githubusercontent.com/leochan2017/ywpc/master/images/demo/toast-false.png)


*Success toast Demo :*

> ![Success toast Demo](https://github.com/leochan2017/ywpc/blob/master/images/demo/toast-true.png?raw=true)



### yw.confirm(tit, str, succ, fail)
---
```
@param String  tit  要显示的标题
@param String  str  要显示的内容
@param Function  succ  点确定后要执行的动作
@param Function  fail  点取消后要执行的动作
```

*Demo :*


> ![confirm Demo](https://raw.githubusercontent.com/leochan2017/ywpc/master/images/demo/confirm.png)


