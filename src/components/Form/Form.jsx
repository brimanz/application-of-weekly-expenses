import {useState} from 'react'


const Form = () =>{
	const [gasto, setGasto] = useState("");
	const [cantidad, setCantidad] = useState(0);

	const agregarGasto = e => {
		e.preventDefault();

		//validate zone 
	}

	return(
		<form
			onSubmit={agregarGasto}
		>
			<h2>Agrega tus Gastos</h2>

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