<!doctype html>
<html>
<head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PE2HCEK21Z"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-PE2HCEK21Z');
</script>

<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto+Mono&display=swap" rel="stylesheet">
<link rel="icon" type="image/png" href="img/favicon.png">
<title>Premio PAM</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

	
<link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>


<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js'></script>

<script src="https://sorgalla.com/jcarousel/dist/jquery.jcarousel-core.min.js?raw=1"></script>



<script src="http://code.jquery.com/jquery.js"></script>
<script src="/js/skdslider-master/src/skdslider.min.js"></script>
<link href="/js/skdslider-master/src/skdslider.css" rel="stylesheet">



<script>


//td > img
anterior=1;
siguiente=1;


$(document).ready(function(){
 



		$(".ImgPrincipal").click(function(){
			
			 console.log('imagen click' + $(this).attr("src"));

			 console.log('imagen click data-imagenes: ' + $(this).attr("data-imagenes"));
			 console.log('imagen click data-ruta: ' + $(this).attr("data-ruta"));
			 
			 
			 ruta=$(this).attr("data-ruta");
			 
			 imagenes = $(this).attr("data-imagenes"); 
			 actual = $(this).attr("data-actual");  
			 
			 uno=false;
			 dos=false;
			 tres=false;
			 
			 if(imagenes.length>1){
				 
				 
				 var DeCadenas = imagenes.split(',');
				  
				 
				 for (var i=0; i < DeCadenas.length; i++) {
					
					if(DeCadenas[i]=='1'){
						uno = true;
					}

					if(DeCadenas[i]=='2'){
						dos = true;								
					}
					
					if(DeCadenas[i]=='3'){
						tres = true;
					}							
					
					
				}
				
				
				
				if(actual=="1"){
					
					if(dos==true){
					siguiente=2;
					}else if(tres==true){
					siguiente=3;								
					}else{
					siguiente=1;																
					}
					
					
					if(tres==true){
					anterior=3;
					}else if(dos==true){
					anterior=2;								
					}else{
					anterior=1;																
					}
					
				}
				
				
				if(actual=="2"){
					
					if(tres==true){
					siguiente=3;
					}else if(uno==true){
					siguiente=1;								
					}else{
					siguiente=2;																
					}
					
					
					if(uno==true){
					anterior=1;
					}else if(tres==true){
					anterior=3;								
					}else{
					anterior=2;																
					}
					
				}				


				
				if(actual=="3"){
					
					if(uno==true){
					siguiente=1;
					}else if(dos==true){
					siguiente=2;								
					}else{
					siguiente=3;																
					}
					
					
					if(dos==true){
					anterior=2;
					}else if(uno==true){
					anterior=1;								
					}else{
					anterior=3;																
					}
					
				}										
				 
				 $(this).attr("data-anterior",anterior)
				 $(this).attr("data-siguiente",siguiente)
				 
				 
				 $('#btn_izquierda').attr("data-anterior",anterior);
				 $('#btn_derecha').attr("data-anterior",anterior);
				 
				 $('#btn_izquierda').attr("data-siguiente",siguiente);
				 $('#btn_derecha').attr("data-siguiente",siguiente);
									  
				  
				 
				 
			 }else{	 
				 siguiente = imagenes;
				  anterior=imagenes;
				 unica=true;
				 
				$('#btn_izquierda').attr("data-anterior",anterior);
				 $('#btn_derecha').attr("data-anterior",anterior);
				 
				 $('#btn_izquierda').attr("data-siguiente",siguiente);
				 $('#btn_derecha').attr("data-siguiente",siguiente);
									  
									 
			 }
			 
			$('#btn_izquierda').attr("data-ruta",ruta);
			$('#btn_derecha').attr("data-ruta",ruta);

			 
			 $('#btn_izquierda').attr("data-imagenes",imagenes);
			 $('#btn_derecha').attr("data-imagenes",imagenes);

			 
			 $('#btn_izquierda').attr("data-id", anterior);
			 $('#btn_derecha').attr("data-id", siguiente);
			 
				  
			 $("#fullpage").css("display", "block");
			 $("#fullpage").css("backgroundImage", 'url(' + $(this).attr("src") + ')' + ''); 
			 $("#over").css("height", $(document).height()); 					
			 $("#over").css("display", "block");
			 $("#over").css("z-index", "200");
			 $("#fullpage").css("z-index", "9999999999999999");
										 $('#btn_izquierda').css("display", "block");
					$('#btn_derecha').css("display", "block");
			 
		 });
 
				 $("#fullpage").click(function(){
									 $("#over").css("display", "none");
					$('#btn_izquierda').css("display", "none");
					$('#btn_derecha').css("display", "none");
					 
				});	 
 
	 $("#over").click(function(){
									 $("#over").css("display", "none");
					 
				});	


				$("#btn_izquierda").click(function(){
			 
					Izquierda();
					 
				});	
				
				
				$("#btn_derecha").click(function(){
			 
					Derecha();
					 
				});	

				
 
});





