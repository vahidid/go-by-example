import React, { Props, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Styles from "./style";
import { Drawer, Hidden, Typography, useTheme } from "@material-ui/core";
import { IProps } from "./interfaces";
import Content from "../Content";
import contents from "../../Contents/contents";
import ListItemLink from "../ListItemLink";

function ResponsiveDrawer(props: IProps) {
	const theme = useTheme();

	const classes = Styles();

	const contentsArray = contents;

	const drawerCointainer = (
		<div>
			<div className={classes.toolbar}>
				<Typography variant="h6" noWrap>
					Go By Example
				</Typography>{" "}
			</div>
			<Divider />
			<List>
				{Object.entries(contentsArray).map(([key, value]) => (
					<ListItemLink key={key} href={`/${key}`}>
						<ListItemText primary={value.en} secondary={value.fa} />
					</ListItemLink>
				))}
			</List>
		</div>
	);

	return (
		<div className={classes.root}>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						variant="temporary"
						anchor={theme.direction === "rtl" ? "right" : "left"}
						open={props.status}
						onClose={() => props.onClose()}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawerCointainer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawerCointainer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />

				<Content />
			</main>
		</div>
	);
}

export default ResponsiveDrawer;
