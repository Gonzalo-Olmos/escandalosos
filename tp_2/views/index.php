<?php include_once("common/header.php"); ?>

<div class="row mx-md-3" style="margin-top: 100px;">
  <div class="col-md-6">
    <button id="cambiarVista_negro" class="btn btn-dark">Dark</button>
    <button id="cambiarVista_blanco" class="btn btn-light" style="display:none;">Light</button>
  </div>
</div>
<!--Consigna de tp  2.2 -->
<div class="row mx-md-3" id="seccion1">
  <h1 class="display-5 fw-bold"> Seccion 1</h1>
  <?php include_once("./seccion_1.php"); ?>
  
</div>
<hr>
<div class="row mx-md-3" id="seccion2">
<h1 class="display-5 fw-bold"> Seccion 2 </h1>
    <?php include_once("./seccion_2.php"); ?>
</div>

<div class="row mx-md-3">
  
<!-- <h1> Seccion 3 </h1>
    <?php include_once("./seccion_3.php"); ?>
</div>
 -->

<!--Consigna convinada de tp  2.3 y 2.1-->
<div class="row mx-md-3" id="seccion4">
  <h1 class="display-5 fw-bold"> Formulario de Competidor </h1>
    <?php include_once("./seccion_4.php"); ?>
</div>
<hr>
<!--Consigna convinada de tp  2.3-->
<div class="row mx-md-3" id="seccion5">
  <h1 class="display-5 fw-bold"> Competidores </h1>
    <?php // include_once("./seccion_5.php"); ?>
</div>
<hr>
<!--Consigna de tp  2.3 -->
<div class="row mx-md-3" id="seccion6">
  <h1 class="display-5 fw-bold"> Imagenes </h1>
    <?php include_once("./seccion_6.php"); ?>
</div>
<hr>
<!--Consigna de tp  2.1 -->
<div class="row mx-md-3 mx-auto" id="competidores"  style="margin-bottom: 100px;" >
</div>

<?php include_once("common/footer.php"); ?>