function SetImagen(actual,objeto){


			 
			 ruta=$('#btn_izquierda').attr("data-ruta");
			 
			 imagenes = $('#btn_izquierda').attr("data-imagenes"); 
			 
			 uno=false;
			 dos=false;
			 tres=false;
			 
			 if(imagenes.length>1){
				 
				 
				 var DeCadenas = imagenes.split(',');
				  
				 
				 for (var i=0; i < DeCadenas.length; i++) {
					
					if(DeCadenas[i]=='1'){
						uno = true;
					}

					if(DeCadenas[i]=='2'){
						dos = true;								
					}
					
					if(DeCadenas[i]=='3'){
						tres = true;
					}							
					
					
				}
				
				
				
				if(actual=="1"){
					
					if(dos==true){
					siguiente=2;
					}else if(tres==true){
					siguiente=3;								
					}else{
					siguiente=1;																
					}
					
					
					if(tres==true){
					anterior=3;
					}else if(dos==true){
					anterior=2;								
					}else{
					anterior=1;																
					}
					
				}
				
				
				if(actual=="2"){
					
					if(tres==true){
					siguiente=3;
					}else if(uno==true){
					siguiente=1;								
					}else{
					siguiente=2;																
					}
					
					
					if(uno==true){
					anterior=1;
					}else if(tres==true){
					anterior=3;								
					}else{
					anterior=2;																
					}
					
				}				


				
				if(actual=="3"){
					
					if(uno==true){
					siguiente=1;
					}else if(dos==true){
					siguiente=2;								
					}else{
					siguiente=3;																
					}
					
					
					if(dos==true){
					anterior=2;
					}else if(uno==true){
					anterior=1;								
					}else{
					anterior=3;																
					}
					
				}										
				 
				 $(this).attr("data-anterior",anterior)
				 $(this).attr("data-siguiente",siguiente)
				 
				 
				 $('#btn_izquierda').attr("data-anterior",anterior);
				 $('#btn_derecha').attr("data-anterior",anterior);
				 
				 $('#btn_izquierda').attr("data-siguiente",siguiente);
				 $('#btn_derecha').attr("data-siguiente",siguiente);
									  
				  
				 
				 
			 }else{	 
				 siguiente = imagenes;
				  anterior=imagenes;
				 unica=true;
				 
				$('#btn_izquierda').attr("data-anterior",anterior);
				 $('#btn_derecha').attr("data-anterior",anterior);
				 
				 $('#btn_izquierda').attr("data-siguiente",siguiente);
				 $('#btn_derecha').attr("data-siguiente",siguiente);
									  
									 
			 }			
	
}




function Izquierda(){
	
			 $("#fullpage").css("display", "block");
			 $("#fullpage").css("backgroundImage", 'url(' + $("#btn_izquierda").attr("data-ruta") + $("#btn_izquierda").attr("data-anterior")+ '.jpg)' + ''); 
			 $("#over").css("height", $(document).height()); 					
			 $("#over").css("display", "block");
			 $("#over").css("z-index", "200");
			 $("#fullpage").css("z-index", "9999999999999999");
			 
			 SetImagen($("#btn_izquierda").attr("data-anterior"));
			 
	
}



function Derecha(){
			 $("#fullpage").css("display", "block");
			 $("#fullpage").css("backgroundImage", 'url(' + $("#btn_izquierda").attr("data-ruta") + $("#btn_derecha").attr("data-siguiente")+ '.jpg)' + ''); 
			 $("#over").css("height", $(document).height()); 					
			 $("#over").css("display", "block");
			 $("#over").css("z-index", "200");
			 $("#fullpage").css("z-index", "9999999999999999");
			SetImagen($("#btn_izquierda").attr("data-siguiente"));


}		








function ganadoras(){
window.parent.location.href = 'https://www.antenna.cl/2021/10/28/premio-pam-de-fundacion-antenna-y-bank-of-america-anuncia-a-sus-ganadoras-y-a-las-dos-menciones-honrosas-de-su-version-2021/';
}


function ImgResponsive(){

tam = $(window).width();
; 

console.log('tamaño: '+tam);

if(tam<768){

	$('#HeaderIMG').attr('src','img/LandingPAM_mobile2-09.png');
	$('#IMGGanadoras').attr('src','img/LandingPAM_mobile2-13.png');

	$('#IMGLogoFooter').attr('src','img/footerMovil.png');


}else{
	$('#HeaderIMG').attr('src','img/300ppi/pam_header.png');
	$('#IMGGanadoras').attr('src','img/300ppi/ganadores.png?v=2');

	$('#IMGLogoFooter').attr('src','img/LOGO_FOOTER.png');


}










}

