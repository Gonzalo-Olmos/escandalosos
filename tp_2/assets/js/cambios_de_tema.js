
export function cambio_de_tema(){
    if (localStorage.getItem("background") === "dark" || localStorage.getItem("background") === null) {
        document.querySelector('body').setAttribute('data-bs-theme','dark')
      } else if (localStorage.getItem("background") === "light") {
        document.querySelector('body').setAttribute('data-bs-theme','light')
      }
    
      document.getElementById('cambiarVista').addEventListener("click", function() {
        if(localStorage.getItem("background") === "dark"){
          document.querySelector('body').setAttribute('data-bs-theme','dark')
          localStorage.setItem("background", "light");
        }else{
          document.querySelector('body').setAttribute('data-bs-theme','light')
          localStorage.setItem("background", "dark");
        }
      });
    
      const cambiarVista = (version) => {
          
    
      }

}
