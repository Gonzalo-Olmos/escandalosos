<?php include_once("common/header.php");?>

<div class="row" style="margin-top:100px;margin-bottom:100px">
<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">Legajo</label>
    <input type="text" class="form-control" id="validationCustom01" value="" maxlength="8" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un legajo valido.
    </div>
  </div> 
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Apellido</label>
    <input type="text" class="form-control" id="validationCustom02" value="" maxlength="100" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un apellido valido.
    </div>
  </div> 

  <div class="col-md-4">
    <label for="validationCustom03" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="validationCustom03" value="" maxlength="100" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un nombre valido.
    </div>
  </div>
 
  <div class="col-md-4">
    <label for="validationCustom04" class="form-label">Graduación</label>
    <input type="text" class="form-control" id="validationCustom04" value="" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar una graducion valida.
    </div>
  </div>

  <div class="col-md-4">
    <label for="validationCustom10" class="form-label">DU</label>
    <input type="text" class="form-control" id="validationCustom10" value="" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un DU valido.
    </div>
  </div>

  <div class="col-md-4">
    <label for="validationCustom10" class="form-label">Fecha de nacimiento</label>
    <input type="date" class="form-control" id="validationCustom10" value="" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar una fecha de nacimiento valida.
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom05" class="form-label">Clasificación general</label>
    <input type="number" class="form-control" id="validationCustom05" value="" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar una clasificacion valida.
    </div>
  </div>

  <div class="col-md-4">
    <label for="validationCustom06" class="form-label">Nacimiento</label>
    <input type="number" class="form-control" id="validationCustom06" min="0" max="900" value="" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un nacimiento valido.
    </div>
  </div>

  <div class="col-md-4">
    <label for="validationCustom07" class="form-label">Email</label>
    <input type="email" class="form-control" id="validationCustom07" value="" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe ingresar un mail valido.
    </div>
  </div>

  <div class="col-md-4">
    <label for="validationCustom08" class="form-label">Genero</label>
    <select class="form-select" id="validationCustom08" required>
      <option selected disabled value="">Seleccionar Genero</option>
      <option value="1"> Femenino </option>
      <option value="2"> Masculino </option>
    </select>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe seleccionar un genero.
    </div>
  </div>

  <div class="col-md-4">
    <label for="paisOrigen" class="form-label">Pais de Origen</label>
    <select class="form-select" id="paisOrigen" required>
      <option selected disabled value="">Seleccionar Pais de Origen</option>
    </select>
    <div class="valid-feedback">
      Correcto!
    </div>
    <div class="invalid-feedback">
      Debe seleccionar un pais valido.
    </div>
  </div>

  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
</div>
<script>
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

</script>

<?php include_once("common/footer.php");?>
