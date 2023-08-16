import {
	makeStyles,
	Avatar,
	Grid,
	Fade,
	Button,
	useTheme,
	useMediaQuery,
} from "@material-ui/core";
import { useHistory } from "react-router";
import VizSensor from "react-visibility-sensor";

import React, { useState } from "react";

import avatar from "../../avatar2.jpg";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#212529",
		color: "#adb5bd",
		position: "relative",
		height: "50vh",
		top: "25%",
	},
	intro: {
		position: "absolute",
		top: "50%",
		left: "25%",
		transform: "translate(-50%,-50%)",
		width: "100vw",
		textAlign: "center",
		zIndex: 1,
	},
	txtContainer: {
		position: "absolute",
		top: "50%",
		left: "70%",
		transform: "translate(-50%,-50%)",
		textAlign: "center",
		zIndex: 1,
	},
	txt: {
		fontSize: theme.typography.pxToRem(14),
		fontFamily: "Sans",
		[theme.breakpoints.down("sm")]: {
			fontSize: "10px",
		},
	},
	avatar: {
		width: theme.spacing(30),
		height: theme.spacing(30),
		margin: theme.spacing(1),
		[theme.breakpoints.down("sm")]: {
			width: theme.spacing(15),
			height: theme.spacing(15),
		},
	},
	btn: {
		backgroundColor: "#adb5bd",
	},
	buttons: {
		marginTop: theme.spacing(2),
	},
}));
const Intro = (props) => {
	const history = useHistory();
	const classes = useStyles();
	const [show, setShow] = useState(false);

	const theme = useTheme();
	const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));

	return (
		<React.Fragment>
			<VizSensor
				onChange={(isVisible) => {
					setShow(isVisible);
				}}
			>
				<div className={classes.root}>
					<div className={classes.intro}>
						<Grid container justify="center">
							<Avatar
								className={classes.avatar}
								src={avatar}
								alt="Sobhan Shukueian"
							/>
						</Grid>
					</div>
					<div className={classes.txtContainer}>
						{isUpSm && (
							<Fade in={show} timeout={2000}>
								<div className={classes.txt}>
								Currently, I work in the Adl lab as a researcher. My primary focus is on artificial intelligence, and I enjoy using my skills to contribute to the exciting technological advances that happen every day.
My research interests are computer vision and reinforcement learning. In Adl, I had a chance to work on computer vision projects involving object detection, semantic segmentation, and unsupervised learning. This was a great opportunity to deepen my understanding of this area of AI research. Additionally, working with Virageek and associations has allowed me to share my passion for teamwork and AI with others and help them develop their skills.
								</div>
							</Fade>
						)}

						<Grid container className={classes.buttons} spacing={3}>
							<Grid item xs={12} md={6}>
								<Button
									fullWidth
									variant="contained"
									className={classes.btn}
									onClick={() => history.push("/resume")}
								>
									{" "}
									Experiences{" "}
								</Button>
							</Grid>
							<Grid item xs={12} md={6}>
								<Button
									fullWidth
									variant="contained"
									className={classes.btn}
									onClick={() => history.push("/projects")}
								>
									{" "}
									Projects{" "}
								</Button>
							</Grid>
							<Grid item xs={12} md={6}>
								<Button
									fullWidth
									variant="contained"
									className={classes.btn}
									onClick={() =>
										history.push("/publications")
									}
								>
									{" "}
									Publications{" "}
								</Button>
							</Grid>
							<Grid item xs={12} md={6}>
								<Button
									fullWidth
									variant="contained"
									className={classes.btn}
									onClick={() =>
										history.push(
											"https://sobhan-shukueian.medium.com"
										)
									}
								>
									{" "}
									Blog{" "}
								</Button>
							</Grid>
						</Grid>
					</div>
				</div>
			</VizSensor>
		</React.Fragment>
	);
};

export default Intro;
