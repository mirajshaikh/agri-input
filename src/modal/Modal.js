import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Button } from '@material-ui/core/';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		display: 'grid',
		gridTemplateColumns: '1fr 2fr',
		gap: '20px',
	},
}));

export default function TransitionsModal(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button>
				<LaunchIcon onClick={handleOpen} />
			</Button>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<div className={classes.paper}>
						<div>
							<img src={props.img} alt={props.title} width={'200px'}></img>
						</div>
						<div>
							<h2 id='transition-modal-title'>{props.title}</h2>
							<p id='transition-modal-description'>{props.dec}</p>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