</script>

	<style>

	* {
		margin:0;
		padding: 0;
	}

	html {
	font-size: 100%;
	overflow-x: hidden;
	scroll-behavior: smooth;
	}


	body{
		text-align: center;
		background-color: #f1f1f1;
		overflow-x: hidden;

	}

	header{
		width: 100%;
		background-color: #FFF6E6;
		/*max-width: 830px;*/
		display: inline-block;
		position: relative;
		top: 0;
	}

	header > nav {
		width: 100%;
	}

	header > nav > div {
		width: 100%;
	}

	body > header > nav > div > table {
		float:right;
		padding-right: 30px;
		padding-top: 25px;
		padding-bottom: 25px;
		}

	header > nav > div > table > tbody > tr > td > a >  img {
		max-height: calc(5.249vw);
		width: auto;
		margin-left: calc(1vw/5);
	}

	body > header > img{
		width: 100%;
		height: auto;
	}

	h1 {
		color: #F0000C;
		font-size: 50px;
		font-family: 'Inter', sans-serif;
		font-style: normal;
		font-weight: 700;
		line-height: 58px;
		text-align: center;
	}

	h2{
		color: #F0030D;
		margin-bottom: 0px;
		text-align: center;
		font-family: 'Roboto Mono', monospace;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	h3, h4{
		color:#F0030D;
	}
	h4 {
		font-family: 'Inter', sans-serif;
		font-size: 34px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}

	#HeaderIMG-mobile, #IMGGanadoras-mobile {
		display:none;
	}

	.texto__premios > h2 {
		padding-top: 25px;
		line-height: auto;
	}
	.texto__premios > p {
		line-height: 24px;
	}
	.premio__container {
		display: flex;
	}
	.premio__medium {
		font-weight:500;
	}
	.premio__semibold {
		font-weight:600;
	}

	.premios-container {
		background-color:#E9D9FC;
		margin-top: -4px;
		display: flex;
		flex-direction: row;
		width:100%;
	}

	.icons-header {
		width: 10%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top:212px;
	}
	.icons-header > div {
		padding: 12px 0px 12px 78px;
	}
	.icons__img{
		max-height: 27px;
	}


	body > header > div.LinkBa{
	background-color:#F0000C;
	position: relative;
	top: -4px;
	}

	body > header > div.LinkBa > h1{
	color:#ffffff;
	}

	.convocatoria-mobile {
	display: none;
	}

	#Ganadores > img {
	width: 100%;
    height: auto;
	position: relative;
	}
	.ganadoras__text {
		display: flex;
		flex-direction:row;
		justify-content: space-between;

	}
	.ganadora__nombre > h2 {
		padding: 12px 37px;
		font-size: 12px;
		line-height:16px;
	}

	/* --------accordion -------- */
	h3 {
		font-family: 'Inter', sans-serif;
		color: #F0000C;
		font-size: 28px;
		font-style: normal;
		font-weight: 500;
		line-height: 32px;
		text-align: left;
		padding-bottom: 22px;
	}
	.faq-container {
		max-width: 584px;
		display: flex;
		flex-direction: column;
		font-family: 'Inter', sans-serif;
		background-color: transparent;
		color: #F0000C;
	}

	.container{
		max-width:1200px;
		padding: 50px 0px;
	}

	.row{
		display: flex;
		justify-content: flex-end;
	}

	input {
	 position: absolute;
	 opacity: 0;
	 z-index: -1;
}
	.collapsible-accordion {
	 overflow: hidden;
}
 .collapsible-item-label {
	 display: flex;
	 justify-content: space-between;
	 cursor: pointer;
	 font-size: 22px;
	 border: 0px;
	padding:10px 0px;
	border-top: solid 1px #F0000C;
	text-align: left;
}
.collapsible-item-label > p {
	max-width:400px;
	font-size: 22px;
}
 .collapsible-item-label::after {
	content: url(img/arrow-up.svg);
	 width: 1em;
	 height: 1em;
	 text-align: center;
	 transition: all 0.35s;
}
 .collapsible-item-content {
	 max-height: 0;
	 background: transparent;
	 line-height:24px;
		font-size: 18px;
		font-weight: 400;
	 transition: all 0.35s;
	 text-align: left;
}
 input:checked + .collapsible-item-label::after {
	 transform: rotate(180deg);
}
 input:checked ~ .collapsible-item-content {
	 max-height: 100vh;
	 text-align: left;
	 padding-bottom: 30px;
}
.last-question {
		border-bottom: solid 1px #F0000C;
	}

	#Footer{
	background-color: #E9D9FC;
	display:flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding:59px 80px 89px 114px;
	text-align:left;
	justify-content: space-between;
	}

	#IMGLogoFooter {
		max-width:457px;
	}

	.copyright {
		font-size: 20px;
		padding-bottom: 22px;
	}
	.detail {
		font-size: 10px;
	}

	#Derecha {
		justify-content: center;
		display: flex;
		flex-direction: column;
		padding: 281px 72px 16px 220px;
	}
	#Derecha > a {
		text-decoration: none;
	}
	.derecha__bold {
		font-weight: 600;
	}
	.derecha__regular {
		font-weight: 400;
	}
	.icons-footer {
		padding-top:45px;
		display: flex;
		align-items:center;
	}

	.icon__footer {
		padding-right: 5px;
		height:27px;
	}

	.icons-footer > a {
		padding-right: 20px;
	}
	.arrow {
	    padding-top: 320px;
    	padding-left: 70px;
    	height: 148px;

	}
	.arrow > a > img {
		max-width: 32px;
	}

	.media-kit{
		display: flex;
    align-items: baseline;
	padding-top: 20px;
	}
	.media-kit > a {
		padding-right: 20px;
		text-decoration: none;
	}
	.media-kit > a > h4 {
		font-size: 18px;
	}

	p {
		font-family: 'Inter', sans-serif;
		color: #F0000C;
		font-size:18px;
	}
	.texto__principal {
		max-width: 654px;
		line-height: 24px;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		padding: 31px 0px 0px 0px;
	}

	.postular-btns {
		margin-top: 65px;
    	margin-bottom: 113px;
	}
	.postular-btns > a {
		text-decoration: none;

		font-family: 'Inter', sans-serif;
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		border: solid 2px #F0000C;
		cursor:pointer;
	}
	.btn__postula {
		background-color: #F0000C;
		color: #E9D9FC;
		margin-right: 29px;
		padding: 17px 28px 17px 28px;
		text-align: center;
	}
	.btn__bases {
		color: #F0000C;
		background-color: #E9D9FC;
		padding: 17px 28px 17px 28px;
	}
	.btn__postula:hover {
		background-color: #D7040E;
		border-color:#D7040E;
	}
	.btn__bases:hover {
		background-color: #D7040E;
		color: #E9D9FC;
		border-color:#D7040E;
	}

	body > header > div:nth-child(3) > div:nth-child(2) > p:nth-child(8) {
    padding-top: 0px;
    margin-top: 3px;
	}


	#TituloPostula{
		color: #fff;
		margin-top: 50px;
	}


	#TituloPostula > a{
		color: #fff;
		text-decoration: none;
	}

	#TituloBases{
	color: #fff;
    float: right;
    width:  calc(29vw);
	margin-top: 50px;
	}

	#TituloBases > a{
		color: #fff;
		text-decoration: none;
	}

	header > nav > div > table > tbody > tr > td > a > img:hover {
		filter: grayscale(200%);
	}

	.presentan{
	float: left;
	width: 40%;
	background-color:#E9D9FC;
	display: flex;
    justify-content: center;
    align-items: center;
	padding-top: 213px;
	align-self: flex-start;
	}

	.presentan > img {
		max-height: 444px;
	}

	.contenido{
		padding-top: 56px;
		float: left;
		width: 90%;
		background-color:#E9D9FC;
		text-align: left;
		min-height: calc(50vw);
	}

	body > header > nav > div > table > tbody > tr > td:nth-child(5) > a > img{
	max-height: calc(1.249vw);	width: auto;
	}
	#LinkVotaMobile, .media-kit-mobile, .izquierda__texts-mobile {
		display: none
	}
	.izquierda__texts > a {
		text-decoration: none
	}

