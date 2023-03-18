import * as React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";

export const Frequent_question = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="m-2">
        <ListItemButton
          onClick={handleClick}
          sx={{ backgroundColor: "rgb(66,66,66)","&:hover": {backgroundColor: "rgb(66,66,66)"}}}
        >
          <ListItemText
            primary={props.heading}
            sx={{ backgroundColor: "rgb(66,66,66)" }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{ backgroundColor: "rgb(66,66,66)" }}
        >
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemText
                primary={props.content}
                sx={{ backgroundColor: "rgb(66,66,66)" }}
              />
            </ListItemButton>
          </List>
        </Collapse>
      </div>
    </>
  );
};
