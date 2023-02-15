import Gasto from '../Gasto/Gasto'

const Listado = ({gastos}) => {
	return(
		<div className="gastos-realizados">
			<h2>Gastos Personales</h2>
			{gastos.map((gasto) => (
				<Gasto 
					key={gasto.id}
					gasto={gasto}
				/>
			))}
		</div>
	);
}


export default Listado