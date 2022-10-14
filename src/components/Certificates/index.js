import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import certificates from "../../constants/Certificates";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: "#233",
		// height: "100%",
		textDecoration: "none",
		padding: theme.spacing(2),
	},
	cardContainer: {
		textDecoration: "none",
	},
	txt: {
		fontSize: theme.typography.pxToRem(16),
		fontWeight: theme.typography.fontWeightBold,
		fontFamily: "Sans",
		textDecoration: "none",
		marginLeft: theme.spacing(2),
	},
}));

const Certificates = () => {
	const classes = useStyles();
	return (
		<p>Nothing for now :(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((</p>
		// <Box component="div" className={classes.mainContainer}>
		// 	<Grid container justify="center" spacing={2}>
		// 		{certificates.map((project, i) => (
		// 			<Grid item xs={12} sm={12} md={12} key={i}>
		// 				<Card className={classes.cardContainer}>
		// 					<CardActionArea>
		// 						<CardMedia
		// 							component="img"
		// 							alt={project.name}
		// 							height="500"
		// 							image={project.image}
		// 						/>
		// 						<CardContent>
		// 							<Typography variant="h2" gutterBottom>
		// 								<strong>{project.name}</strong>
		// 								{project.link ? (
		// 									<a
		// 										className={classes.txt}
		// 										href={project.link}
		// 									>
		// 										Check Certificate
		// 									</a>
		// 								) : null}
		// 							</Typography>
		// 							<Typography
		// 								variant="body"
		// 								color="textSecondary"
		// 							>
		// 								{project.description}
		// 							</Typography>
		// 						</CardContent>
		// 					</CardActionArea>
		// 				</Card>
		// 			</Grid>
		// 		))}
		// 	</Grid>
		// </Box>
	);
};

export default Certificates;
