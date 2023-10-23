import React from 'react'
import { Formulario } from './components/fomulario.jsx'
import { DataProvider } from './context/dataContext.jsx'

function App() {

  return (
    <>
	  <DataProvider>
		<Formulario/>      
	  </DataProvider>
    </>
  )
}

export default App
