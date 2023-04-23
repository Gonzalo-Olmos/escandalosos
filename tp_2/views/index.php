<?php include_once("common/header.php"); ?>

<div class="row" style="margin-top:100px">
    <div class="col-12 text-center mb-5">
        <a href="cargar_competidor.php" class="btn btn-primary">Cargar Competidor</a>
    </div>
</div>
<div class="row mx-md-3 mx-auto" id="competidores" style="margin-bottom:200px">
</div>

<div class="row mx-md-3">
  <h1> Competidores </h1>
    <?php include_once("./seccion_5_tabla_competidores.php"); ?>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="exampleModalBody">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div id="test" class="row justify-content-center gap-3" style="margin-bottom: 200px;"></div>



<?php include_once("common/footer.php"); ?>