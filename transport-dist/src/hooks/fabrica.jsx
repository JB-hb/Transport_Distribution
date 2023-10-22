import React from 'react'
import { useState } from 'react

export const useFabrica = () => {

	const [camiones, setCamiones] = useState([])	
	const [locales, setLocales] = useState([])

	const agregarCamion = (camion) => {
		let temp = camiones
		temp.push(camion)
		temp.sort((a,b) => {
			return a.cargaMax - b.cargaMax
		})
		setCamiones(temp)
	}

	const agregarLocal = (local) => {
		let temp = locales
		temp.push(local)
		temp.sort((a,b) => {
			return a.totalCarga - b.totalCarga
		})
	}

	const desplegarRuta = () => {
	 	// metodo donde se llama por cada camion el metodo generar ruta
		// y guarda la ruta en un array que va a retornar este metodo
		return []
	}

	const cargarCamiones = (pedidos = locales) => {
		const carga = camiones.filter(element => element.estado = 2)
		const vacio = camiones.filter(element => element.estado = 1)
		const lleno = camiones.filter(element => element.estado = 0)	

		const pedido = pedidos[0]

		if(carga.length() === 0 && vacio.length() > 0){
			let cont = pedido.totalCarga		
			let posicion = 0
			while(cont > 0){
				
			}
		}
	}
}
