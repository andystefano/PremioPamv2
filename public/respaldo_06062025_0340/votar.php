<html><head>
<meta charset="utf-8">
<title>Premio PAM</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
<link rel="stylesheet" href="/resources/demos/style.css">

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>

 


<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500">
<link type="text/css" rel="stylesheet" href="waitMe.css">

 <script src="https://cdn.jsdelivr.net/npm/lazyload@2.0.0-rc.2/lazyload.js"></script>

				

<script>

 

	$( function() {





	
  
  var dateInputMask = function dateInputMask(elm) {
	elm.addEventListener('keypress', function(e) {
	  if(e.keyCode < 47 || e.keyCode > 57) {
		e.preventDefault();
	  }
	  
	  var len = elm.value.length;
	  
	  // If we're at a particular place, let the user type the slash
	  // i.e., 12/12/1212
	  if(len !== 1 || len !== 3) {
		if(e.keyCode == 47) {
		  e.preventDefault();
		}
	  }
	  
	  // If they don't add the slash, do it for them...
	  if(len === 2) {
		elm.value += '/';
	  }
  
	  // If they don't add the slash, do it for them...
	  if(len === 5) {
		elm.value += '/';
	  }
	});
  };
	
  var input = document.querySelectorAll('.fecha')[0];
  dateInputMask(input);

  var input2 = document.querySelectorAll('.fecha')[1];
  dateInputMask(input2);



  $("input").keydown(function (e){
   // Capturamos qué telca ha sido
   var keyCode= e.which;
   // Si la tecla es el Intro/Enter
   if (keyCode == 13){
     // Evitamos que se ejecute eventos
     event.preventDefault();
     // Devolvemos falso
     return false;
   }
 });


	  $('#FOTOGRAFIA_RETRATO').change(function(){ 
		
		console.log('triger Archivo cargado');
		contenido = $('#FOTOGRAFIA_RETRATO').val();
		contenido =  contenido.toUpperCase();

		if(contenido.length>2){

			console.log('hay archivo');
			$('#IMG_FOTOGRAFIA_RETRATO').attr('src','img/LandingPAM_Formulario-16-ok.png');

			//REMOVE CLASS FOTOGRAFIA_RETRATO_ERROR
			$('#FOTOGRAFIA_RETRATO_ERROR').removeClass('errorForm');
			$('#FOTOGRAFIA_RETRATO_ERROR').html('');

         if(contenido.split(".").pop()=='JPG' || contenido.split(".").pop()=='JPEG'){

		 }else{

			console.log('Formato invalido');
			$('#IMG_FOTOGRAFIA_RETRATO').attr('src','img/LandingPAM_Formulario-16-mal.png');
			//ADCLASS FOTOGRAFIA_RETRATO_ERROR
			$('#FOTOGRAFIA_RETRATO_ERROR').addClass('errorForm');
			$('#FOTOGRAFIA_RETRATO_ERROR').html('Solo se permiten archivos JPG, intentelo nuevamente.');

		 }


		}else{
			console.log('NOOO hay archivo');

			$('#IMG_FOTOGRAFIA_RETRATO').attr('src','img/LandingPAM_Formulario-16-mal.png');
			//ADCLASS FOTOGRAFIA_RETRATO_ERROR
			$('#FOTOGRAFIA_RETRATO_ERROR').addClass('errorForm');
			$('#FOTOGRAFIA_RETRATO_ERROR').html('Fotografía retrato es un campo obligatorio.');
		}

	
	  });




	  $('#FOTOGRAFIA_OBRA_1').change(function(){ 
		
		console.log('triger Archivo cargado');
		contenido = $('#FOTOGRAFIA_OBRA_1').val();
		contenido =  contenido.toUpperCase();

		if(contenido.length>2){

			console.log('hay archivo');
			$('#FO1 > div:nth-child(2) > label > img').attr('src','img/LandingPAM_Formulario-24-ok.png');

			//REMOVE CLASS FOTOGRAFIA_RETRATO_ERROR
			//$('#FO1 > div:nth-child(1) > span').removeClass('errorForm');
			$('#FO1 > div:nth-child(1) > span').html('');

         if(contenido.split(".").pop()=='JPG' || contenido.split(".").pop()=='JPEG'){

		 }else{

			console.log('Formato invalido');
			$('#FO1 > div:nth-child(2) > label > img').attr('src','img/LandingPAM_Formulario-24-mal.png');
			//ADCLASS FOTOGRAFIA_RETRATO_ERROR
			$('#FO1 > div:nth-child(1) > span').addClass('errorForm');
			$('#FO1 > div:nth-child(1) > span').html('Solo se permiten archivos JPG, intentelo nuevamente.');

		 }


		}else{
			console.log('NOOO hay archivo');

			$('#FO1 > div:nth-child(2) > label > img').attr('src','img/LandingPAM_Formulario-24.png?v=3');
			//ADCLASS FOTOGRAFIA_RETRATO_ERROR
			$('#FO1 > div:nth-child(1) > span').addClass('errorForm');
			$('#FO1 > div:nth-child(1) > span').html('');
		}

	
	  });








	  
	  $('#FOTOGRAFIA_OBRA_2').change(function(){ 
		
		console.log('triger Archivo cargado');
		contenido = $('#FOTOGRAFIA_OBRA_2').val();
		contenido =  contenido.toUpperCase();

		if(contenido.length>2){

			console.log('hay archivo');
			$('#FO2 > div:nth-child(2) > label > img').attr('src','img/LandingPAM_Formulario-24-ok.png');
			$('#FO2 > div:nth-child(1) > span').html('');

         if(contenido.split(".").pop()=='JPG' || contenido.split(".").pop()=='JPEG'){

		 }else{

			console.log('Formato invalido');
			$('#FO2 > div:nth-child(2) > label > img').attr('src','img/LandingPAM_Formulario-24-mal.png');
			$('#FO2 > div:nth-child(1) > span').addClass('errorForm');
			$('#FO2 > div:nth-child(1) > span').html('Solo se permiten archivos JPG, intentelo nuevamente.');

		 }


		}else{
			console.log('NOOO hay archivo');

			$('#FO2 > div:nth-child(2) > label > img').attr('src','img/LandingPAM_Formulario-24.png?v=3');
			$('#FO2 > div:nth-child(1) > span').addClass('errorForm');
			$('#FO2 > div:nth-child(1) > span').html('');
		}

	
	  });





	  
	  

	  
	  $('#FOTOGRAFIA_OBRA_3').change(function(){ 
		
		console.log('triger Archivo cargado');
		contenido = $('#FOTOGRAFIA_OBRA_3').val();
		contenido =  contenido.toUpperCase();

		if(contenido.length>2){

			console.log('hay archivo');
			$('#FO3 > div:nth-child(2) > label > img').attr('src','img/LandingPAM_Formulario-24-ok.png');
			$('#FO3 > div:nth-child(1) > span').html('');

         if(contenido.split(".").pop()=='JPG' || contenido.split(".").pop()=='JPEG'){

		 }else{

			console.log('Formato invalido');
			$('#FO3 > div:nth-child(2) > label > img').attr('src','img/LandingPAM_Formulario-24-mal.png');
			$('#FO3 > div:nth-child(1) > span').addClass('errorForm');
			$('#FO3 > div:nth-child(1) > span').html('Solo se permiten archivos JPG, intentelo nuevamente.');

		 }


		}else{
			console.log('NOOO hay archivo');

			$('#FO3 > div:nth-child(2) > label > img').attr('src','img/LandingPAM_Formulario-24.png?v=3');
			$('#FO3 > div:nth-child(1) > span').addClass('errorForm');
			$('#FO3 > div:nth-child(1) > span').html('');
		}

	
	  });









	} );







 

