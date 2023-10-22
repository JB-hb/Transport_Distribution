import React from 'react'
import { useState } from 'react'

export const useCamion = (nombre, cargaMaxima) => {

	const [name, setName] = useState(nombre)
	const [cargaMax, setCargaMax] = useState(cargaMaxima)
	const [locales, setLocales] = useState([])
	const [cargaActual, setCargaActual] = useState([])
	const [estado, setEstado] = useState(1)

	const getCargaDisponible = () => {
		let cont = 0
		cargaActual.forEach(element => {
			cont += element.cantidad
		})
		return cargaMax - cont
	}

	const agregarCarga = (carga) => {
		let temp
		carga.forEach(element => {
			temp = cargaActual
			temp.push(element)
			setCargaActual(temp)
		})
	}

	const generarRuta = () => {
		//metodo generar ruta con contexto de datos
	}
}
