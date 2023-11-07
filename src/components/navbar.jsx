/* eslint-disable react/prop-types */
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  AttachMoney,
  Wallet,
  Summarize,
  Person,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export const Navbar = ({ drawerWidth }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Button sx={{ marginTop: "10px" }}>
        <img width="150px" src="../public/Assiduus_TM_Logo--1-.png" alt="" />
      </Button>
      <Toolbar />
      <List>
        <ListItem disablePadding>
          <NavLink to="/">
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding>
          <NavLink to="/accounts">
            <ListItemButton>
              <ListItemIcon>
                <Wallet />
              </ListItemIcon>
              <ListItemText primary="Accounts" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding>
          <NavLink to="/payroll">
            <ListItemButton>
              <ListItemIcon>
                <AttachMoney />
              </ListItemIcon>
              <ListItemText primary="Payroll" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding>
          <NavLink to="/reports">
            <ListItemButton>
              <ListItemIcon>
                <Summarize />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding>
          <NavLink to="/advisor">
            <ListItemButton>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Advisor" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding>
          <NavLink to="/contacts">
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Contacts" />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </Drawer>
  );
};
