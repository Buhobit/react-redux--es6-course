import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import CustomerListItem from "./CustomerListItem";
import { accessControl } from "../helps/accessControl";
import { CUSTOMER_LIST } from "../constants/users";

const CustomerList = ({ customers, urlPath }) => {
	return (
		<div className="customerlist">
			<Paper
				className="customer-list-paper"
				style={{
					marginLeft: "5%",
					marginRight: "5%",
					WebkitBoxShadow: "10px 10px 25px -1px rgba(0, 0, 0, 0.95)",
					MozBoxShadow: "10px 10px 25px -1px rgba(0, 0, 0, 0.95)",
					boxShadow: "10px 10px 25px -1px rgba(0, 0, 0, 0.95)"
				}}
			>
				<Table className="customer-list-table">
					<TableHead>
						<TableRow>
							<CustomTableCell>Cédula </CustomTableCell>
							<CustomTableCell align="right">Nombre</CustomTableCell>
							<CustomTableCell align="right">Edad</CustomTableCell>
							<CustomTableCell align="right">Editar</CustomTableCell>
							<CustomTableCell align="right">Eliminar</CustomTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{customers.map((row) => {
							return (
								<CustomerListItem
									key={row.dni}
									dni={row.dni}
									name={row.name}
									age={row.age}
									urlPath={urlPath}
									editAction={"Editar"}
									delAction={"Eliminar"}
								/>
							);
						})}
					</TableBody>
				</Table>
			</Paper>
		</div>
	);
};

CustomerList.propTypes = {
	customers: PropTypes.array.isRequired,
	urlPath: PropTypes.string.isRequired
};

const CustomTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white
	},
	body: {
		fontSize: 14
	}
}))(TableCell);

const styles = (theme) => ({
	root: {
		width: "100%",
		marginTop: theme.spacing.unit * 3,
		overflowX: "auto"
	},
	table: {
		minWidth: 500
	},
	row: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.background.default
		}
	}
});

export default accessControl([CUSTOMER_LIST])(withStyles(styles)(CustomerList));
