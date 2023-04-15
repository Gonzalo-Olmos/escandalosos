class Competidor {
	constructor(
		GAL,apellido,nombre,DU,fechaNac,paisOrigen,
        graduacion,clasificacionGen,email,genero
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
    }
}