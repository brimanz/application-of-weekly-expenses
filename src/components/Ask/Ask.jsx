const  Ask = () =>{
	return(
		<>
			<h2>Establece el Presupuesto semanal</h2>

			<form>
				<input
					type="number"
					className="u-full-width"
					placeholder="Ingresa tu presupuesto"
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