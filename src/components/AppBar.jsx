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

import { Link as RouterLink } from "react-router";
import { useState } from "react";

const pages = [
  {
    label: "Dashboard",
    url: "/",
    icon: <HomeIcon></HomeIcon>,
  },
  {
    label: "Post Listing",
    url: "/add",
    icon: <HomeIcon></HomeIcon>,
  },
  {
    label: "Wishlist",
    url: "/wishlist",
    icon: <HomeIcon></HomeIcon>,
  },
];

function ResponsiveAppBar() {
  const currentuserInLocalStorage = localStorage.getItem("user");
  const [user, setUser] = useState(
    currentuserInLocalStorage ? JSON.parse(currentuserInLocalStorage) : 0
  );

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
                  <Typography color="black" sx={{ textAlign: "center" }}>
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
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography color="black" sx={{ display: "inline" }}>
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
