import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, StylesProvider } from "@material-ui/core";

import Home from "./components/Home";
import Resume from "./components/Resume/index";
import Navbar from "./components/General/Navbar";
import Projects from "./components/Projects/index";
import Certificates from "./components/Certificates";

import theme from "./styles/theme."
import "./styles/App.css";

function App() {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/resume" component={Resume} />
					<Route exact path="/projects" component={Projects} />
					<Route
						exact
						path="/publications"
						component={Certificates}
					/>
				</Switch>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
