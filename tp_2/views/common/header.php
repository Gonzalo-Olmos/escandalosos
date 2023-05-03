<!DOCTYPE html>
<html lang="es">

<head>
  <title>Taekwondo WTF Poonsae</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0  maximum-scale=1.0, minimum-scale=1.0">
  <script src="https://kit.fontawesome.com/84a9afed55.js" crossorigin="anonymous"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <link rel="stylesheet" href="../assets/css/estilos.css">
  <script src="../assets/themes/jQuery-3.6.0/jquery-3.6.0.min.js"></script>

  <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/start/jquery-ui.css" rel="stylesheet" />
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>

  <link href="../assets/themes/datatables/datatables.min.css" rel="stylesheet" type="text/css" />
  <script src="../assets/themes/datatables/datatables.all.min.js" type="text/javascript"></script>

</head>

<body>
  <div class="container-fluid vh-100">
    <header>



      <nav class="navbar fixed-top bg-info">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.php"><img class="navbar-brand" width="100" src="../assets/img/logo_poomsae1.png" alt="Logo"></a>
          <button id="cambiarVista_negro" class="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill mb-1" viewBox="0 0 16 16">
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
            </svg></button>
          <button id="cambiarVista_blanco" class="btn btn-light" style="display:none;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill mb-1" viewBox="0 0 16 16">
              <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </svg></button>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <ul class="navbar-nav ms-auto">

              <li class="nav-item">
                <a class="nav-link text-dark" href="#seccion1">Sección 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#seccion2">Sección 2</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#seccion4">Sección 4</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#seccion5">Sección 5</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#seccion6">Sección 6</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>












      <!--     <nav class="navbar fixed-top navbar-light" style="background-color: #e3f2fd;">
                <div class="container-fluid">
                    <img  class="navbar-brand" width="100"  src="../assets/img/logo_poomsae1.png" alt="Logo">
                    <button class="navbar-toggler mb-2 " type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="index.php">Inicio</a>
                            <a class="nav-link" href="#seccion1"  >Seccion 1</a>
                            <a class="nav-link" href="#seccion2">Seccion 2</a>
                            <a class="nav-link" href="#seccion4">Seccion 4</a>
                            <a class="nav-link" href="#seccion5">Seccion 5</a>
                            <a class="nav-link" href="#seccion6">Seccion 6</a>
                        </div>
                    </div>
                </div> 
            </nav> -->
    </header>