import {useState} from 'react'


const  Ask = () =>{
	const [cantidad, setCantidad] = useState(0);


	const definirPresupuesto = e =>{
		setCantidad(parseInt(e.target.value))
	}

	const agregarPresupuesto = e =>{
		e.preventDefault();

		//validate zone

	}
 

	return(
		<>
			<h2>Establece el Presupuesto semanal</h2>

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