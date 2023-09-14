import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import projects from "../../constants/Projects";
import smallProjects from "../../constants/SmallProjects";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: "#233",
		height: "100%",
		textDecoration: "none",
		fontFamily: "Sans"
	},
	cardContainer: {
		maxWidth: 400,
		margin: "3rem auto",
		textDecoration: "none",
		fontFamily: "Sans"

	},
	txt: {
		textDecoration: "none",
		fontFamily: "Sans",
		fontWeight: "bold"

	},
	title: {
		fontSize: theme.typography.pxToRem(36),
		fontWeight: theme.typography.fontWeightBold,
		margin: theme.spacing(2),
		textAlign: "center",
		color: "#6C757D",
		fontFamily: "Sans"

	},
	divider: {
		backgroundColor: "#6C757D",
	},
}));

const Projects = () => {
	const classes = useStyles();
	return (
		<Box component="div" className={classes.mainContainer}>
			<Grid container justify="center">
				<Grid item xs={12} md={12}>
					<div className={classes.title}>Creating Chaos and Chasing Dreams: A Tale of My Academic and Hobby Projects!</div>
				</Grid>
				{/* Projects */}
				{projects.map((project, i) => (
					<Grid item xs={12} sm={8} md={4} key={i}>
						<a href={project.link} className={classes.txt}>
							<Card className={classes.cardContainer}>
								<CardActionArea>
									<CardMedia
										component="img"
										alt={project.name}
										height="300"
										image={project.image}
										className={classes.txt}
									/>
									<CardContent>
										<Typography variant="h3" gutterBottom className={classes.txt}>
											{project.name}
										</Typography>
										<Typography
											variant="body"
											color="textSecondary"
										>
											{project.description}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</a>
					</Grid>
				))}
				<Grid item xs={12} md={12}>
					<Divider className={classes.divider} />
				</Grid>
				<Grid item xs={12} md={12}>
					<div className={classes.title}>Tiny Projects</div>
				</Grid>
				{/* Projects */}
				{smallProjects.map((project, i) => (
					<Grid item xs={12} sm={8} md={4} key={i}>
						<a href={project.link} className={classes.txt}>
							<Card className={classes.cardContainer}>
								<CardActionArea>
									<CardMedia
										component="img"
										alt={project.name}
										height="140"
										image={project.image}
									/>
									<CardContent>
										<Typography variant="h3" gutterBottom>
											{project.name}
										</Typography>
										<Typography
											variant="body"
											color="textSecondary"
										>
											{project.description}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</a>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Projects;
