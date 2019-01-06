import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

const CustomerEdit = ({ name, dni, age }) => {
	return (
		<div>
			<h2>Editar cliente</h2>
			<form action="">
				<div>
					{/* <CustomerControl initialValues={this.props.customer} 
					le pasa la propiedad name,dni,age */}
					{/* Si le cambio a <Field name="name1" hay error*/}
					<label htmlFor="name">Nombre: </label>
					<Field name="name" component="input" type="text" />
				</div>
				<div>
					<label htmlFor="dni">Cédula: </label>
					<Field name="dni" component="input" type="text" />
				</div>
				<div>
					<label htmlFor="age">Edad: </label>
					<Field name="age" component="input" type="number" />
				</div>
			</form>
		</div>
	);
};

CustomerEdit.propTypes = {
	name: PropTypes.string,
	dni: PropTypes.string,
	age: PropTypes.number
};

const CustomerEditForm = reduxForm({ form: "CustomerEdit" })(CustomerEdit);

const mapStateToProps = (state, props) => ({
	initialValues: props
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomerEditForm);
