import React, { Component } from "react";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import CustomerList from "../components/CustomerList";
import CustomersActions from "../components/CustomersActions";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCustomers } from "./../actions/fetchCustomers";
import { getCustomers } from "../selectors/customers.selector";

class CustomersContainer extends Component {
	static propTypes = {
		history: PropTypes.object,
		customers: PropTypes.array.isRequired,
		fetchCustomers: PropTypes.func.isRequired
	};

	componentDidMount = () => {
		if (this.props.customers.length === 0) this.props.fetchCustomers();
	};

	handleAddNew = () => {
		this.props.history.push("/customers/new");
	};

	renderBody = (customers) => {
		return (
			<div className="customers-container">
				<CustomersActions>
					<Button
						variant="contained"
						color="primary"
						className="button-list-clients"
						onClick={this.handleAddNew}
					>
						Nuevo Cliente
					</Button>
				</CustomersActions>
				<br />
				<CustomerList customers={customers} urlPath={"customers/"} />
			</div>
		);
	};

	render() {
		return (
			<div>
				<AppFrame header={"Lista Clientes"} body={this.renderBody(this.props.customers)} />
			</div>
		);
	}
}

CustomersContainer.defaultProps = {
	customers: []
};

const mapStateToProps = (state) => ({
	// customers: state.customers
	customers: getCustomers(state)
});

const mapDispatchToProps = {
	fetchCustomers
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(CustomersContainer)
);
