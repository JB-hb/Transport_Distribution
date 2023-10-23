import React from 'react'
import { useDataContext } from '../context/dataContext.jsx'
import { ItemCamion } from './itemCamion'
import { ItemLocal } from './itemLocal'

export const Formulario = () => {

	const { camiones, locales }  = useDataContext()

	return(
		<form>
			<div>
				<h2> Camiones </h2>
				{camiones.map(
					element => {
						<ItemCamion camion={element}/>
					}
				)}
				//componente formulario de camion	
			</div>
			<div>
				<h2> Destinos </h2>
				{locales.map(
					element => {
						<ItemLocal local={element}/>
					}
				)}
				//componente formulario de local
			</div>
			<input type='submit' value='Generar Rutas'/>
		</form>
	)
	
}
