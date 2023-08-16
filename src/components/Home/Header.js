import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../../avatar.png";

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(15),
		height: theme.spacing(15),
		margin: theme.spacing(1),
	},
	title: {
		color: "#CED4DA",
		fontSize: theme.typography.pxToRem(40),
		[theme.breakpoints.down("sm")]: {
			fontSize: theme.typography.pxToRem(20),
		},
	},
	subtitle: {
		color: "#6C757D",
		fontSize: theme.typography.pxToRem(18),
		marginTop: theme.spacing(2),
		fontFamily: "sans",
		[theme.breakpoints.down("sm")]: {
			fontSize: theme.typography.pxToRem(9),
		},
	},
	typedContainer: {
		position: "absolute",
		top: "40%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		width: "100vw",
		textAlign: "center",
		zIndex: 1,
	},
	icn: {
		color: "#6C757D",
		backgroundColor: "#212529",
	},
	contain: {
		backgroundColor: "rgba(31,31,31,.6)",
		width: "40%",
		margin: "auto",
		borderRadius: 12,
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<Box className={classes.typedContainer}>
			<Grid container justify="center">
				<Avatar
					className={classes.avatar}
					src={avatar}
					alt="Sobhan Shukueian"
				/>
			</Grid>
			<div className={classes.contain}>
				<Typography className={classes.title} variant="h4">
					<Typed strings={["Sobhan Shukueian"]} typeSpeed={40} />
				</Typography>
				<Typography className={classes.subtitle} variant="h5">
					BS.C. Computer Engineering in Tabriz University (GPA: 17.48/20 (3.71/4))
					<br />
					Researcher <br />
					<Typed
						strings={["Computer Vision", "Reinforcement Learning"]}
						typeSpeed={40}
						backSpeed={50}
						loop
					/>
				</Typography>
			</div>
		</Box>
	);
};

export default Header;
