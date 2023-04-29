
export function cambio_de_tema(){
    var tabla = document.querySelector('.table-light');
    tabla = document.querySelector('.table-dark');

    if (localStorage.getItem("background") === "dark" || localStorage.getItem("background") === null) {
        document.querySelector('body').setAttribute('data-bs-theme','dark');
        tabla.classList['value'] = 'table hover  table-dark table-bordered nowrap border';
      } else if (localStorage.getItem("background") === "light") {
        document.querySelector('body').setAttribute('data-bs-theme','light');
        tabla.classList['value'] = 'table hover table-light table-bordered nowrap border';
    
      }
    
      document.getElementById('cambiarVista').addEventListener("click", function() {
        if(localStorage.getItem("background") === "dark"){
          document.querySelector('body').setAttribute('data-bs-theme','dark');
          tabla.classList['value'] = 'table hover  table-dark table-bordered nowrap border';
          localStorage.setItem("background", "light");
        }else{
          document.querySelector('body').setAttribute('data-bs-theme','light');
          tabla.classList['value'] = 'table hover table-light table-bordered nowrap border';
    
          localStorage.setItem("background", "dark");
        }
      });
    
      const cambiarVista = (version) => {
          
    
      }

}

function cambiar_estilo_tabla_dark(){
    var tabla = document.querySelector('.table-light');

    tabla.classList['value'] = 'table hover table-light table-bordered nowrap border';
    tabla.classList['value'] = 'table hover  table-dark table-bordered nowrap border';
  
}
