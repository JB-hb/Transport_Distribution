import React from 'react'
import { useState, useEffect } from 'react

export const useLocar = (nombre, coordenadas, demanda = []) => {

	const [name, setName] = useState(nombre)
	const [coordenadas, setCoordenadas] = useState(coordenadas)
	const [demanda, setDemanda] = useState(demanda)
	const [totalCarga, setTotalCarga] = (0)

	useEffect(() => {
		calcularCarga = () => {
			let cont = 0 
			demanda.forEach(element => {
				cont += element.cantidad
			})
			setTotalCarga(cont)
		}	

		calcularCarga()
	},[demanda])

	return {demanda, name, coordenadas}
	
}
