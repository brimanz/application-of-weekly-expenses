import {useState, useEffect} from 'react'
import {Header, Ask, Form, Listado, ControlPresupuesto} from './components'


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [load, setLoad] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [creargasto, setCrearGasto] = useState(false);

  useEffect(() =>{
    if(creargasto) {
      setGastos([
        ...gastos, 
        gasto
      ]);

      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      setCrearGasto(false);
    }
  }, [gasto])



  const agregarNuevoGasto = gasto =>{
    
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
                    setGasto={setGasto}
                    setCrearGasto={setCrearGasto}
                  />
                </div>

                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />

                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
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
