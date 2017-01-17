Marker
======

在HTML页面中实现查找,定位功能
--

JS需要三个按钮和一个数入框和一个Label

 - findbtnID - 查找按钮
 - nextbtnID - 下一个按钮
 - prevbtnID - 上一个按钮
 - textID    - 输入框
 - panelID   - 内容存在的Element
 - display   - 现是数量
```
function Marker(findbtnID,nextbtnID,prevbtnID,textID,panelID,display)
```
使用方法
--
HTML代码：
```
<div class="group">
     <input type="search" id="text1" />
     <input type="button" id="buttonm" value="Mark"/>
     <input type="button" id="buttonn" value="next"/>
     <input type="button" id="buttonp" value="prev"/>
     <span >一共有:<b id='displayer'></b></span>
</div>
```
调用JS：
```
var marker=Marker('buttonm','buttonn','buttonp','text1','panel1','displayer');
```
后期功能
--
 - 一个一个替换
 - 批量替换
 - .....