/*  Truco de precarga de imagenes */
#preload-01 { background: url(img/BOTON1_OVER.png) no-repeat -9999px -9999px; }


/* -------------------------------- MEDIA QUERIES ------------------------------------*/
@media (max-width: 768px) {
	#HeaderIMG, #IMGGanadoras {
		display:none;
	}
	#HeaderIMG-mobile {
		display: block;
    	width: 100%;
	}
	#IMGGanadoras-mobile {
		display:flex;
	}

	.presentan{
		display: none;
	}

	.container {
		padding:0;
	}

	.contenido{
		padding-top: 54px;
		width: 100%;
		width: 100%;
	}
	.contenido > h1 {
		padding: 18px 26px;
	}
	.icons-header {
		display: none
	}

	h1 {
		font-size: 30px;
		font-style: normal;
		font-weight: 700;
		line-height: 32px;
	}

	body > header > div:nth-child(3) > div:nth-child(2) > p {
		font-size: calc(3.6vw);
		letter-spacing: calc(0.01vw);
		line-height: calc(4.3vw);
		font-family: Helvetica, Sans-Serif;
		font-weight: bold !important;
		margin-left: 5%;
		margin-right: 5%;
		padding: 0%;
	}

	.contenido__subtitulo {
		padding: 0px 0px 0px 26px;
	}

	.texto__principal {
		max-width: 338px;
		padding: 0px 31px;
	}
	.texto__principal > p {
		font-size: 22px;
		font-style: normal;
		font-weight: 400;
		line-height: 26px;
	}

	.texto__premios > p, .texto__premios > h2, .premio__container {
		margin-left: 34px;
	}

	.postular-btns {
		display: flex;
		flex-direction: column;
		margin-top:40px;
		margin-bottom: 53px;
	}

	.postular-btns > a {
		margin-top: 35px;
		margin-left: 35px;
		max-width: 210px;
    	text-align: center;
	}

	.ganadoras__text {
		display:none;
	}

	.faq-container {
		padding: 61px 37px 51px 37px;
		width:auto;
	}

	#Footer {
		flex-direction:column;
		align-content: center;
		padding: 54px 0px;
	}
	#IMGLogoFooter {
		max-width:169px;
		/* padding-bottom: 53px;
		padding-left: 32px; */
	}
	.izquierda__texts, .media-kit {
		display:none;
	}
	.izquierda__texts-mobile{
		display: flex;
		flex-direction: column;
	}
	.copyright {
		font-size: 16px;
		padding-bottom: 24px;
		padding-top: 12px;
	}
	.icons-footer {
		padding-bottom: 20px;
		padding-top: 33px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.icon__footer {
		max-width: 33px;
	}
	.hashtag__footer {
		max-width: 127px;
	}

	.media-kit-mobile {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	.detail__container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

	}
	.detail__container > a {
		text-decoration: none;
		padding-right: 20px;
	}
	.media-kit-mobile > a {
		text-decoration: none;
	}
	.media-kit-mobile > a >  h4 {
		font-size: 20px;
		padding-left: 20px;
	}

	#Derecha {
		padding:0;
	}

	#Derecha > a > h4 {
		font-size: 22px;
	}
	.derecha__bold {
		padding: 0;
	}
	.derecha__regular {
		padding:0px 0px 24px 0px;
	}

	#Footer > #Izquierda > img {
		width: 100%;
		margin-left: 0%;
	}
	.container-convocatoria-mobile {
		padding: 25px 15px 0px 15px;
	}

	#LinkVotaMobile {
		/* display: flex;
		max-width: 342px; */
		width: 100%;
		display: block;
	}

	.convocatoria-mobile{
		display:flex;
		flex-direction: column;
	}
	.logos-mobile-container {
		background-color: #F0000C;
		padding: 28px 0px 60px 28px;
	}
	.convocatoria-mobile > h3 {
		font-family: 'Inter', sans-serif;
		color: #F0000C;
		font-size:26px;
		text-align:left;
		padding: 10px 0px 10px 28px;
	}

	.convocatoria-mobile > img {
		max-width: 360px;
	}

	#VotarCerrar2{
		margin-right: 13%;
	}

	.arrow {
		display:none
	}

}