</script>
	<style>
	

	html {
  font-size: 100%; /* 100% = 16px */ ✅
	}

	/* Respuesta Preguntas Frecuentes */
	@font-face {font-family: "Favorit";
    src: url("http://db.onlinewebfonts.com/t/04c4a36facccf2d0906a0f1ed61036ef.eot"); /* IE9*/
    src: url("http://db.onlinewebfonts.com/t/04c4a36facccf2d0906a0f1ed61036ef.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("http://db.onlinewebfonts.com/t/04c4a36facccf2d0906a0f1ed61036ef.woff2") format("woff2"), /* chrome firefox */
    url("http://db.onlinewebfonts.com/t/04c4a36facccf2d0906a0f1ed61036ef.woff") format("woff"), /* chrome firefox */
    url("http://db.onlinewebfonts.com/t/04c4a36facccf2d0906a0f1ed61036ef.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("http://db.onlinewebfonts.com/t/04c4a36facccf2d0906a0f1ed61036ef.svg#Favorit") format("svg"); /* iOS 4.1- */
}


	/* Respuesta Preguntas Frecuentes */

	@font-face {
	font-family: 'Berthold-Akzidenz-Grotesk-Medium';
	src: url('https://premiopam.cl/b/fonts/Berthold-Akzidenz-Grotesk-Medium.woff') format('woff');
	}


	@font-face {
	font-family: 'akzidenzgroteskbe-regular-webfont';
	src: url('https://premiopam.cl/b/fonts/akzidenzgroteskbe-regular-webfont.woff') format('woff');
	}	


	@font-face {
	font-family: 'berthold-akzidenz-grotesk-be-medium';
	src: url('https://premiopam.cl/b/fonts/berthold-akzidenz-grotesk-be-medium_bigfontsite.com.woff') format('woff');
	}


	@font-face {
	font-family: 'akzidenz-grotesk-bold';
	src: url('https://premiopam.cl/b/fonts/akzidenz-grotesk-bold.woff') format('woff');
	}
	


	@font-face {font-family: "Akzidenz Grotesk BE Bold"; src: url("//db.onlinewebfonts.com/t/0fecedcc2f33a0880b3f56b9290da4d5.eot"); src: url("//db.onlinewebfonts.com/t/0fecedcc2f33a0880b3f56b9290da4d5.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/0fecedcc2f33a0880b3f56b9290da4d5.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/0fecedcc2f33a0880b3f56b9290da4d5.woff") format("woff"), url("//db.onlinewebfonts.com/t/0fecedcc2f33a0880b3f56b9290da4d5.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/0fecedcc2f33a0880b3f56b9290da4d5.svg#Akzidenz Grotesk BE Bold") format("svg"); }

	


		body{
			text-align: center;
			background-color: #f1f1f1;

			/*background-image: url(img/LandingPAM_Formulario-01.png);*/
			background-size: cover;
			background-position-x: 0;
			background-position-y: 0;
			overflow-x:hidden;
			
		}



legend{
font-family: 'Akzidenz Grotesk BE Bold';
    /* font-weight: bold; */
    margin-bottom: 2vw;
    border: calc(1vw/6) solid red;
    color: red;
    padding: 1vw;
    font-size: calc(2.4vw);
    width: fit-content;
    padding-left: calc(1.4vw);
    background-color: #E9D9FC;
	}


#IMG_FOTOGRAFIA_RETRATO{
	width: calc(100% - 3vw) !important; height: auto; cursor: pointer;
}
		
		
		header{
			width: 100%;		
			background: rgb(255,246,230);
			background: linear-gradient(180deg, rgba(255,246,230,1) 0%, rgba(255,246,230,1) 42%, rgba(233,217,252,1) 45%, rgba(233,217,252,1) 100%);
			/*max-width: 830px;*/
			display: inline-block;
		    position: relative;
    		top: -7px;
		}
		
		header > nav {
			width: 100%;
		}
		
		header > nav > div {
			width: 100%;
		}
		



		.presentan{
float: left;width: 32%;background-color:#E9D9FC; min-height: calc(94vw);
 }
 
 .contenido{
 float: left;width: 68%;background-color:#E9D9FC;text-align: left;min-height: calc(94vw);
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
		
		h3{
			color:#F0030D;
		}
		h2{
			color: #000000;
    margin-bottom: 0px;
    text-align: left;
    font-family: 'Akzidenz Grotesk BE Bold';
	font-size: calc(1.9vw);
    letter-spacing: 0.015rem;
    margin-top: 8.3%;

		}	
		h1{
			color: #000000;
    text-align: left;
    /* width: 365px; */
    font-size: 32px;
    margin-top: calc(0.5vw);
	font-size: calc(4.565vw);
    letter-spacing: 0.18rem;
    font-weight: bold;
    margin-top: 0px;
    line-height: calc(4.7vw);
	font-family: 'Akzidenz Grotesk BE Bold';

	
		}	


	
		.cuerpo{
		min-height: 720px;
		
		}
		

		body > header > div.LinkBa{
		background-color:#F0000C;
    	position: relative;
    	top: -4px;	
		}
		
	body > header > div.LinkBa > h1{
	color:#ffffff;
	}
	
	




#FPAM > fieldset > div > div > img {
    max-width: 100%;
}

	
 
button {
    letter-spacing: calc(0.01vw) !important;
}

	
	#Ganadores > img {
	width: 100%;
    height: auto;	
	position: relative;
    top: -4px;	
	}
		
	#FAQ{
    width: 100%;
    height: auto;
    min-height: calc(43vw);
	display: inline-block;
	padding-top: 6%;
	}		
	
	#Footer{
    width: 100%;
    height: auto;
    min-height: calc(36.07vw);
    background-size: cover;
    background-position: bottom;	
	}	

	#Footer > #Izquierda {
		width: 36%;
		text-align: center;
	}

	#Footer > #Izquierda > img{
		width: 74%;
    margin-left: 7%;
    position: relative;
    bottom: calc(4.8vw *-1);
	
	}


	#Footer > #Derecha {
		width: 64%;
		float: right;
	}	
		
