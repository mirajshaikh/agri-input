import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@material-ui/core/';
import TransitionsModal from '../modal/Modal';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

function createData(name, img, dec, qty) {
	return { name, img, dec, qty };
}

const rows = [
	createData(
		'Seeds/Seedling',
		'./imgs/seeds.jpeg',
		'Chilli Sakata (1500 Seeds)',
		26
	),
	createData(
		'Nurtrients/Fertilizers',
		'./imgs/BrandFert.jpeg',
		'Acme Brand Fert A/B Set 50Kg',
		114
	),
	createData(
		'Pesticide / Fungicide',
		'./imgs/valiantsME.jpeg',
		'valiants ME (Methyl Eugenol)',
		40
	),
	createData(
		'Growing Medium',
		'./imgs/cocopet.jpeg',
		'Acme Brand Cocopeat 30Kg',
		20
	),
	createData(
		'Growing Medium',
		'./imgs/cocopeat.jpeg',
		'Acme Brand Cocohusk 50Kg',
		50
	),
	createData(
		'Pesticide / Fungicide',
		'./imgs/IDecis.jpeg',
		'decis (Delthametrin)',
		4
	),
];

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

export default function PendingTable() {
	const classes = useStyles();
	console.log(TransitionsModal);

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label='customized table'>
				<TableHead>
					<TableRow>
						<StyledTableCell>#</StyledTableCell>
						<StyledTableCell>Agri-Input Category</StyledTableCell>
						<StyledTableCell align='right'>Product Image</StyledTableCell>
						<StyledTableCell align='right'>Product Description</StyledTableCell>
						<StyledTableCell align='right'>Order Quantity</StyledTableCell>
						<StyledTableCell align='right'>&nbsp;</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, index) => (
						<StyledTableRow key={row.name + Math.random()}>
							<StyledTableCell align='center'>{index + 1}</StyledTableCell>
							<StyledTableCell component='th' scope='row'>
								{row.name}
							</StyledTableCell>
							<StyledTableCell align='right'>
								<img width='50' src={row.img} alt={row.name} />
							</StyledTableCell>
							<StyledTableCell align='right'>{row.dec}</StyledTableCell>
							<StyledTableCell align='right'>{row.qty}</StyledTableCell>
							<StyledTableCell align='right'>
								<TransitionsModal
									title={row.name}
									dec={row.dec}
									img={row.img}
								/>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
