import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppFrame from "../components/AppFrame";
import { getCustomerByDni } from "../selectors/customers.selector";
import { Route, withRouter } from "react-router-dom";
import CustomerEdit from "../components/CustomerEdit";
import CustomerData from "../components/CustomerData";
import { fetchCustomers } from "../actions/fetchCustomers";
import { updateCustomer } from "../actions/updateCustomer";

class CustomerContainer extends Component {
	static propTypes = {
		dni: PropTypes.string.isRequired,
		customer: PropTypes.object,
		fetchCustomers: PropTypes.func.isRequired,
		updateCustomer: PropTypes.func
	};

	componentDidMount() {
		if (this.props.custome === undefined) {
			this.props.fetchCustomers();
		}
	}

	handleSubmit = (values) => {
		const { dni } = values;
		//Necesita ponerse un return para que el submitting pueda funcionar
		// de esta forma se desactiva el botton aceptar mientras retorna la promesa
		return this.props.updateCustomer(dni, values);
	};

	handleOnBack = () => {
		this.props.history.goBack();
	};

	renderBody = () => (
		<Route
			path="/customers/:cedula/edit"
			// eslint-disable-next-line react/no-children-prop
			children={({ match }) => {
				if (this.props.customer) {
					let CustomerControl = match ? CustomerEdit : CustomerData;
					//InitialValues es un propiedad de redux-form
					return (
						<CustomerControl
							{...this.props.customer}
							onSubmit={this.handleSubmit}
							onSubmitSuccess={this.handleOnBack}
							onBack={this.handleOnBack}
						/>
					);
				}
				return null;
			}}
		/>
	);

	render() {
		return (
			<div>
				<AppFrame header={`Cliente ${this.props.dni}`} body={this.renderBody()} />
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	customer: getCustomerByDni(state, props)
});

const mapDispatchToProps = {
	fetchCustomers,
	updateCustomer
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(CustomerContainer)
);