#Derecha > div{
	margin-right: 10%;
}


	#FAQ > div:nth-child(1) {
		float: left;
		width: 30%;
		padding-top: 65px;		
	}

	#FAQ > div:nth-child(1) > h2 {
		font-size: calc(2.23vw);
	}


		
	#FAQ > div:nth-child(2) {
		float: left;
		width: 70%;
	}		
	

	
	body > header > div:nth-child(3) > div:nth-child(2) > p {
	font-size: calc(1.696vw);
    padding-right: 10%;
    /* font-weight: 800; */
    font-family: berthold-akzidenz-grotesk-be-medium;
    letter-spacing: 0.12rem;
    line-height: calc(1.915vw);
    margin-bottom: 4%;
    color: #1A1A1A;
	}	

	body > header > div:nth-child(3) > div:nth-child(2) > p:nth-child(3) {
    margin-top: 11%;
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

	#FAQ > div:nth-child(1) > h2:nth-child(2){
	margin-top:0px;
	}	






	.ui-accordion .ui-accordion-header {
		background-color: #fff6e6;
    border: 0px;
    border-top: 3px solid red;
    font-size: 16px !important;
    font-weight: bold;
    text-align: left;
	color: #000000;
	margin: 0px 0 0 0;	
	font-family: 'Favorit';
	font-size: calc(1.696vw) !important;
	font-weight: 600;
	}	

	#accordion{
		margin-top: 13.5%;
		margin-right: 8%;		
	}

	.ui-widget-content {
	border: none !important;
    background: none !important;
    color: #333333 !important;
	padding: 0px !important;
	}

	.ui-widget-content > p:nth-child(1) {
    padding-top: 0px;
    margin-top: 3px;
    text-align: left;
    font-family: 'Favorit';
	font-size: calc(1.696vw);
	}

	.ui-widget-content > p {
    text-align: left;
	}	


#LinkBases{
	background-image: url(img/BOTON1.png);
    min-height: calc(9vw);
    min-width: calc(20.7vw);
    display: inline-block;
    background-size: contain;
    border: calc(2.5vw/10) solid red;
    margin-top: 6%;
	margin-right: 10%;
	margin-bottom: 10%;
}


#LinkBases:hover{
	background-image: url(img/BOTON1_OVER.png);
    border: calc(2.5vw/10) solid red;
}

	

#LinkPostula{
	background-image: url(img/BOTON2.png);
    min-height: calc(9vw);
    min-width: calc(27vw);
    display: inline-block;
    background-size: contain;
    border: calc(2.5vw/10) solid red;
    margin-top: 6%;
	margin-bottom: 10%;
}


#LinkPostula:hover{
	background-image: url(img/BOTON2_OVER.png);
    border: calc(2.5vw/10) solid red;
}

	

#Derecha > div > table > tbody > tr > td > a > img{
    max-height: calc(5.249vw);
    width: auto;
    margin-left: calc(1vw/5);
}


#Derecha > div > table {
	float: right;
}


.FPAM{
	margin-top: calc(4vw) !important;
	margin-right: 20%;
}

.FPAM > fieldset {
    border: calc(1vw/6) solid red;
    color: red;
	padding-left: calc(3vw);
}

.FPAM > fieldset > legend > img {
    height: calc(4.4vw)
    /* text-align: left; */
}




.frow{
width: 100%;
margin-right: 20%;
}

input + span{
    display: inline-block;
    width: 100%;
	color: #e9d9fc;
    font-size: calc(1.2vw);	
	min-height: calc(1.2vw);	
}

.frow > .c1{
width: 100%;
background-color: none;	
margin-bottom: calc(1.7vw);
}

.frow > .c1 > label{
width: 100%;
display: inline-block;
}

.frow > .c1 > label > img{
height: calc(1vw);
}

.frow > .c1 > input{
	width: calc(100% - 3vw);
    height: calc(3.3vw);
    /* border: none; */
    /* margin-right: calc(1vw); */
    /* border: 1px solid black; */
    /* margin-left: 16px; */
	border:none;
    margin-top: calc(0.4vw);
	font-size: calc(1.3vw);
	letter-spacing: 0.02rem;
	font-family: 'Akzidenz Grotesk BE Bold';
	font-weight: bold;
	border: calc(0.21vw) solid #ffffff;
}


.frow > .c1 > textarea{
 
    width: calc(100% - 3vw);
    height: calc(3.3vw);
    border: none;
    margin-top: calc(0.4vw);
    height: calc(13vw);
	font-size: calc(1.3vw);
letter-spacing: 0.02rem;
font-family: 'Akzidenz Grotesk BE Bold';
font-weight: bold;	
}







.frow > .c1 > span{
visibility: hidden;
margin-top: calc(0.5vw);
display: inline-block;
}	


.frow > .c2 > span{
visibility: hidden;
margin-top: calc(0.5vw);
display: inline-block;
}	



.frow > .c3 > span{
visibility: hidden;
margin-top: calc(0.5vw);
display: inline-block;
}	


.frow > .c1 > label{
	color: #010101;
    margin-bottom: 0px;
    text-align: left;
    font-size: calc(1.3vw);
    letter-spacing: 0.02rem;
    /* margin-top: 9%; */
	font-family: 'Akzidenz Grotesk BE Bold';
    font-weight: bold;
}



label{
	color: #010101;
    margin-bottom: 0px;
    text-align: left;
	font-family: 'Akzidenz Grotesk BE Bold';
    font-weight: bold;
	font-size: calc(1.3vw);
    letter-spacing: 0.02rem;
    /* margin-top: 9%; */
    font-weight: bold;
}










