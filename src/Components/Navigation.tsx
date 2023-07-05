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
  const navigate = useNavigate();
  const sContext = useContext(GameContext);
  const [searched, setSearched] = useState("");
  console.log(searched);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function handleEnter(event: React.KeyboardEvent) {
    if (event.key === "Enter" && searched !== "") {
      sContext.setSearched(searched);
      setSearched("")
      navigate("/searchpage");
    }
  }

  return (
    <div className="navSpace">
      <AppBar
        position="static"
        style={{ background: "#FFFFFF", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                height: "50px",
                width: "50px",
                margin: "0 auto",
              }}
            >
              <img src={controller} alt="controller" />
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                color: "black",
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon style={{fontSize:"1.1em"}} />
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem>
                  <NavLink
                    to="/"
                    onClick={handleCloseNavMenu}
                    className="MenuLinkStyles"
                  >
                    Home
                  </NavLink>
                </MenuItem>

                <MenuItem>
                  <NavLink
                    to="/games"
                    onClick={handleCloseNavMenu}
                    className="MenuLinkStyles"
                  >
                    Games
                  </NavLink>
                </MenuItem>

                <MenuItem>
                  <NavLink
                    to="/ranking"
                    onClick={handleCloseNavMenu}
                    className="MenuLinkStyles"
                  >
                    Ranking
                  </NavLink>
                </MenuItem>

              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 8,
                height: "50px",
                width: "50px",
              }}
            >
              <img src={controller} alt="controller" className="con" />
            </Typography>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <NavLink
                to="/"
                onClick={handleCloseNavMenu}
                className="NavLinkStyles"
              >
                Home
              </NavLink>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <NavLink
                to="/games"
                onClick={handleCloseNavMenu}
                className="NavLinkStyles"
              >
                Games
              </NavLink>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <NavLink
                to="/ranking"
                onClick={handleCloseNavMenu}
                className="NavLinkStyles"
              >
                Ranking
              </NavLink>
            </Box>

            <Box sx={{ flexGrow: 1}}>
              <Menu
                sx={{ mt: "45px"}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              ></Menu>
            </Box>

            <div className="inputSearchContainer">
              <SearchIcon className="magnify" />
              <input
                className="inputSearch"
                placeholder="Search..."
                value={searched}
                onChange={(e) => setSearched(e.target.value)}
                onKeyDown={(e) => handleEnter(e)}
              />
            </div>

            <Button className="logBtn" href="/login">
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navigation;
