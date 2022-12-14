import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import resume from "../../constants/Resume";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: "#212529",
	},
	timeLine: {
		position: "relative",
		padding: "1rem",
		margin: "o auto",
		"&:before": {
			content: "''",
			position: "absolute",
			height: "100%",
			border: "1px solid tan",
			right: "40px",
			top: 0,
		},
		"&:after": {
			content: "''",
			display: "table",
			clear: "both",
		},
		[theme.breakpoints.up("md")]: {
			padding: "2rem",
			"&:before": {
				left: "calc(50% - 1px)",
				right: "auto",
			},
		},
	},
	timeLineItem: {
		padding: "1rem",
		borderBottom: "2px solid tan",
		position: "relative",
		margin: "1rem 3rem 1rem 1rem",
		clear: "both",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before": {
			content: "''",
			position: "absolute",
			right: "-0.625rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor: "#adb5bd #adb5bd transparent transparent",
			borderWidth: "0.625rem",
			transform: "rotate(45deg)",
		},
		[theme.breakpoints.up("md")]: {
			width: "44%",
			margin: "1rem",
			"&:nth-of-type(2n)": {
				float: "right",
				margin: "1rem",
				borderColor: "tan",
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: "-0.625rem",
				borderColor: "transparent transparent #adb5bd #adb5bd",
			},
		},
	},
	timeLineYear: {
		fontFamily: "Sans",
		textAlign: "center",
		maxWidth: "9.375rem",
		margin: "0 3rem 0 auto",
		fontSize: "1.8rem",
		color: "#212529",
		background: "#adb5bd",
		lineHeight: 1,
		padding: "0.5rem 1rem",
		"&:before": {
			display: "none",
		},
		borderRadius: 12,
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
			margin: "0 auto",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},
	heading: {
		color: "#adb5bd",
		padding: "3rem 0",
		textTransform: "uppercase",
		fontSize: theme.typography.pxToRem(40),
	},
	subHeading: {
		color: "#adb5bd",
		padding: 0,
		textTransform: "uppercase",
	},
	body1: {
		color: "#6c757d",
	},
	subtitle1: {
		color: "#fee",
		fontFamily: "initial"
	},
}));

const Resume = () => {
	const classes = useStyles();
	return (
		<Box component="header" className={classes.mainContainer}>
			<Typography variant="h4" align="center" className={classes.heading}>
				Experiences
			</Typography>
			<Box component="div" className={classes.timeLine}>
				{resume.map((item, index) => {
					return (
						<>
							<Typography
								variant="h2"
								className={`${classes.timeLineYear} ${classes.timeLineItem}`}
							>
								{item.year}
							</Typography>
							<Box
								component="div"
								className={classes.timeLineItem}
							>
								<Typography
									variant="h5"
									align="center"
									className={classes.subHeading}
								>
									{item.title}
								</Typography>
								<Typography
									variant="body1"
									align="center"
									className={classes.body1}
								>
									{item.subTitle}
								</Typography>
								<Typography
									variant="subtitle1"
									align="center"
									className={classes.subtitle1}
								>
									{item.desc}
								</Typography>
							</Box>
						</>
					);
				})}
			</Box>
		</Box>
	);
};

export default Resume;
