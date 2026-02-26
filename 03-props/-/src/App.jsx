import React from 'react'
import Card from './assets/Card'

const App = () => {
  return (<>
    <Card user="Aman Gupta" profession="Software Engineer"/>  {/* use {} for array, integer */}

    <Card user="Harsh Mishra" profession="Doctor"/>
    <Card user="Aditya Gupta" profession="Charted Accountant"/>
    
    </>
  )
}

export default App
