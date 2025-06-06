<?php
extract($_REQUEST);
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>FOTOGRAFIAS POSTULACIÓN</title>
		<link rel="preload" as="image" href="/media/<?php echo $ID_POSTULACION; ?>/1.jpg">
		<link rel="preload" as="image" href="/media/<?php echo $ID_POSTULACION; ?>/2.jpg">
		<link rel="preload" as="image" href="/media/<?php echo $ID_POSTULACION; ?>/3.jpg">
		<link rel="stylesheet"type="text/css"href="https://www.jqueryscript.net/demo/transition-mix-slide/mixSlide.css"/>
	</head>
	<body>
<style>


span#mixSlide-open-close-fullscreen {
    display: none !important;
}

</style>

<div id="diaporama">
		
		
		
		
<?php

if(file_exists("media/".$ID_POSTULACION."/1.jpg")){
?>
<div><img src="/media/<?php echo $ID_POSTULACION; ?>/1.jpg" /><p>POSTULACIÓN <?php echo $ID_POSTULACION; ?></p></div>
<?php	
}

?>

<?php

if(file_exists("media/".$ID_POSTULACION."/2.jpg")){
?>
<div><img src="/media/<?php echo $ID_POSTULACION; ?>/2.jpg" /><p>POSTULACIÓN <?php echo $ID_POSTULACION; ?></p></div>
<?php	
}

?>


<?php

if(file_exists("media/".$ID_POSTULACION."/3.jpg")){
?>
<div><img src="/media/<?php echo $ID_POSTULACION; ?>/2.jpg" /><p>POSTULACIÓN <?php echo $ID_POSTULACION; ?></p></div>
<?php	
}

?>

		</div>
		<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
		<script language="javascript"src="https://www.jqueryscript.net/demo/transition-mix-slide/jquery.vporel.mixSlide.js"></script>
		<script language="javascript">
			$(function(){
				$('#diaporama').mixSlide({
					fullscreen:true,
					thumbs:{
						active:true,
						position:'bottom'
					},
					controls:{
						active:true,
						position:"top"
					},
					transition:{
						name:"random",
						constant:false
					},
					animation:{
						delay:3,
						speed:1
					},
					autoplay:false,
					labels:{
						active:true,
						position:"bottom-right"
					}
				});
			});
		</script>
		<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
	</body>
</html>
