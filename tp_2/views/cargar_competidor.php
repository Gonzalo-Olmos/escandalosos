<?php include_once("common/header.php"); ?>

<div class="row mx-md-5 mx-auto" style="margin-top:100px;margin-bottom:200px">
  <form action="" class="row g-3" id="competidorForm" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">GAL (Global Athletic License)</label>
    <input name="gal" type="text" class="form-control form-competidor" id="validationCustom01"  pattern="^[a-zA-Z]{3}[0-9]{7}$" value="" maxlength="10" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un GAL valido (Ejemplo: AAA1234567).
    </div>
  </div> 
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Apellido</label>
    <input name="apellido" type="text" class="form-control form-competidor" id="validationCustom02" value="" maxlength="100" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un apellido valido.
    </div>
  </div> 

  <div class="col-md-4">
    <label for="validationCustom03" class="form-label">Nombre</label>
    <input name="nombre" type="text" class="form-control form-competidor" id="validationCustom03" value="" maxlength="100" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un nombre valido.
    </div>
  </div>
 
  
  <div class="col-md-4">
    <label for="validationCustom10" class="form-label">DU (Documento Único)</label>
    <input name="du" type="text" class="form-control form-competidor" id="validationCustom10" value="" pattern="^[\d]{1,3}[\d]{3,3}[\d]{3,3}$" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un número de documento único válido.
    </div>
  </div>

  <div class="col-md-4">
    <label for="validationCustom10" class="form-label">Fecha de nacimiento</label>
    <input name="fechaNac" type="date" class="form-control form-competidor" id="validationCustom10" value="" min="1953-01-01" max="<?php echo date('Y-m-d',strtotime('- 6 year'.date('Y-m-d'))); ?>" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar una fecha de nacimiento válida.
    </div>
  </div>

  <div class="col-md-4">
    <label for="paisOrigen" class="form-label">Pais de Origen</label>
    <input type='text' class="form-control tt-input" name="estado" id="estado"
    placeholder='estado'>
    <input type='hidden' name="id_estado" id="id_estado">
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe seleccionar un pais valido.
    </div>
  </div>

  <div class="col-md-4">
    <label for="validationCustom04" class="form-label">Graduación</label>
    <select name="graduacion" class="form-select form-competidor" id="validacionCustom05" required>
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
    <label for="validationCustom06" class="form-label">Clasificación General</label>
    <input name="clasificacionGral" type="number" class="form-control form-competidor" id="validationCustom06" min="0" max="900" step="0.01" value="" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un nacimiento valido (1-900).
    </div>
  </div>

  <div class="col-md-4">
    <label for="validationCustom07" class="form-label">Email</label>
    <input name="email" type="text" class="form-control form-competidor" id="validationCustom07" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" value="" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un mail valido.
    </div>
  </div>

  <div class="col-md-4">
    <label for="validationCustom08" class="form-label">Genero</label>
    <select name="genero" class="form-select form-competidor" id="validationCustom08" required>
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
      <button type="submit" class="btn btn-primary">Enviar</button>
    </div>
  </form>

  <div class="row justify-content-center">
    <div class="mt-4" id="resultado"></div>
  </div>
</div>

<?php include_once("common/footer.php"); ?>