.frow > .c2{
width: 50%;
float: left;
background-color: none;	
margin-bottom: calc(1.7vw);
}

.frow > .c2 > label{
width: 100%;
display: inline-block;
font-family: 'Akzidenz Grotesk BE Bold';
font-weight: bold;
}

.frow > .c2 > label > img{
height: calc(1vw)
}

.frow > .c2 > input{
    width: calc(100% - 3vw);
    height: calc(3vw);
    border: none;
    /* margin-right: calc(1vw); */
    width: calc(100% - 3vw);
    height: calc(3.3vw);
    /* border: none; */
    /* margin-right: calc(1vw); */
    /* margin-left: 16px; */
    margin-top: calc(0.4vw);
	font-size: calc(1.3vw);
	letter-spacing: 0.02rem;
	font-family: 'Akzidenz Grotesk BE Bold';
	font-weight: bold;	
    border: calc(0.21vw) solid #ffffff;	
}

.frow > .c2 > span{
visibility: hidden;
margin-top: calc(0.5vw);
display: inline-block;
}	




.frow > .c2 > label{
width: 100%;
display: inline-block;
}

.frow > .c2 > label > img{
height: calc(1vw)
}

.frow > .c2 > input{
    width: calc(100% - 3vw);
    height: calc(3vw);
    border: none;
    /* margin-right: calc(1vw); */
    width: calc(100% - 3vw);
    height: calc(3.3vw);
    /* border: none; */
    /* margin-right: calc(1vw); */
    /* margin-left: 16px; */
    margin-top: calc(0.4vw);
	border: calc(0.21vw) solid #ffffff;
}

.frow > .c2 > span{
visibility: hidden;
}	



.frow > .c3{
margin-bottom: calc(1.7vw);
}


.frow > .c3:nth-child(1) {
    width: 100%;
}






.frow > .c3 > label {
	font-family: 'Akzidenz Grotesk BE Bold';
    font-weight: bold;
}


.frow > .c3 > label > img{
height: calc(1vw)
}

.frow > .c3:nth-child(2) {
    width: 100%;
}



.c3 > div > div:nth-child(1) {
    float: left;
    width: 50%;
}


.c3 > div > div:nth-child(2) {
    float: left;
    width: 50%;
}


.c3 > div > div:nth-child(2) > label > img {
	width: calc(100% - 3vw) !important;
    height: auto;
    cursor: pointer;
}

.c3 > div > div:nth-child(2) > input {
	display: none;
}






input[type="submit"] {
    background-color: #F0000C;
    font-size: calc(2vw);
    letter-spacing: calc(0.01vw);
    /* margin-top: 9%; */
    font-family: 'Akzidenz Grotesk BE Bold';
    font-weight: 100;
    color: #e9d9fc;
    height: calc(4vw);
    border: none;
    padding-left: calc(2vw);
    padding-right: calc(2vw);
	cursor:pointer;
}



input[type="submit"]:hover {
    background-color: #000000;
    color: #e9d9fc;
}






input[type="button"] {
    background-color: #F0000C;
    font-size: calc(2vw);
    letter-spacing: calc(0.01vw);
    /* margin-top: 9%; */
    font-family: 'Akzidenz Grotesk BE Bold';
    font-weight: 100;
    color: #e9d9fc;
    height: calc(4vw);
    border: none;
    padding-left: calc(2vw);
    padding-right: calc(2vw);
	cursor:pointer;
}



input[type="button"]:hover {
    background-color: #000000;
    color: #e9d9fc;
}



.ui-datepicker table {
    background-color: #fff6e6;
    width: 100%;
    font-size: .9em;
    border-collapse: collapse;
    margin: 0 0 0.4em;
}





.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}



.errorForm{
	color: #F0000C;
    text-align: left;
    font-family: 'Akzidenz Grotesk BE Bold';
    font-weight: bold;
    font-size: calc(1.2vw);
    letter-spacing: 0.02rem;
    font-weight: bold;
    visibility: visible !important;
    padding-left: calc(0.2vw);
    margin-top: calc(0.5vw);
    display: inline-block;
}

.errorInput{
	border: calc(0.21vw) solid #F0000C !important;
}	



header > nav > div > table > tbody > tr > td > a > img:hover {
    filter: grayscale(200%);
}

#Derecha > div > table > tbody > tr > td > a > img:hover {
	filter: grayscale(200%);
}



body > header > nav > div > table > tbody > tr > td:nth-child(5) > a > img {
    max-height: calc(1.249vw);
    width: auto;
}



/* tabletas */
@media (max-width: 768px) {



	body {
	  position: relative
	}

  
	h1{
		margin-left: 5%;

    letter-spacing: calc(0.01vw);
    font-size: calc(6.3vw);
    line-height: calc(5.5vw);

	}


	h2{
		margin-left: 5%;
		letter-spacing: calc(0.3vw);
	}

	.presentan{
display: none;
	}
 
 .contenido{
 width: 100%;
 }


 body > header > nav > div > table > tbody > tr > td:nth-child(5) > a > img {
    max-height: calc(2.249vw);
    width: auto;
	display: none;
}


 .FPAM {
    margin-top: calc(4vw) !important;
    margin-right: 0%;
}

.frow {
    width: 100%;
    margin-right: 0%;
}


.FPAM > fieldset {
    border: none;
    padding-left: 0px;
    padding-right: 0px;
    margin: 0px;
    margin-left: 5%;
    margin-right: 4%;
}


.frow > .c1 {
    width: 100%;
    margin-bottom: 0%;

}

.frow > .c2 {
    width: 100%;
    float: left;
    background-color: none;
    margin-bottom: 0%;
}


.frow > .c1 > input {
    height: calc(4.3vw);
	font-size: calc(2.3vw);
}


.frow > .c2 > input {
    height: calc(4.3vw);
	font-size: calc(2.3vw);
}


.frow > .c3 > input {
    height: calc(4.3vw);
	font-size: calc(2.3vw);
}



.frow > .c1 > label {
    font-size: calc(2.3vw);
}


.frow > .c2 > label {
    font-size: calc(2.3vw);
}


.frow > .c3 > label {
    font-size: calc(2.3vw);
}


.FPAM > fieldset > legend > img {
    height: unset;
    width: 50%;
}



input[type="submit"] {
    width: 100%;
    font-size: calc(4vw);
    height: calc(8vw);
}


#IMG_FOTOGRAFIA_RETRATO{
    max-width: 50%;
}




#F01 > div:nth-child(1){
    float: right !important;
    width: 50%;
}

