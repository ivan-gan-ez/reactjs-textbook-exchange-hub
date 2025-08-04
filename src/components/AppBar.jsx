import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ListIcon from "@mui/icons-material/List";

import { Link as RouterLink } from "react-router";
import { useState } from "react";

const pages = [
  {
    label: "Dashboard",
    url: "/",
    icon: <DashboardIcon></DashboardIcon>,
  },
  {
    label: "Post Listing",
    url: "/add",
    icon: <PostAddIcon></PostAddIcon>,
  },
  {
    label: "Wishlist",
    url: "/wishlist",
    icon: <ListIcon></ListIcon>,
  },
];

function ResponsiveAppBar() {
  // now-deleted fake login system

  // const currentuserInLocalStorage = localStorage.getItem("user");
  // const [user, setUser] = useState(
  //   currentuserInLocalStorage ? JSON.parse(currentuserInLocalStorage) : 0
  // );

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            component={RouterLink}
            to={"/"}
            sx={{
              mr: 3,
              display: { xs: "none", md: "flex" },
            }}
          >
            <img src="/src/assets/ipa.svg" height={"50px"} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.url}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.url}
                >
                  <Typography
                    color="black"
                    sx={{ textAlign: "center", fontSize: "15px" }}
                  >
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to={"/"}
            sx={{
              m: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <img src="/src/assets/ipa.svg" height={"50px"} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.url}
                onClick={handleCloseNavMenu}
                component={RouterLink}
                to={page.url}
                color="black"
                startIcon={page.icon}
                sx={{ my: 2 }}
              >
                <Typography
                  color="black"
                  sx={{ display: "inline", fontSize: "20px" }}
                >
                  {page.label}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