.ContenedorPostulaciones {
    width: 33.3%;
    float: left;
}

.PostulacionItem {
    background-color: white;
    width: 95%;
    min-height: 200px;
    margin: 5%;
    margin-left: 2%;
    margin-right: 2%;
}

.PostulacionItem > h1 {
    font-size: calc(2vw);
    text-align: left;
    margin-left: calc(1vw);
    margin-bottom: 0px !important;
    margin-top: 0px;
    line-height: calc(2.7vw);
    color: #000000;
    margin-left: 5%;
    letter-spacing: 0;
}

.GraficoPrincipal {
    min-height: calc(20vw);
    text-align: center;
}


.PostulacionItem > h3 {
    margin-left: 5%;
    color: #0f0f0f;
    margin-bottom: 0px;
    margin-top: 0px;
    text-align: center;
    font-size: calc(0.9vw);
    font-family: ''Akzidenz Grotesk BE Bold;
    text-align: left;
}


img.lazyload {
    max-width: 100%;
	max-height: 400px;
}



ul.carrusel {
    width: 100% !important;
    height: 100% !important;
}


li {
    max-width: 100% !important;
    max-height: 100% !important;
    display: block;
}




</style>

	<script>
		function ganadoras(){
	window.parent.location.href = 'https://www.antenna.cl/2021/10/28/premio-pam-de-fundacion-antenna-y-bank-of-america-anuncia-a-sus-ganadoras-y-a-las-dos-menciones-honrosas-de-su-version-2021/';
	}
	</script>
	</head>

<body>

  	<header>
		<img  id="HeaderIMG"  src="img/300ppi/pam_header2023.png?v=2"  alt=""/>
		<a  href="https://premiopam.cl/ganadores.html" id="LinkVota" target="_blank">
		<img id="HeaderIMG-mobile"  src="img/banner-mobile.png"  alt=""/>

</a>
		<div class="container-convocatoria-mobile">
			<img src="img/convocatoria-mobile.png" id="LinkVotaMobile">
		</div>

		<div class="convocatoria-mobile">
			<h3> Hasta el 12 de septiembre</h3>
			<div class="logos-mobile-container" >
			<img src="img/logos-mobile.svg" alt="">
			</div>

		</div>
		<div class="premios-container">
			 
			 <div class="contenido">
				 <h2 class="contenido__subtitulo">PREMIO PAM 2023</h2>
				 <h1>Un reconocimiento <br>
				 a mujeres artistas.</h1>
 
				 
 
				 <div class="texto__premios">
						  
			  

				 			   
<?php


$sql = "SELECT * FROM `postulaciones_pam` WHERE `ESTADO_POSTULACION` = '1' ORDER BY `ID_POSTULACION` ASC  limit 10";


 
include("CONFIGURACION.php");


$mysqli = new mysqli($_ENV['DB_HOST'], $_ENV['DB_USERNAME'], $_ENV['DB_PASSWORD'], $_ENV['DB_NAME']);
//$mysqli->query("SET NAMES 'utf8'");
$result = $mysqli->query($sql);

 

$con=0;			
$col1 = "";				  
$col2 = "";
$col3 = "";				  

while($row=$result->fetch_array()) {
extract($row);

	ob_start();

?> 
			  
			<div class="PostulacionItem">
				<h1><?php echo str_pad($NUMERO, 2, "0", STR_PAD_LEFT); ?></h1>
				
			
		
<script>
$(document).ready(function() {

    $( "#dialog_<?php echo str_pad($NUMERO, 2, "0", STR_PAD_LEFT); ?>" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener_<?php echo str_pad($NUMERO, 2, "0", STR_PAD_LEFT); ?>" ).on( "click", function() {
      $( "#dialog_<?php echo str_pad($NUMERO, 2, "0", STR_PAD_LEFT); ?>" ).dialog( "open" );
	   $('.ui-dialog').css({
        'width': $(window).width(),
        'height': $(window).height(),
        'left': '0px',
        'top':'0px'
   });
    });
	
	
	
	
        $('#slider_<?php echo str_pad($NUMERO, 2, "0", STR_PAD_LEFT); ?>').skdslider({
          slideSelector: '.slide',
          delay:5000,
          animationSpeed:2000,
          showNextPrev:true,
          showPlayButton:true,
          autoSlide:true,
          animationType:'fading'
        });	
	
	
  } );
  </script>

  
