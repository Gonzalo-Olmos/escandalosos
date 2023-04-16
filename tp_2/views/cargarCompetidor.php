<?php include_once("common/header.php"); ?>

<div class="row" style="margin-top:100px;margin-bottom:100px">
  <form class="row g-3" id="competidorForm" novalidate>
    <div class="col-md-4">
      <label for="validationCustom01" class="form-label">Legajo</label>
      <input type="text" class="form-control form-competidor" id="validationCustom01" value="" maxlength="8" required>
      <div class="valid-feedback">
        Correcto!
      </div>
      <div class="invalid-feedback">
        Debe ingresar un legajo valido.
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
      <label for="validationCustom04" class="form-label">Graduación</label>
      <input type="text" class="form-control form-competidor" id="validationCustom04" value="" required>
      <div class="valid-feedback">
        Correcto!
      </div>
      <div class="invalid-feedback">
        Debe ingresar una graducion valida.
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
      <input type="date" class="form-control form-competidor" id="validationCustom10" value="" required>
      <div class="valid-feedback">
        Correcto!
      </div>
      <div class="invalid-feedback">
        Debe ingresar una fecha de nacimiento valida.
      </div>
    </div>
    <div class="col-md-4">
      <label for="validationCustom05" class="form-label">Clasificación general</label>
      <input type="number" class="form-control form-competidor" id="validationCustom05" value="" required>
      <div class="valid-feedback">
        Correcto!
      </div>
      <div class="invalid-feedback">
        Debe ingresar una clasificacion valida.
      </div>
    </div>

    <div class="col-md-4">
      <label for="validationCustom06" class="form-label">Nacimiento</label>
      <input type="number" class="form-control form-competidor" id="validationCustom06" min="0" max="900" value="" required>
      <div class="valid-feedback">
        Correcto!
      </div>
      <div class="invalid-feedback">
        Debe ingresar un nacimiento valido.
      </div>
    </div>

    <div class="col-md-4">
      <label for="validationCustom07" class="form-label">Email</label>
      <input type="email" class="form-control form-competidor" id="validationCustom07" value="" required>
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

    <div class="col-12">
      <button class="btn btn-primary" type="submit">Submit form</button>
    </div>
  </form>

  <div class="row">
    <div class="col-12 mt-5" id="resultado"></div>
  </div>
</div>
<script>
  const form = document.getElementById('competidorForm')

  form.addEventListener('submit', (event) => {
    let inputs;
    let datos = new Array();

    event.preventDefault()
    event.stopPropagation()
    form.classList.add('was-validated')

    // Si está validado, creamos objeto y mostramos
    if(form.checkValidity()){
      // Asumimos que tenemos todo.
      // Obtenemos los inputs
      inputs = document.getElementsByClassName('form-competidor');
      console.log(inputs)
      Array.from(inputs).forEach((input) => {
        console.log(input.value)
        // Recorremos los inputs y pusheamos los datos en un arreglo
        datos.push(input.value);
      })

      console.log(datos);
      // Creamos el obj. Los datos son recuperados en orden
      let objCompetidor = new Competidor(datos[0], datos[1], datos[2], datos[3], datos[4], datos[5], datos[6], datos[7], datos[8], datos[9])
      // Mostramos sus datos en un div
      document.getElementById('resultado').innerHTML = objCompetidor.getPerfil();
    }
  })
</script>

<?php include_once("common/footer.php"); ?>