<?php include_once("common/header.php"); ?>

<div class="row mx-md-5 mx-auto" style="margin-top:100px;margin-bottom:200px">
  <form class="row g-3" id="competidorForm" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">GAL (Global Athletic License)</label>
    <input type="text" class="form-control form-competidor" id="validationCustom01"  pattern="^[a-zA-Z]{3}[0-9]{7}$" value="" maxlength="10" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un GAL valido (Ejemplo: AAA1234567).
    </div>
  </div> 
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Apellido</label>
    <input type="text" class="form-control form-competidor" id="validationCustom02" value="" maxlength="100" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un apellido valido.
    </div>
  </div> 

  <div class="col-md-4">
    <label for="validationCustom03" class="form-label">Nombre</label>
    <input type="text" class="form-control form-competidor" id="validationCustom03" value="" maxlength="100" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un nombre valido.
    </div>
  </div>
 
  
  <div class="col-md-4">
    <label for="validationCustom10" class="form-label">DU</label>
    <input type="text" class="form-control form-competidor" id="validationCustom10" value="" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un DU valido.
    </div>
  </div>

  <div class="col-md-4">
    <label for="validationCustom10" class="form-label">Fecha de nacimiento</label>
    <input type="date" class="form-control form-competidor" id="validationCustom10" value="" min="1953-01-01" max="<?php echo date('Y-m-d',strtotime('- 6 year'.date('Y-m-d'))); ?>" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar una fecha de nacimiento válida.
    </div>
  </div>

  <div class="col-md-4">
    <label for="paisOrigen" class="form-label">Pais de Origen</label>
    <select class="form-select form-competidor" id="paisOrigen" required>
      <option selected disabled value="">Seleccionar Pais de Origen</option>
    </select>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe seleccionar un pais valido.
    </div>
  </div>

  <div class="col-md-4">
    <label for="validationCustom04" class="form-label">Graduación</label>
    <select class="form-select form-competidor" id="validacionCustom05" required>
      <option selected disabled value="">Seleccionar Graduación</option>
      <option value="1ro GUP">1ro GUP</option>
      <option value="2do GUP">2do GUP</option>
      <option value="3ro GUP">3ro GUP</option>
      <option value="4to GUP">4to GUP</option>
      <option value="5to GUP">5to GUP</option>
      <option value="6to GUP">6to GUP</option>
      <option value="7mo GUP">7mo GUP</option>
      <option value="8vo GUP">8vo GUP</option>
      <option value="9no GUP">9no GUP</option>
      <option value="10mo GUP">10mo GUP</option>
      <option value="1ro DAN">1ro DAN</option>
      <option value="2do DAN">2do DAN</option>
      <option value="3ro DAN">3ro DAN</option>
      <option value="4to DAN">4to DAN</option>
      <option value="5to DAN">5to DAN</option>
      <option value="6to DAN">6to DAN</option>
      <option value="7mo DAN">7mo DAN</option>
      <option value="8vo DAN">8vo DAN</option>
      <option value="9no DAN">9no DAN</option>
    </select>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar una graducion valida.
    </div>
  </div>

  <div class="col-md-4">
    <label for="validationCustom06" class="form-label">Clasificación General Nacimiento</label>
    <input type="number" class="form-control form-competidor" id="validationCustom06" min="0" max="900" value="" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un nacimiento valido (1-900).
    </div>
  </div>

  <div class="col-md-4">
    <label for="validationCustom07" class="form-label">Email</label>
    <input type="email" class="form-control form-competidor" id="validationCustom07" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" value="" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un mail valido.
    </div>
  </div>

  <div class="col-md-4">
    <label for="validationCustom08" class="form-label">Genero</label>
    <select class="form-select form-competidor" id="validationCustom08" required>
      <option selected disabled value="">Seleccionar Genero</option>
      <option value="Femenino"> Femenino </option>
      <option value="Masculino"> Masculino </option>
    </select>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe seleccionar un genero.
    </div>
  </div>

    <div class="col-12">
      <input type="submit" class="btn btn-primary">
    </div>
  </form>

  <div class="row">
    <div class="col-12 col-lg-6 col-xl-3 mx-auto mt-4" id="resultado"></div>
  </div>
</div>
<script src="../assets/js/cargarCompetidor.js"></script>
<script src="../assets/js/paisesAceptados.js"></script>

<?php include_once("common/footer.php"); ?>