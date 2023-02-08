import {useState} from 'react'


const Form = () =>{
	return(
		<form>
			<h2>Agrega tus Gastos</h2>

			<div className="campo">
				<label>Nombre de Gasto</label>
				<input
					type="text"
					className="u-full-width"
					placeholder="Ej. Comida"
				/>
			</div>

			<div className="campo">
				<label>Catidad de Gasto</label>
				<input
					type="number"
					className="u-full-width"
					placeholder="Ej. 200"
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