#F02 > div:nth-child(1){
    float: right !important;
    width: 50%;
}

#F03 > div:nth-child(1){
    float: right !important;
    width: 50%;
}


header > nav > div > table > tbody > tr > td > a > img {
    max-height: calc(10vw);
    width: auto;
    margin-left: calc(1vw/5);
}


body > header > nav > div > table {
		float: left;
		padding-left: 5%;
}

.ui-widget-content > p{
	font-size: calc(2.3vw) !important;
	}





	#body > div > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button{
		letter-spacing: calc(0.01vw);
	}




}

/* escritorio normales */
@media (min-width: 992px) {
  body { }
}

/* pantallas grandes */
@media (min-width: 1200px) {
  body {  }
}




#body > div > div.ui-dialog-titlebar.ui-corner-all.ui-widget-header.ui-helper-clearfix.ui-draggable-handle {
    background-color: #e9d9fc;
    border-bottom: calc(0.21vw) solid #F0000C !important;
}


.ui-dialog-title{
	color: #F0030D;
    /* margin-bottom: 0px; */
    text-align: left;
    font-family: 'Akzidenz Grotesk BE Bold';
    font-size: calc(1.9vw);
}



.ui-dialog .ui-dialog-content {
    background-color: #fff6e6 !important;
    background-color: #e9d9fc;
  /*   border-left: calc(0.21vw) solid #F0000C !important;
    border-right: calc(0.21vw) solid #F0000C !important;
    border-bottom: calc(0.21vw) solid #F0000C !important; */
    padding: calc(2vw) !important;
    text-align: left;
    font-family: 'Akzidenz Grotesk BE Bold';
    font-size: calc(1.9vw);
    letter-spacing: 0.015rem;
    /* margin-top: 8.3%; */
    color: black !important;
}


.ui-dialog{
	min-width: 375px !important;
}

.ui-widget-content {
	background-color: #fff6e6 !important;
  /*  border-bottom: calc(0.21vw) solid #F0000C !important; */
  
    /* margin-top: 8.3%; */
    color: black !important;	
}

.ui-dialog {
    border:calc(0.21vw) solid #F0000C !important;
}


.ui-widget-content {
    /*border: calc(0.21vw) solid #d62c2c !important;*/
    background: #fff6e6 !important;
    color: #333333;
}


#body > div > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button{
	background-color: #F0000C;
    font-size: calc(2vw);
    letter-spacing: calc(0.4vw);
    /* margin-top: 9%; */
    font-family: 'Akzidenz Grotesk BE Bold';
    font-weight: 100;
    color: #e9d9fc;
    height: calc(4vw);
    border: none;
    padding-left: calc(2vw);
    padding-right: calc(2vw);
    cursor: pointer;
}

#body > div > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:hover{
	background-color: #000000;
    color: #e9d9fc;
}




img.lazy {
        width: 100%; 
        height: auto; 
        display: block;
    }
	


	</style>
	



	<link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
	<script>


function ImgResponsive(){
	
	tam = $(window).width();

	console.log('tamaño: '+tam);



}


	$( function() {

	  $(window).resize(function(){	ImgResponsive(); });
	  ImgResponsive();
	} );
	</script>


</head>

<body id="body" wfd-invisible="true">
	
 
	
  	<header>
		<nav>
			<div class="icons">

				<table><tbody><tr>
			<td><a href="mailto:premiopam@antenna.cl" target="_blank"><img src="img/RRSS.png" alt="Correo premiopam@antenna.cl"></a></td>
			<td><a href="https://www.instagram.com/antennaorg" target="_blank"><img src="img/RRSS_IG.png" alt="Instagram"></a></td>
			<td><a href="https://www.facebook.com/antennaorg" target="_blank"><img src="img/RRSS_FACEBOOK.png" alt="facebook"></a></td>
			<td><a href="https://www.linkedin.com/in/fundacionantenna" target="_blank"><img src="img/RRSS_LINKEDIN.png" alt=""></a></td>
			<td><a href="" target="_blank"><img style="max-height: calc(1.249vw);	width: auto;" src="img/HASHTAG.png" alt="" wfd-invisible="true"></a></td>

			</tr></tbody></table>
			</div>	
		</nav>
        
		
		
			
		<div style="background-color:#E9D9FC;position: relative;top: -4px; display: inline-block; ">
			<div style="" class="cuerpo presentan" wfd-invisible="true">
			
			<img style="width: 60%;margin-top: 17%;margin-left: 14%;" src="img/LOGOS.png">
			
			</div> 
			<div style="" class="cuerpo contenido"> 
			
			<h2>VOTACIÓN PREMIO PAM 2022</h2>
<h1>Complete la siguiente <br>
información.</h1>
				
				<p style="margin-left: 5%;
    letter-spacing: calc(0.3vw);
    color: #000000;
    margin-bottom: 0px;
    text-align: left;
    font-family: 'Akzidenz Grotesk BE Bold';
    font-size: calc(2.2vw);
    letter-spacing: 0.025rem;
    margin-top: 8.3%;
">
				Para asegurar un voto por persona debe registrar su email, su ip de conección tambien será recordada, se puede votar solo por una persona una única vez.
				</p>
	 
 
 
 
 
 
 


<?php


$sql = "SELECT * FROM `postulaciones_pam` ORDER BY RAND() limit 10 ";


 


$mysqli = new mysqli("localhost", "premiopam_2023", "Nescar88++", "premiopam_2023");

//$mysqli->query("SET NAMES 'utf8'");
 
$result = $mysqli->query($sql);

 

while($row=$result->fetch_array()) {
extract($row);

?>

 <form class="FPAM" id="FPAM" target="IA" method="post" enctype="multipart/form-data" action="GuardaFormulario.php">



<fieldset>
	<legend>N ° Postulaci&oacute;n <?php echo $ID_POSTULACION; ?></legend>

	<div class="frow">

		<div class="c1">
			<label>TITULO DE OBRA:</label>
			<label><b><?php echo $TITULO_DE_OBRA; ?></b></label>
		</div>

	</div>

 	


	
	<div class="frow">

		<div class="c2">
			<label>DIMENCIONES:</label>
			<label><?php echo $DIMENCIONES; ?></label>
		</div>	


		<div class="c2">
			<label>FECHA_CREACION:</label>
			<label><?php echo $FECHA_CREACION; ?></label>
		</div>
	 
	</div>	
	
	

	
	<div class="frow">

		<div class="c1">
			<label>TECNICA:</label>
			<label><?php echo $TECNICA; ?></label>
		</div>	
  
	</div>	


	
	<div class="frow">

		<div class="c1">
			<label>STATEMENT:</label>
			<label><?php echo $TECNICA; ?></label>
		</div>	
  
	</div>	



	
	<div class="frow">

		<div class="c1">
			<label>STATEMENT:</label>
			<label><?php echo $STATMENT; ?></label>
		</div>	
  
	</div>	



	<div class="frow">

		<div class="c1">
			<label>FOTOGRAFIA:</label>
			
			
			<img class="lazyload" data-src="/media/<?php echo $ID_POSTULACION; ?>/<?php echo $FOTO_SELECCION; ?>.jpg" />
			
		</div>	
  
	</div>		
	



</fieldset>

<fieldset>
	
 
		

	<input type="button" onclick="ValidarFomulario();" value="VOTAR POR ESTA OBRA">


</fieldset>




			 </form>			 
			
<?php } ?>
			 

