
export class local{
	constructor(nombre, coordenadas, demanda = []){
		this.nombre = nombre
		this.coordenadas = coordenadas
		this.demanda = demanda
	}

	getNombre(){
		return this.nombre
	}

	getCoordenadas(){
		return this.coordenadas
	}

	getDemanda(){
		return this.demanda
	}	
		
}