<div class="GraficoPrincipal">				
<?php


 if($NUMERO=="38" or $NUMERO=="101"){ ?>

<video src="/media/<?php echo $ID_POSTULACION; ?>/V.mp4" style="max-width: 90%;" poster="/media/<?php echo $ID_POSTULACION; ?>/<?php echo $FOTO_SELECCION; ?>.jpg" controls></video>

<?php
}else{

$fotos="";	
	
if(file_exists("media/".$ID_POSTULACION."/1.jpg")){
$fotos="1";		
}

if(file_exists("media/".$ID_POSTULACION."/2.jpg")){

if(strlen($fotos)>0){	
$fotos.=",";		
}

$fotos.="2";		

	
}



if(file_exists("media/".$ID_POSTULACION."/3.jpg")){

if(strlen($fotos)>0){	
$fotos.=",";		
}

$fotos.="3";		

	
}

if(!isset($FOTO_SELECCION)){
	$FOTO_SELECCION = 1;
}

?>	
		<img class="lazyload ImgPrincipal" id="ImgPrincipal_<?php echo $ID_POSTULACION; ?>" data-id="<?php echo $ID_POSTULACION; ?>" data-anterior="" data-siguiente="" data-actual="<?php echo $FOTO_SELECCION; ?>" data-ruta="/media/<?php echo $ID_POSTULACION; ?>/"  data-imagenes="<?php echo $fotos; ?>" src="/media/<?php echo $ID_POSTULACION; ?>/<?php echo $FOTO_SELECCION; ?>.jpg" />
<?php	
}

?>

				
		<div id="dialog_<?php echo str_pad($NUMERO, 2, "0", STR_PAD_LEFT); ?>" title="POSTULACIÓN N ° <?php echo str_pad($NUMERO, 2, "0", STR_PAD_LEFT); ?>"  style="background-color: white !important;height: 100%;" >
 

<table style="width: 100%;"><tr><td><div> &lt;&lt; </div></td>
<td>	  

	<ul class="carrusel">
				  
<li><img class="lazyload ImgPrincipal" src="/media/<?php echo $ID_POSTULACION; ?>/<?php echo $FOTO_SELECCION; ?>.jpg" /></li>
	
				
<?php

if(file_exists("media/".$ID_POSTULACION."/1.jpg") and $FOTO_SELECCION!="1" and true){
?>
<li><img class="lazyload ImgPrincipal ImgSecundaria" src="/media/<?php echo $ID_POSTULACION; ?>/1.jpg" /></li>
<?php	
}

?>

<?php

if(file_exists("media/".$ID_POSTULACION."/2.jpg") and $FOTO_SELECCION!="2" and true){
?>
<li><img class="lazyload ImgPrincipal ImgSecundaria" src="/media/<?php echo $ID_POSTULACION; ?>/2.jpg" /></li>
<?php	
}

?>

<?php

if(file_exists("media/".$ID_POSTULACION."/3.jpg") and $FOTO_SELECCION!="3" and true){
?>
<li><img class="lazyload ImgPrincipal ImgSecundaria" src="/media/<?php echo $ID_POSTULACION; ?>/3.jpg" /></li>
<?php	
}

?></ul>

</td>
<td>
<div> &gt; &gt; </div>
</td></tr>
</table>

</div>

</div>				
		 
				
				
				
				<h3>Título: <?php echo iconv(mb_detect_encoding($TITULO_DE_OBRA, "auto"), "UTF-8", $TITULO_DE_OBRA); ?>.</h3>
				
				<h3>Año Creación: <?php echo ($FECHA_CREACION); ?>.</h3>

				<h3>Técnica: <?php echo iconv(mb_detect_encoding($TECNICA, "auto"), "UTF-8", $TECNICA);?>.</h3>
				
				<h3>Dimenciones: <?php echo $DIMENCIONES; ?>.</h3>
				<h3>Edad: <?php 
				
				
				
				echo ( (int) date("Y") -  (int) substr($FECHA_DE_NACIMIENTO,6,10));   
				echo " Años"; 
				
				?>.</h3>
				
				<h3>Nacionalidad: <?php echo ucfirst(strtolower(str_replace("@","",utf8_encode($NACIONALIDAD)))); ?>.</h3>
				<h3>Ciudad: <?php echo ucfirst(strtolower(str_replace("@","",utf8_encode($LUGAR_RESIDENCIA)))); ?>.</h3>
				<br/>
				
				</div>
			  
   
			  
<?php

