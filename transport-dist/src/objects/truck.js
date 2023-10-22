
export class truck{
	constructor(){
		this.nombre = nombre
		this.locales = []
		this.cargaMax = cargaMax
		this.cargaAct = []
		this.estado = 1
	}

	getCargaDisponible(){
		let cont = 0
		this.cargaAct.foreach(element => {
			cont += element.cantidad
		})
		return cargaMax - cont
	}

	agregarCarga(carga){
		carga.forEach(element => {
			this.cargaAct.push(element)
		})
	}

	generarRuta(){
		//metodo para generar la ruta usando el contexto de la 
	}
}
