import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

const ListItems = (props) => {
  return (
    <div>
      {props.title && <ListSubheader inset>props.title</ListSubheader>}
      <ListItem button onClick={props.route}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItem>
    </div>
  );
};

export default ListItems;