$datos = ob_get_contents();
ob_end_clean();
	
	switch ($con) {
    case 0:
        $col1 .= $datos;
			$con++;
        break;
    case 1:
        $col2 .= $datos;
			$con++;
        break;
    case 2:
        $col3 .= $datos;
			$con=0;
        break;
}

	
	$datos = "";

}
				  
		?>		
			  
			  
			  <div class="ContenedorPostulaciones">
			  <?php echo $col1; ?>
			  </div>
			  
			  <div class="ContenedorPostulaciones">
			  <?php echo $col2; ?>			  
			  </div>

			  <div class="ContenedorPostulaciones">
			  <?php echo $col3; ?> 
			  </div>			  
			   
			   
			   
				<div id="fullpage" onclick="this.style.display='none';">
				
				
			
				
				</div>
				  
 
			 </div>
		 </div>
 
			 <div class="icons-header">
				 <div>
					 <a href="mailto:premiopam@antenna.cl" target="_blank"><img class="icons__img" src="img/icons/rrss-email.svg" alt="Correo premiopam@antenna.cl"></a>
				 </div>
				 <div>
					 <a href="https://www.instagram.com/antennaorg/?hl=es-la" target="_blank"><img class="icons__img" src="img/icons/rrss-instagram.svg" alt="Instagram"></a></div>
				 <div>
					 <a href="https://www.facebook.com/antennaorg" target="_blank"><img class="icons__img" src="img/icons/rrss-facebook.svg" alt="facebook"></a></div>
				 <div>
					 <a href="https://www.linkedin.com/company/antennaorg/" target="_blank"><img class="icons__img" src="img/icons/rrss-linkedin.svg" alt="linkedin"></a></div>
				 <div>
					 <a href="https://www.premiopam.cl/" target="_blank"><img class="icons__hastag" src="img/icons/PremioPAM2023.svg" alt="premio-pam"></a></div>
			 </div>
		 </div>

			
		</div>

		 
		</div>
 

 

	</div>
</div>



		</div>
    </header>

	<footer>
