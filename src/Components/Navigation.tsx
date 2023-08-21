import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import controller from "../LPRimg/3743230.png";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import "./ComponentStyles/NavigationStyles.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../Context/GameContext";

const Navigation = () => {
  // const navigate = useNavigate();
  // const sContext = useContext(GameContext);
  // const [searched, setSearched] = useState("");

  const pages = ['Game List', 'Ranking List', 'Search', 'Request a Game'];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // function handleEnter(event: React.KeyboardEvent) {
  //   if (event.key === "Enter" && searched !== "") {
  //     sContext.setSearched(searched);
  //     setSearched("")
  //     navigate("/searchpage");
  //   }
  // }

  return (
    <div>
      <div className="navSpace">
        <AppBar position="static" style={{ backgroundColor: "white", color: "black", padding: '.2% 0', boxShadow:'none', borderBottom: 'solid rgb(218, 218, 218) 1px' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <img src={controller} className="logo" alt="" />
              </Typography>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 1,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 0,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                <img src={controller} className="logo" alt="" />
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: "black" }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' }, color: "black"
                  }}
                >
                  <div className="menuItemContainer">
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography>{page}</Typography>
                      </MenuItem>
                    ))}
                  </div>
                </Menu>
              </Box>


              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => {
                  if (page === "Game List") {
                    return <Button
                      key={page}
                      onClick={() => window.location.href = `/game-list`}
                      className="fullLinks"
                      sx={{ my: 2, color: 'black', display: 'block', textTransform: "none", fontSize: '1.05em', margin: '0 .7%' }}
                    >
                      {page}
                    </Button>
                  }
                  else if (page === "Ranking List") {
                    return <Button
                      key={page}
                      onClick={() => window.location.href = `/ranking-list`}
                      className="fullLinks"
                      sx={{ my: 2, color: 'black', display: 'block', textTransform: "none", fontSize: '1.05em', margin: '0 .7%' }}
                    >
                      {page}
                    </Button>
                  }
                  else if (page === "Search") {
                    return <Button
                      key={page}
                      // onClick={() => window.location.href = `/search`}
                      className="fullLinks"
                      sx={{ my: 2, color: 'black', display: 'block', textTransform: "none", fontSize: '1.05em', margin: '0 .7%' }}
                    >
                      {page}
                    </Button>
                  }
                  else {
                    return <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      className="fullLinks"
                      sx={{ my: 2, color: 'black', display: 'block', textTransform: "none", fontSize: '1.05em', margin: '0 .7%' }}
                    >
                      {page}
                    </Button>
                  }
                })}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <button className="loginBtn">Login</button>

                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </div>
  );
};

export default Navigation;