
export function cambio_de_tema(){
    let tabla = document.querySelector('.table');

    if (localStorage.getItem("background") === "dark" || localStorage.getItem("background") === null) {
        document.querySelector('body').setAttribute('data-bs-theme','dark');
        tabla.classList['value'] = 'table hover table-dark table-bordered nowrap border';
       
        $("#cambiarVista_negro").css("display", "none");
        $("#cambiarVista_blanco").css("display", "block");
      } else if (localStorage.getItem("background") === "light") {
        document.querySelector('body').setAttribute('data-bs-theme','light');
        tabla.classList['value'] = 'table hover table-light table-bordered nowrap border';
        $("#cambiarVista_negro").css("display", "block");
        $("#cambiarVista_blanco").css("display", "none");
      }
      document.getElementById('cambiarVista_negro').addEventListener("click", function() {
        if(localStorage.getItem("background") === "dark"){
          document.querySelector('body').setAttribute('data-bs-theme','dark');
          tabla.classList['value'] = 'table hover table-dark table-bordered nowrap border';
          localStorage.setItem("background", "light");
          $("#cambiarVista_negro").css("display", "none");
          $("#cambiarVista_blanco").css("display", "block");
        }else{
          document.querySelector('body').setAttribute('data-bs-theme','light');
          tabla.classList['value'] = 'table hover table-light table-bordered nowrap border';
          localStorage.setItem("background", "dark");
          $("#cambiarVista_negro").css("display", "block");
          $("#cambiarVista_blanco").css("display", "none");
        }
      });

      document.getElementById('cambiarVista_blanco').addEventListener("click", function() {
        if(localStorage.getItem("background") === "dark"){
          document.querySelector('body').setAttribute('data-bs-theme','dark');
          tabla.classList['value'] = 'table hover table-dark table-bordered nowrap border';
          localStorage.setItem("background", "light");
          $("#cambiarVista_negro").css("display", "none");
          $("#cambiarVista_blanco").css("display", "block");
        }else{
          document.querySelector('body').setAttribute('data-bs-theme','light');
          tabla.classList['value'] = 'table hover table-light table-bordered nowrap border';
          localStorage.setItem("background", "dark");
          $("#cambiarVista_negro").css("display", "block");
          $("#cambiarVista_blanco").css("display", "none");
        }
      });
    
      const cambiarVista = (version) => {
          
    
      }

}
