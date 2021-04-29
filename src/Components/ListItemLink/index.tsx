import { ListItem, ListItemProps } from "@material-ui/core";

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
	return <ListItem button component="a" {...props} />;
}

export default ListItemLink;
