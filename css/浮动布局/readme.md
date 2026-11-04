# 文档流
浏览器在渲染页面时，遵照从上往下，从左往右，依次排列，这种方式的排版方式，就是文档流

# 浮动布局
- 文字环绕

1. float: left; 浮动会导致文字脱离文档流，但是一定不会覆盖文字

2. 浮动元素导致父容器高度塌陷，进而影响后续容器排版

# 清除浮动
1. 直接给父容器设置高度（不推荐）
2. 在浮动元素的末尾增加一个容器，设置 clear: left;   --  不推荐
3. 为父容器设置 after 伪元素，在伪元素上 clear: left;  -- 推荐
4. 被影响的元素设置 clear: both  --- 不推荐
5. 将父容器设置为BFC容器 --- 推荐

# BFC（block formatting context）
1. 父子容器的 margin-top 会重叠

- BFC的渲染规则：
 1. BFC容器内部的子元素也是从上往下，从左往右排列
 2. BFC容器是一个独立的拥有特殊渲染规则的容器，它的内部子元素不会影响外部
 3. BFC容器在计算高度的时候，会将子元素的高度也计算在内

- 如何创建BFC容器：
 1. overflow: hidden/auto/overlay/scroll;
 2. position: absolute/fixed;
 3. float: left/right;
 4. display: flex/grid/inline-xxx;