<div style="clear: both;"></div>

			</div> 
		</div>

 
		
		
		

		
		<div id="Footer">

<div id="Izquierda">

	<img src="img/LOGO_FOOTER.png">

</div>

<div id="Derecha">

	<div class="icons">

	<table><tbody><tr>
	<td><a href="mailto:premiopam@antenna.cl" target="_blank"><img src="img/RRSS.png" alt="Correo premiopam@antenna.cl"></a></td>
	<td><a href="https://www.instagram.com/antennaorg" target="_blank"><img src="img/RRSS_IG.png" alt="Instagram"></a></td>
	<td><a href="https://www.facebook.com/antennaorg" target="_blank"><img src="img/RRSS_FACEBOOK.png" alt="facebook"></a></td>
	<td><a href="https://www.linkedin.com/in/fundacionantenna" target="_blank"><img src="img/RRSS_LINKEDIN.png" alt=""></a></td>
	<td><a href="" target="_blank"><img style="max-height: calc(1.249vw);	width: auto;" src="img/HASHTAG.png" alt=""></a></td>

	</tr></tbody></table>
	</div>

</div>


		</div>
		
		
		
		
    </header>    
  
    <section> 
		

		
    </section>
  
 <iframe name="IA" width="1px" height="1px" style="visibility:hidden;"></iframe>

<script src="waitMe.js" wfd-invisible="true"></script>



<script wfd-invisible="true">