<div id="Footer">

			<div id="Izquierda">

				<img id="IMGLogoFooter" src="img/logo-footer-2023.png" />
				<p class="copyright">© 2023, PAM. Todos los derechos reservados.</p>
				<div class="izquierda__texts">
				<a href="https://www.leondelmonte.cl/" target="_blank"><p class="detail" >Diseño <b>León del Monte</b> </p></a>
				<a href="https://canalcero.com/" target="_blank"><p class="detail">Programación <b>Canal Cero</b> </p></a>

				</div>


			</div>

			<div id="Derecha">

			<a href="mailto:premiopam@antenna.cl"> <h4  class= "derecha__bold">Contáctanos</h4>
			<h4 class="derecha__regular">premiopam@antenna.cl</h4></a>

			<div class="media-kit-mobile">
					<a href="https://drive.google.com/drive/folders/1HABtrp_9hOcv_4zJnxl8MEIetDLn3tTw" target="_blank" >
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
				<path d="M14.0468 1.72513C13.7759 1.4699 13.4542 1.26743 13.1001 1.12929C12.746 0.991148 12.3665 0.920045 11.9832 0.920045C11.5999 0.920045 11.2203 0.991147 10.8662 1.12929C10.5122 1.26742 10.1904 1.4699 9.9195 1.72513L6.79677 4.6649C6.62934 4.83922 6.53953 5.06749 6.54594 5.30243C6.55235 5.53736 6.65448 5.76099 6.8312 5.92699C7.00791 6.093 7.24566 6.18867 7.49523 6.1942C7.74481 6.19974 7.98708 6.11471 8.1719 5.95672L11.0175 3.27696L11.0107 17.4009C11.0107 17.6437 11.1131 17.8766 11.2955 18.0483C11.4779 18.2199 11.7252 18.3164 11.9832 18.3164V18.3164C12.2411 18.3164 12.4885 18.2199 12.6708 18.0483C12.8532 17.8766 12.9557 17.6437 12.9557 17.4009L12.9644 3.29435L15.7944 5.95672C15.9769 6.12839 16.2244 6.22478 16.4823 6.2247C16.7403 6.22461 16.9877 6.12805 17.1701 5.95626C17.3524 5.78447 17.4548 5.55152 17.4547 5.30866C17.4546 5.06579 17.3521 4.83291 17.1696 4.66124L14.0468 1.72513Z" fill="#F0000C"/>
				<path d="M22.9999 15.6401C22.7347 15.6401 22.4803 15.7371 22.2928 15.9096C22.1052 16.0821 21.9999 16.3161 21.9999 16.5601L21.9999 20.2401C21.9999 20.4841 21.8945 20.7181 21.707 20.8907C21.5194 21.0632 21.2651 21.1601 20.9999 21.1601L2.99988 21.1601C2.73466 21.1601 2.48031 21.0632 2.29277 20.8907C2.10523 20.7181 1.99988 20.4841 1.99988 20.2401L1.99988 16.5601C1.99988 16.3161 1.89452 16.0821 1.70698 15.9096C1.51945 15.7371 1.26509 15.6401 0.999878 15.6401C0.734661 15.6401 0.480308 15.7371 0.292771 15.9096C0.105235 16.0821 -0.000122199 16.3161 -0.000122245 16.5601L-0.000122945 20.2401C-0.000123084 20.9721 0.315947 21.6741 0.878556 22.1917C1.44117 22.7093 2.20423 23.0001 2.99988 23.0001L20.9999 23.0001C21.7955 23.0001 22.5586 22.7094 23.1212 22.1918C23.6838 21.6742 23.9999 20.9721 23.9999 20.2401L23.9999 16.5601C23.9999 16.3161 23.8945 16.0821 23.707 15.9096C23.5194 15.7371 23.2651 15.6401 22.9999 15.6401Z" fill="#F0000C"/>
				</svg>
					</a>
					<a href="https://drive.google.com/drive/folders/1HABtrp_9hOcv_4zJnxl8MEIetDLn3tTw" target="_blank"><h4>Media kit 2023</h4></a>
				</div>


				<div class="icons-footer">
				<a href="https://www.instagram.com/antennaorg/?hl=es-la" target="_blank"><img class="icon__footer"  src="img/icons/rrss-instagram.svg"  alt="Instagram"/></a>
				<a href="https://www.facebook.com/antennaorg" target="_blank"><img class="icon__footer" src="img/icons/rrss-facebook.svg"  alt="facebook"/></a>
				<a href="https://www.linkedin.com/company/antennaorg/" target="_blank"><img class="icon__footer" src="img/icons/rrss-linkedin.svg"  alt="linkedin"/></a>
				<a href="https://www.premiopam.cl/"  target="_blank"><img class="hashtag__footer" src="img/icons/PremioPAM2023-horizontal.svg"  alt="premio-pam"/></a>

				</div>
				<div class="media-kit">
					<a href="https://drive.google.com/drive/folders/1HABtrp_9hOcv_4zJnxl8MEIetDLn3tTw" target="_blank" >
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
				<path d="M14.0468 1.72513C13.7759 1.4699 13.4542 1.26743 13.1001 1.12929C12.746 0.991148 12.3665 0.920045 11.9832 0.920045C11.5999 0.920045 11.2203 0.991147 10.8662 1.12929C10.5122 1.26742 10.1904 1.4699 9.9195 1.72513L6.79677 4.6649C6.62934 4.83922 6.53953 5.06749 6.54594 5.30243C6.55235 5.53736 6.65448 5.76099 6.8312 5.92699C7.00791 6.093 7.24566 6.18867 7.49523 6.1942C7.74481 6.19974 7.98708 6.11471 8.1719 5.95672L11.0175 3.27696L11.0107 17.4009C11.0107 17.6437 11.1131 17.8766 11.2955 18.0483C11.4779 18.2199 11.7252 18.3164 11.9832 18.3164V18.3164C12.2411 18.3164 12.4885 18.2199 12.6708 18.0483C12.8532 17.8766 12.9557 17.6437 12.9557 17.4009L12.9644 3.29435L15.7944 5.95672C15.9769 6.12839 16.2244 6.22478 16.4823 6.2247C16.7403 6.22461 16.9877 6.12805 17.1701 5.95626C17.3524 5.78447 17.4548 5.55152 17.4547 5.30866C17.4546 5.06579 17.3521 4.83291 17.1696 4.66124L14.0468 1.72513Z" fill="#F0000C"/>
				<path d="M22.9999 15.6401C22.7347 15.6401 22.4803 15.7371 22.2928 15.9096C22.1052 16.0821 21.9999 16.3161 21.9999 16.5601L21.9999 20.2401C21.9999 20.4841 21.8945 20.7181 21.707 20.8907C21.5194 21.0632 21.2651 21.1601 20.9999 21.1601L2.99988 21.1601C2.73466 21.1601 2.48031 21.0632 2.29277 20.8907C2.10523 20.7181 1.99988 20.4841 1.99988 20.2401L1.99988 16.5601C1.99988 16.3161 1.89452 16.0821 1.70698 15.9096C1.51945 15.7371 1.26509 15.6401 0.999878 15.6401C0.734661 15.6401 0.480308 15.7371 0.292771 15.9096C0.105235 16.0821 -0.000122199 16.3161 -0.000122245 16.5601L-0.000122945 20.2401C-0.000123084 20.9721 0.315947 21.6741 0.878556 22.1917C1.44117 22.7093 2.20423 23.0001 2.99988 23.0001L20.9999 23.0001C21.7955 23.0001 22.5586 22.7094 23.1212 22.1918C23.6838 21.6742 23.9999 20.9721 23.9999 20.2401L23.9999 16.5601C23.9999 16.3161 23.8945 16.0821 23.707 15.9096C23.5194 15.7371 23.2651 15.6401 22.9999 15.6401Z" fill="#F0000C"/>
				</svg>
					</a>
					<a href="https://drive.google.com/drive/folders/1HABtrp_9hOcv_4zJnxl8MEIetDLn3tTw" target="_blank"><h4>Media kit 2023</h4></a>
				</div>
				<div class="izquierda__texts-mobile">
				<div class="detail__container">

				<a href="https://www.leondelmonte.cl/" target="_blank"><p class="detail" >Diseño <b>León del Monte</b> </p></a>
				<a href="https://canalcero.com/" target="_blank"><p class="detail">Programación <b>Canal Cero</b> </p></a>

				</div>
				</div>

			</div>
			<div class="arrow">
			<a href="#">

			<img src="img/arrow.png" >

			</a>
			</div>

		</div>
	</footer>



	
	


<!--020820220358 Andy S.onda-->
<script>
	$(document).ready(function(){ irArriba(); }); //Hacia arriba
	function irArriba(){
  $('.arrow').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.arrow').slideDown(600); }else{ $('.arrow').slideUp(600); }
  });
  $('.arrow').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}

</script>
</body>
</html>
