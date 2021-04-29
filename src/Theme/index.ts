import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import { VazirCodeWoff, VazirCodeTtf, VazirCodeWoff2 } from "./fonts";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#17a99f",
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
