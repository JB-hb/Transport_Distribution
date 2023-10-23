import React from 'react'
import { useContext, createContext, useState} from 'react'

export const dataContext = createContext()

export const useDataContext = () => {
	const context = useContext(dataContext)
	return context
}

export const DataProvider = ({children}) => {

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
		setLocales(temp)
	}

	return(
		<dataContext.Provider value ={{
			camiones,
			locales,
			agregarCamion,
			agregarLocal
		}}>
			{children}
		</dataContext.Provider>
	)
}
