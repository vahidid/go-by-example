import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { blue } from "@material-ui/core/colors";
import { VazirCodeWoff, VazirCodeTtf, VazirCodeWoff2 } from "./fonts";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: blue[500],
		},
		secondary: {
			main: green[500],
		},
	},
	typography: {
		fontFamily: ['"VazirCode"'].join(","),
	},
	overrides: {
		MuiCssBaseline: {
			"@global": {
				"@font-face": [VazirCodeTtf, VazirCodeWoff, VazirCodeWoff2],
			},
		},
	},
});

export default theme;