function ValidarFomulario(){

errores=0;

//NOMBRE_APELLLIDO
NOMBRE_APELLLIDO = $('#NOMBRE_APELLLIDO').val();

if(NOMBRE_APELLLIDO.length>5){
	$('#NOMBRE_APELLLIDO + span').html('Ok');
	$('#NOMBRE_APELLLIDO + span').removeClass('errorForm');
	$('#NOMBRE_APELLLIDO').removeClass('errorInput');

}else{
	errores++;
	$('#NOMBRE_APELLLIDO + span').html('Ingrese su nombre completo.');
	$('#NOMBRE_APELLLIDO + span').addClass('errorForm');
	$('#NOMBRE_APELLLIDO').addClass('errorInput');

	
}


//EDAD
EDAD = $('#EDAD').val();

if(EDAD>=60){
	$('#EDAD + span').html('Ok');
	$('#EDAD + span').removeClass('errorForm');
	$('#EDAD').removeClass('errorInput');
}else{
	errores++;
	$('#EDAD + span').html('Debe tener 60 años o m&aacute;s.');
	$('#EDAD + span').addClass('errorForm');
	$('#EDAD').addClass('errorInput');
}


//FECHA_DE_NACIMIENTO
FECHA_DE_NACIMIENTO = $('#FECHA_DE_NACIMIENTO').val();

let isValidDate = Date.parse(FECHA_DE_NACIMIENTO);

if(FECHA_DE_NACIMIENTO.length==10){
	$('#FECHA_DE_NACIMIENTO + span').html('Ok');
	$('#FECHA_DE_NACIMIENTO + span').removeClass('errorForm');
	$('#FECHA_DE_NACIMIENTO').removeClass('errorInput');
}else{
	errores++;
	$('#FECHA_DE_NACIMIENTO + span').html('Debe ingresar una fecha v&aacute;lida.');
	$('#FECHA_DE_NACIMIENTO + span').addClass('errorForm');
	$('#FECHA_DE_NACIMIENTO').addClass('errorInput');
}

//TELEFONO
TELEFONO = $('#TELEFONO').val();

if(TELEFONO.length>=5){
	$('#TELEFONO + span').html('Ok');
	$('#TELEFONO + span').removeClass('errorForm');
	$('#TELEFONO').removeClass('errorInput');
}else{
	errores++;
	$('#TELEFONO + span').html('Debe ingresar su número de teléfono.');
	$('#TELEFONO + span').addClass('errorForm');
	$('#TELEFONO').addClass('errorInput');
}


//NACIONALIDAD
NACIONALIDAD = $('#NACIONALIDAD').val();

if(NACIONALIDAD.length>=2){
	$('#NACIONALIDAD + span').html('');
	$('#NACIONALIDAD').removeClass('errorInput');
}else{
	errores++;
	$('#NACIONALIDAD + span').html('Debe ingresar su nacionalidad.');
	$('#NACIONALIDAD + span').addClass('errorForm');
	$('#NACIONALIDAD').addClass('errorInput');
}


//EMAIL
EMAIL = $('#EMAIL').val();

if(validateEmail(EMAIL)){
	$('#EMAIL + span').html('Ok');
	$('#EMAIL + span').removeClass('errorForm');
	$('#EMAIL').removeClass('errorInput');
}else{
	errores++;
	$('#EMAIL + span').html('Debe ingresar un email v&aacute;lido.');
	$('#EMAIL + span').addClass('errorForm');
	$('#EMAIL').addClass('errorInput');
}
 

//REMAIL
REMAIL = $('#REMAIL').val();

if(REMAIL == EMAIL){
	$('#REMAIL + span').html('Ok');
	$('#REMAIL + span').removeClass('errorForm');
	$('#REMAIL').removeClass('errorInput');
}else{
	errores++;
	$('#REMAIL + span').html('Los correos deben coincidir.');
	$('#REMAIL + span').addClass('errorForm');
	$('#REMAIL').addClass('errorInput');
}


//BIOGRAFIA
BIOGRAFIA = $('#BIOGRAFIA').val();

if(BIOGRAFIA.length>=5){
	$('#BIOGRAFIA + span').html('Ok');
	$('#BIOGRAFIA + span').removeClass('errorForm');
	$('#BIOGRAFIA').removeClass('errorInput');
}else{
	errores++;
	$('#BIOGRAFIA + span').html('Debe ingresar su biograf&iacute;a del artista.');
	$('#BIOGRAFIA + span').addClass('errorForm');
	$('#BIOGRAFIA').addClass('errorInput');
}


 



//LUGAR_RESIDENCIA
LUGAR_RESIDENCIA = $('#LUGAR_RESIDENCIA').val();

if(LUGAR_RESIDENCIA.length>=5){
	$('#LUGAR_RESIDENCIA + span').html('Ok');
	$('#LUGAR_RESIDENCIA + span').removeClass('errorForm');
	$('#LUGAR_RESIDENCIA').removeClass('errorInput');
}else{
	errores++;
	$('#LUGAR_RESIDENCIA + span').html('Debe ingresar su lugar de residencia.');
	$('#LUGAR_RESIDENCIA + span').addClass('errorForm');
	$('#LUGAR_RESIDENCIA').addClass('errorInput');
}

 

//FOTOGRAFIA_RETRATO
FOTOGRAFIA_RETRATO = $('#FOTOGRAFIA_RETRATO').val();

if(FOTOGRAFIA_RETRATO.length>=5){
	$('#FOTOGRAFIA_RETRATO + span').html('Ok');
	$('#FOTOGRAFIA_RETRATO + span').removeClass('errorForm');
	$('#FOTOGRAFIA_RETRATO').removeClass('errorInput');
}else{
	errores++;
	$('#FOTOGRAFIA_RETRATO + span').html('Debe seleccionar una fotograf&iacute;a en formato JPG del artista.');
	$('#FOTOGRAFIA_RETRATO + span').addClass('errorForm');
	$('#FOTOGRAFIA_RETRATO').addClass('errorInput');
}



//TITULO_DE_OBRA
TITULO_DE_OBRA = $('#TITULO_DE_OBRA').val();

if(TITULO_DE_OBRA.length>=5){
	$('#TITULO_DE_OBRA + span').html('Ok');
	$('#TITULO_DE_OBRA + span').removeClass('errorForm');
	$('#TITULO_DE_OBRA').removeClass('errorInput');
}else{
	errores++;
	$('#TITULO_DE_OBRA + span').html('Debe ingresar el titulo de la obra.');
	$('#TITULO_DE_OBRA + span').addClass('errorForm');
	$('#TITULO_DE_OBRA').addClass('errorInput');
}




//DIMENCIONES
DIMENCIONES = $('#DIMENCIONES').val();

if(DIMENCIONES.length>=5){
	$('#DIMENCIONES + span').html('Ok');
	$('#DIMENCIONES + span').removeClass('errorForm');
	$('#DIMENCIONES').removeClass('errorInput');
}else{
	errores++;
	$('#DIMENCIONES + span').html('Debe ingresar dimenciones de la obra.');
	$('#DIMENCIONES + span').addClass('errorForm');
	$('#DIMENCIONES').addClass('errorInput');
}




//FECHA_CREACION
FECHA_CREACION = $('#FECHA_CREACION').val();

if(FECHA_CREACION.length==10){

	$('#FECHA_CREACION + span').html('Ok');
	$('#FECHA_CREACION + span').removeClass('errorForm');
	$('#FECHA_CREACION').removeClass('errorInput');
}else{
	errores++;
	$('#FECHA_CREACION + span').html('Debe ingresar fecha creación de la obra.');
	$('#FECHA_CREACION + span').addClass('errorForm');
	$('#FECHA_CREACION').addClass('errorInput');
}




//TECNICA
TECNICA = $('#TECNICA').val();

if(TECNICA.length>=5){
	$('#TECNICA + span').html('');
	$('#TECNICA + span').removeClass('errorForm');
	$('#TECNICA').removeClass('errorInput');
}else{
	errores++;
	$('#TECNICA + span').html('Debe ingresar la t&eacute;cnica empleada en la obra.');
	$('#TECNICA + span').addClass('errorForm');
	$('#TECNICA').addClass('errorInput');
}


//STATMENT
STATMENT = $('#STATMENT').val();

if(STATMENT.length>=5){
	$('#STATMENT + span').html('Ok');
	$('#STATMENT + span').removeClass('errorForm');
	$('#STATMENT').removeClass('errorInput');
}else{
	errores++;
	$('#STATMENT + span').html('Debe ingresar descripci&oacute;n de obra.');
	$('#STATMENT + span').addClass('errorForm');
	$('#STATMENT').addClass('errorInput');
}


//FOTOGRAFIA_OBRA_1
FOTOGRAFIA_OBRA_1 = $('#FOTOGRAFIA_OBRA_1').val();
FOTOGRAFIA_OBRA_2 = $('#FOTOGRAFIA_OBRA_2').val();
FOTOGRAFIA_OBRA_3 = $('#FOTOGRAFIA_OBRA_3').val();


FOTOGRAFIA_OBRA_1 = FOTOGRAFIA_OBRA_1.toUpperCase();
FOTOGRAFIA_OBRA_2 = FOTOGRAFIA_OBRA_2.toUpperCase();
FOTOGRAFIA_OBRA_3 = FOTOGRAFIA_OBRA_3.toUpperCase();


if((FOTOGRAFIA_OBRA_1.split(".").pop()=='JPG' || FOTOGRAFIA_OBRA_1.split(".").pop()=='JPEG') || (FOTOGRAFIA_OBRA_2.split(".").pop()=='JPG' || FOTOGRAFIA_OBRA_2.split(".").pop()=='JPEG') || (FOTOGRAFIA_OBRA_3.split(".").pop()=='JPG' || FOTOGRAFIA_OBRA_3.split(".").pop()=='JPEG')){
	$('#ErrorFotografiasObra').html('');
}else{
	errores++;
	$('#ErrorFotografiasObra').html('Debe cargar al menos una fotografía de su obra en formato JPG.');
}

 
 
if(errores==0){
	$( "#dialog3" ).dialog( "open" );
	return true;
}else{
	$( "#dialog" ).dialog( "open" );
	return false;
}


}



 


