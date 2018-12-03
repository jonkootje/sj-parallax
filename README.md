#SJ-PARALLAX
http://www.parallax.web-sj.com (Demo & Explanation)

####Install files
----------
1. Download sj-parallax.js and sj-parallax.css
2. Paste the sj-parallax.js in your js folder and sj-parallax.css in your style folder
3. Include the files by adding the following to your index.html / index.php
```
<script type="text/javascript" rel="javascript" src="[path to sj-parallax.js]"></script>
<link type="text/css" rel="stylesheet" href="[path to sj-parallax.css]">
```
Done

####Using the parallax effect
There are 2 types of parallax effects so far:
1. background (parallax the background-image of a div)
2. normal (Normal divs / img)
3. fixedheader (parallax the background-image of a fixed header)
4. fixedbackground (parallax the background-image of a fixed div)

To use the effect on a element, do the following things:
1. Add class sj-parallax
2. Set data-type (background, normal, fixedheader or fixedbackground)
3. Set offset (default = 10)

If you're using a background type, you can use data-from to set the background position (top, center, bottom)

####Examples
```
<div class="sj-parallax" data-type="background" data-offset="50" style="background-image: url('/img/temp.png')"></div>
```
```
<img class="sj-parallax" data-type="normal" data-offset="20" src="/img/test.png">
```
