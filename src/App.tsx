import React, { useState } from "react";
import clsx from "clsx";
import "./AppStyle.ts";
import { Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import ResponsiveDrawer from "./Components/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import Styles from "./AppStyle";

function App() {
	const [open, setOpen] = useState(false);
	const classes = Styles();

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className="App">
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					edge="start"
					className={clsx(classes.menuButton, open && classes.hide)}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap>
					Go By Example
				</Typography>
			</Toolbar>
			<ResponsiveDrawer onClose={handleDrawerClose} status={open} />
		</div>
	);
}

export default App;