function validateEmail(email) {

    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) ){
		return false;	
	}else{
		return true;	
	}

}


	function Cargando(){
		run_waitMe($('* > header'), 1, 'bouce');
	}


	function run_waitMe(el, num, effect){
			text = 'Enviando su postulación..';
			fontSize = '';
			switch (num) {
				case 1:
				maxSize = '';
				textPos = 'vertical';
				break;
				case 2:
				text = '';
				maxSize = 30;
				textPos = 'vertical';
				break;
				case 3:
				maxSize = 30;
				textPos = 'horizontal';
				fontSize = '18px';
				break;
			}
			el.waitMe({
				effect: effect,
				text: text,
				bg: 'rgba(255,255,255,0.7)',
				color: '#000',
				maxSize: maxSize,
				waitTime: -1,
				source: 'img.svg',
				textPos: textPos,
				fontSize: fontSize,
				onClose: function(el) {}
			});
		}



	$(function(){
	 


	$( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      },
	  width: "40%",
	  buttons: {
        'ENTIENDO': function() {
          $( this ).dialog( "close" );
        }
      }
    });



	$( "#dialog2" ).dialog({
      autoOpen: false,
	  modal: true,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      },
	  width: "42%"
    });	



	
	$( "#dialog3" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      },
	  width: "52%",
	  buttons: {
        'SI, CONFIRMO ENVÍO': function() {
          $( this ).dialog( "close" );
		  Cargando();
		  $('#FPAM').submit();

        },
		'NO, VOLVER AL FORMULARIO': function() {
          $( this ).dialog( "close" );
        }
      }
    });






		$('#enviar').click(function(){
			run_waitMe($('* > header'), 1, 'bouce');
			console.log('Enviarrrrrrr cargando');
		});
		
	 
		function run_waitMe(el, num, effect){
			text = 'Enviando su postulación..';
			fontSize = '';
			switch (num) {
				case 1:
				maxSize = '';
				textPos = 'vertical';
				break;
				case 2:
				text = '';
				maxSize = 30;
				textPos = 'vertical';
				break;
				case 3:
				maxSize = 30;
				textPos = 'horizontal';
				fontSize = '18px';
				break;
			}
			el.waitMe({
				effect: effect,
				text: text,
				bg: 'rgba(255,255,255,0.7)',
				color: '#000',
				maxSize: maxSize,
				waitTime: -1,
				source: 'img.svg',
				textPos: textPos,
				fontSize: fontSize,
				onClose: function(el) {}
			});
		}
		
	 
		
		function run_waitMe_body(effect){
			$('body').addClass('waitMe_body');
			var img = '';
			var text = '';
			if(effect == 'img'){
				img = 'background:url(\'img.svg\')';
			} else if(effect == 'text'){
				text = 'Loading..'; 
			}
			var elem = $('<div class="waitMe_container ' + effect + '"><div style="' + img + '">' + text + '</div></div>');
			$('body').prepend(elem);
			
			setTimeout(function(){
				$('body.waitMe_body').addClass('hideMe');
				setTimeout(function(){
					$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
					$('body.waitMe_body').removeClass('waitMe_body hideMe');
				},200);
			},4000);
		}
		
	});


	function Confirmacion(){

		$('#body > div:nth-child(7) > div.ui-dialog-titlebar.ui-corner-all.ui-widget-header.ui-helper-clearfix.ui-draggable-handle').hide();
		$('#dialog2').attr('style','padding: 0px !important');
		$( "#dialog2" ).dialog( "open" );

	}

	function CerrarConfirmacion(){
		$('#dialog2').dialog('close');
		setTimeout(function() {
			window.parent.location.href='index.html';
		}, 1000);
	}



lazyload();



	</script>




	



	



<div tabindex="-1" role="dialog" class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front ui-dialog-buttons ui-draggable ui-resizable" aria-describedby="dialog" aria-labelledby="ui-id-1" style="display: none; position: absolute;" wfd-invisible="true"><div class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix ui-draggable-handle"><span id="ui-id-1" class="ui-dialog-title">ERRORES EN SU POSTULACIÓN</span><button type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close" title="Close"><span class="ui-button-icon ui-icon ui-icon-closethick"></span><span class="ui-button-icon-space"> </span>Close</button></div><div id="dialog" class="ui-dialog-content ui-widget-content"><p>Existen problemas en el formulario que debe correjir antes de volver a enviar su postulación.</p></div><div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"><div class="ui-dialog-buttonset"><button type="button" class="ui-button ui-corner-all ui-widget">ENTIENDO</button></div></div><div class="ui-resizable-handle ui-resizable-n" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-w" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-sw" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-ne" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-nw" style="z-index: 90;"></div></div><div tabindex="-1" role="dialog" class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front ui-draggable ui-resizable" aria-describedby="dialog2" aria-labelledby="ui-id-2" style="display: none; position: absolute;" wfd-invisible="true"><div class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix ui-draggable-handle"><span id="ui-id-2" class="ui-dialog-title">ERRORES EN SU POSTULACIÓN</span><button type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close" title="Close"><span class="ui-button-icon ui-icon ui-icon-closethick"></span><span class="ui-button-icon-space"> </span>Close</button></div><div id="dialog2" class="ui-dialog-content ui-widget-content">
		<img style="width:100%" src="img/POPUP_CONFIRMACION-02.png">
		<div style="position: absolute;top: 2%;right: 1%;width: 100%;text-align: right;">
			<img style="width: 10%;cursor: pointer;" src="img/cerrar.png" onclick="CerrarConfirmacion();">
		</div>
	</div><div class="ui-resizable-handle ui-resizable-n" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-w" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-sw" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-ne" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-nw" style="z-index: 90;"></div></div><div tabindex="-1" role="dialog" class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front ui-dialog-buttons ui-draggable ui-resizable" aria-describedby="dialog3" aria-labelledby="ui-id-3" style="display: none; position: absolute;" wfd-invisible="true"><div class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix ui-draggable-handle"><span id="ui-id-3" class="ui-dialog-title">CONFIRMACIÓN DE ENVIO</span><button type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close" title="Close"><span class="ui-button-icon ui-icon ui-icon-closethick"></span><span class="ui-button-icon-space"> </span>Close</button></div><div id="dialog3" class="ui-dialog-content ui-widget-content"><p>¿Esta segura que desea enviar su postulación?</p></div><div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"><div class="ui-dialog-buttonset"><button type="button" class="ui-button ui-corner-all ui-widget">SI, CONFIRMO ENVÍO</button><button type="button" class="ui-button ui-corner-all ui-widget">NO, VOLVER AL FORMULARIO</button></div></div><div class="ui-resizable-handle ui-resizable-n" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-w" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-sw" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-ne" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-nw" style="z-index: 90;"></div></div><div></div></body></html>