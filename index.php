<!DOCTYPE html >
<html>
<head>
   <meta charset="utf-8" />
   <title>Say My Love To You</title>
   <link rel="Stylesheet" type="text/css" href="css/flower.css"/>
   <meta http-equiv = "X-UA-Compatible" content="chrome=1,IE=edge"/>
</head>
<body id="backgd">

<!--
      <canvas id="canvasT" height="600" width="600"></canvas>-->
      <canvas id="canvas" width="600" height="600"></canvas>
      <div style="clear:both;"></div>

   <footer style="">
      <span>Powered By Moe</span><br />
      <a href="http://www.moevery.com">Moe's blog</a>
   </footer>
</body>
<!--<script src="js/jquery.js" type="text/javascript"></script>-->
<!--<script src="js/fancybox/jquery.fancybox-1.3.4.js" type="text/javascript"></script>-->
<script src="js/flower.js" type="text/javascript"></script>
<script type="text/javascript">
   <?php if (isSet($_GET['n'])) echo "var loveName ='{$_GET['n']}';";
      else echo "var loveName = '';";
   ?>
</script>
<script src="js/bloom.js"></script>
<div style="visibility:hidden;"><a href="http://www.51.la/?8808315" target="_blank"><img alt="&#x6211;&#x8981;&#x5566;&#x514D;&#x8D39;&#x7EDF;&#x8BA1;" src="http://img.users.51.la/8808315.asp" style="border:none" /></a>
</div>
</html>