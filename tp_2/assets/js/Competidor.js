class Competidor {
    
	constructor(
		GAL,apellido,nombre,DU,fechaNac,paisOrigen,
        graduacion,clasificacionGen,email,genero) {
		this.GAL = GAL;
		this.apellido = apellido;
		this.nombre = nombre;
		this.DU = DU;
		this.fechaNac = fechaNac;
		this.paisOrigen = paisOrigen;
		this.graduacion = graduacion;
		this.clasificacionGen = clasificacionGen;
		this.email = email;
		this.genero = genero;
	}

    /**
     * Retorna los países aceptados
     * @returns Object 
     */
	static paisesAceptados() {
		const PAISES = {
            Paises:
            ["Rusia", "Ucrania", "Estados Unidos",
            "Canadá", "Perú", "Chile", "Argentina",
            "México", "Brasil", "Bolivia", "Ecuador",
            "Venezuela", "Colombia", "Paraguay", "Uruguay"]
		};

        return PAISES;
	}

    /**
     * Retorna el perfil del competidor
     * @returns {string}
     */
    getPerfil(){


    return `
    

          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">
             
           <strong> GAL:  </strong> ${this.GAL}<br>
           <strong> Apellido: </strong> ${this.apellido}<br>
           <strong> Nombre: </strong> ${this.nombre}<br>
           <strong> DU: </strong> ${this.DU}<br>
           <strong> Fecha de nacimiento: </strong>  ${this.fechaNac}<br>
           <strong> País de Origen: </strong> ${this.paisOrigen}<br>
           <strong> Graduación: </strong> ${this.graduacion}<br>
           <strong> Clasificación General: </strong/> ${this.clasificacionGen}<br>
           <strong> E-mail: </strong> ${this.email}<br>
           <strong> Género: </strong> ${this.genero}
              
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>

    ` 








    /*     return `
        GAL: ${this.GAL}<br>
        Apellido: ${this.apellido}<br>
        Nombre: ${this.nombre}<br>
        DU: ${this.DU}<br>
        Fecha de nacimiento: ${this.fechaNac}<br>
        País de Origen: ${this.paisOrigen}<br>
        Graduación: ${this.graduacion}<br>
        Clasificación General: ${this.clasificacionGen}<br>
        E-mail: ${this.email}<br>
        Género: ${this.genero}
        `;

 */


    }
}