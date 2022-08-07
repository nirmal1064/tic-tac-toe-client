import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography
} from "@mui/material";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import { useUser } from "../context/UserProvider";
import { ActionType } from "../reducers/userReducer";

const drawerWidth = 240;

const links = [
  { to: "/", text: "Home" },
  { to: "/room", text: "Room" }
];

const NavBar = () => {
  const { dispatch } = useUser();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    API.post("/api/logout").then((res: AxiosResponse) => {
      const { data } = res;
      console.log(data);
      dispatch({ type: ActionType.LogOut });
    });
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Tic Tac Toe
      </Typography>
      <Divider />
      <List>
        {links.map(({ to, text }) => (
          <ListItem key={to} disablePadding>
            <ListItemButton sx={{ justifyContent: "center" }}>
              <Link to={to} style={{ textDecoration: "none", color: "black" }}>
                {text}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Logout"} onClick={handleLogout} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }} mb="2rem">
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            Tic Tac Toe
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {links.map(({ to, text }) => (
              <Button key={to} sx={{ color: "#fff" }}>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={to}>
                  {text}
                </Link>
              </Button>
            ))}
            <Button sx={{ color: "#fff" }} onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
