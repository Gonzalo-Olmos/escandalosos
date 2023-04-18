export class Competidor {
	constructor(
		GAL,
		apellido,
		nombre,
		DU,
		fechaNac,
		paisOrigen,
		graduacion,
		clasificacionGen,
		email,
		genero
	) {
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
			Paises: [
				"Rusia",
				"Ucrania",
				"Estados Unidos",
				"Canadá",
				"Perú",
				"Chile",
				"Argentina",
				"México",
				"Brasil",
				"Bolivia",
				"Ecuador",
				"Venezuela",
				"Colombia",
				"Paraguay",
				"Uruguay",
			],
		};

		return PAISES;
	}

	/**
	 * Retorna el perfil del competidor
	 * @returns {string}
	 */
	getPerfil() {
		return `
        <div class="card shadow-sm">
          
          <img src="../assets/img/logo_poomsae1.png" class=" card-img-top">
          <div class="card-body">
            <p class="card-text">
            
          <strong> GAL:  </strong> ${this.GAL}<br>
          <strong> Apellido: </strong> ${this.apellido}<br>
          <strong> Nombre: </strong> ${this.nombre}<br>
          <strong> DU: </strong> ${this.DU}<br>
          <strong> Fecha de nacimiento: </strong>${this.fechaNac}<br>
          <strong> País de Origen: </strong> ${this.paisOrigen}<br>
          <strong> Graduación: </strong> ${this.graduacion}<br>
          <strong> Clasificación General: </strong/> ${
						this.clasificacionGen
					}<br>
          <strong> E-mail: </strong> ${this.email}<br>
          <strong> Género: </strong> ${this.genero}
            
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              </div>
              <small class="text-body-secondary">Imaginación</small>
            </div>
          </div>
        </div>
    `;
	}

	/**
	 * Retorna los datos en un arreglo
	 * @returns {Array}
	 */
	getDatos() {
		let resultado = {
			GAL: this.GAL,
			apellido: this.apellido,
			nombre: this.nombre,
			DU: this.DU,
			fechaNac: this.fechaNac,
			paisOrigen: this.paisOrigen,
			graduacion: this.graduacion,
			clasificacionGen: this.clasificacionGen,
			email: this.email,
			genero: this.genero,
		};
		return resultado;
	}
}
