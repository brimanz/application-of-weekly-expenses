import {useState} from 'react'
import Ask from './components/Ask/Ask'
import Header from './components/Header/Header'


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);


  return (
    <div className="container">
      <header/>
        <Header/>
      <header>

        <div className="contenido-principal contenido">
          <Ask
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
          />
        </div>
      </header>
    </div>
  )
}

export default App
