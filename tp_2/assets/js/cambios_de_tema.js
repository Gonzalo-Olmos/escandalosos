/**
 * Cambia de tema
 * @param {string} tema light o dark
 */
export const cambio_de_tema = (tema) => {
    let $tabla = document.querySelector('.table');

    if(tema === "dark"){
      document.querySelector('body').setAttribute('data-bs-theme','dark');
      $tabla.classList['value'] = 'table hover table-dark table-bordered nowrap border';
    
      $("#cambiarVista_negro").css("display", "none");
      $("#cambiarVista_blanco").css("display", "block");

      localStorage.setItem("background", "dark");
    }else{
      document.querySelector('body').setAttribute('data-bs-theme','light');
      $tabla.classList['value'] = 'table hover table-light table-bordered nowrap border';
      
      $("#cambiarVista_negro").css("display", "block");
      $("#cambiarVista_blanco").css("display", "none");

      localStorage.setItem("background", "light");
    }
}