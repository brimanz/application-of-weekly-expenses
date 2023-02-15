import {useState} from 'react'
import {Header, Ask, Form, Listado} from './components'


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [load, setLoad] = useState(true);
  const [gastos, setGastos] = useState([]);

  const agregarNuevoGasto = gasto =>{
    setGastos([
      ...gastos, 
      gasto
    ]);
  }


  return (
    <div className="container">
      <header/>
        <Header/>
      <header>

        <div className="contenido-principal contenido">
          {
            load ? 
            (
              <Ask
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setLoad={setLoad}
              />
            ) :
            (
              <div className="row">
                <div className="one-half column">
                  <Form
                    agregarNuevoGasto={agregarNuevoGasto}
                  />
                </div>

                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  )
}

export default App
