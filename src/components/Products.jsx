import { useState, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

import FilterSection from "./FilterSection";
import ProductList from "./ProductList";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Products(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div>
        <span onClick={handleClick}>Hide Filters</span>
      </div>
      {open && (
        <div>
          {/* <Button variant="outlined" onClick={handleClickOpen}>
            Open full-screen dialog
          </Button> */}
          <Dialog
            fullScreen
            open={open}
            onClose={handleClick}
            TransitionComponent={Transition}
            className="dialog-filter"
          >
            <AppBar sx={{ position: "relative" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClick}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant="h6"
                  component="div"
                >
                  Sound
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClick}>
                  save
                </Button>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem button>
                <ListItemText primary="Phone ringtone" secondary="Titania" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary="Default notification ringtone"
                  secondary="Tethys"
                />
              </ListItem>
            </List>
          </Dialog>
        </div>
      )}
      <div className="grid grid-filter-column pt-20">
        {open && (
          <div className="filter-section">
            <FilterSection />
          </div>
        )}
        <div className="products-view">
          <ProductList />
        </div>
      </div>
    </>
  );
}
