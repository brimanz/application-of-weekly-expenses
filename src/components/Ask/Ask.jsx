import {useState} from 'react'


const  Ask = () =>{
	const [cantidad, setCantidad] = useState(0);
	const [error, setError] = useState(false);

	const definirPresupuesto = e =>{
		setCantidad(parseInt(e.target.value))
	}

	const agregarPresupuesto = e =>{
		e.preventDefault();

		//validate zone
		if(cantidad < 1 || isNaN(cantidad)){
			setError(true);
			return;
		}

		setError(false)
	}
 

	return(
		<>
			<h2>Establece el Presupuesto semanal</h2>

			{
				error ? <p className="error alert-danger">Valor Incorrecto</p> 
				: null
			}

			<form
				onSubmit={agregarPresupuesto}
			>
				<input
					type="number"
					className="u-full-width"
					placeholder="Ingresa tu presupuesto"
					onChange={definirPresupuesto}
				/>

				<input
					type="submit"
					className="button-primary u-full-width"
					value="Ingresar"
				/>
			</form>
		</>
	);
}


export default Ask