import {useState} from 'react'
import Error from '../Error/Error'


const  Ask = ({setPresupuesto, setRestante, setLoad}) =>{
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

		setError(false);
		setPresupuesto(cantidad);
		setRestante(cantidad);
		setLoad(false);
	}

	return(
		<>
			<h2>Establece el Presupuesto semanal</h2>

			{
				error ? <Error mensaje="Presupuesto incorrecto" /> 
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