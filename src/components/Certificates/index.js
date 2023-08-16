import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import publications from "../../constants/Publications";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
	background: "#233",
		// height: "100%",
		textDecoration: "none",
		padding: theme.spacing(2),
		fontFamily: "Sans",

  },
  cardContainer: {
    // width: "100%",
    // maxWidth: 600,
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    fontFamily: "Sans",
    textAlign: "center",
  },
}));

const Certificates = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center" spacing={2}>
        {publications.map((project, i) => (
          <Grid item xs={12} sm={12} md={12} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="subtitle2" className={classes.text}>
                    {project.date} - {project.status}
                  </Typography>
                  <Typography variant="h2" gutterBottom className={classes.text}>
                    <strong>{project.name}</strong>
                  </Typography>
                  <Typography variant="body1" className={classes.text}>
                    <strong>Abstract </strong> <br/> {project.abstract}
                  </Typography>
                  <Typography variant="body1" className={classes.text}>
                    <strong>Introduction </strong> <br/>  {project.introduction.slice(0, 150)}...
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certificates;
