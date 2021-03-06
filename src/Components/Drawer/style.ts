import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
		},
		drawer: {
			[theme.breakpoints.up("sm")]: {
				width: drawerWidth,
				flexShrink: 0,
			},
		},
		appBar: {
			[theme.breakpoints.up("sm")]: {
				width: `calc(100% - ${drawerWidth}px)`,
				marginLeft: drawerWidth,
			},
		},
		menuButton: {
			marginRight: theme.spacing(2),
			[theme.breakpoints.up("sm")]: {
				display: "none",
			},
		},
		// necessary for content to be below app bar
		toolbar: {
			...theme.mixins.toolbar,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			color: theme.palette.grey[50],
			flexDirection: "column",
		},
		drawerPaper: {
			width: drawerWidth,
			backgroundColor: `${theme.palette.primary.main} !important`,
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
		linkItems: {
			color: "#fff",
		},
	})
);

export default useStyles;
