import {useState} from 'react'
import Error from '../Error/Error'


const Form = () =>{
	const [gasto, setGasto] = useState("");
	const [cantidad, setCantidad] = useState(0);
	const [error, setError] = useState(false);

	const agregarGasto = e => {
		e.preventDefault();

		//validate zone
		if(cantidad < 1 || isNaN(cantidad) || gasto.trim() === ''){
			setError(true);
			return;
		} 

		setError(false);
	}

	return(
		<form
			onSubmit={agregarGasto}
		>
			<h2>Agrega tus Gastos</h2>
			{
				error ? <Error mensaje ="Ambos campos son requeridos o Presupuesto invalido"/> 
				: null
			}

			<div className="campo">
				<label>Nombre de Gasto</label>
				<input
					type="text"
					className="u-full-width"
					placeholder="Ej. Comida"
					value={gasto}
					onChange={e => setGasto(e.target.value)}
				/>
			</div>

			<div className="campo">
				<label>Catidad de Gasto</label>
				<input
					type="number"
					className="u-full-width"
					placeholder="Ej. 200"
					value={cantidad}
					onChange={e => setCantidad(parseInt(e.target.value, 10))}
				/>
			</div>

			<input
				type="submit"
				className="button-primary u-full-width"
				value="Agregar"
			/>
		</form>
	);
}


export default Form