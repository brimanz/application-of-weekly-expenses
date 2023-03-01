import Gasto from '../Gasto/Gasto'
import PropTypes from 'prop-types'


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

Listado.propTypes = {
	gastos: PropTypes.array.isRequired
}


export default Listado