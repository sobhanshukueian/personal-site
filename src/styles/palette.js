import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

const palette = {
	black,
	white,
	primary: {
		contrastText: white,
		dark: "#001226",
		main: "#232662",
		light: "#002d5e",
	},
	secondary: {
		contrastText: white,
		dark: colors.blue[900],
		main: "#11c5c5",
		light: colors.blue["A400"],
	},
	success: {
		contrastText: white,
		dark: colors.green[900],
		main: colors.green[600],
		light: colors.green[400],
	},
	info: {
		contrastText: white,
		dark: colors.blue[900],
		main: colors.blue[600],
		light: colors.blue[400],
	},
	paper: {
		main: "#F5F5F5",
	},
	warning: {
		contrastText: white,
		dark: colors.orange[900],
		main: colors.orange[600],
		light: colors.orange[400],
	},
	error: {
		contrastText: white,
		dark: colors.red[900],
		main: colors.red[600],
		light: colors.red[400],
	},
	text: {
		primary: colors.blueGrey[900],
		secondary: colors.blueGrey[600],
		contrast: white,
		link: colors.blue[600],
	},
	background: {
		default: "#F4F6F8",
		paper: white,
	},
	icon: colors.blueGrey[600],
	divider: colors.grey[200],
	gray: "#E7E7E7",
	lightgray: "#F2F6F7",
};

export default palette;
