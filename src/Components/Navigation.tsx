import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import controller from '../LPRimg/3743230.png'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import './ComponentStyles/NavigationStyles.css'

const Navigation = () => {

    const [searched, setSearched] = React.useState("")
    console.log(searched)

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '50%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
        },
    }));

    const ResponsiveAppBar = () => {

        const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
        const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

        const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorElNav(event.currentTarget);
        };

        const handleCloseNavMenu = () => {
            setAnchorElNav(null);
        };

        const handleCloseUserMenu = () => {
            setAnchorElUser(null);
        };

        function test(event: string) {
            console.log(event)
        }

        return (
            <AppBar position="static" style={{ background: '#FFFFFF', boxShadow: 'none' }}>
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
                                height: '50px',
                                width: '50px',
                                margin: '0 auto'
                            }}
                        >
                            <img src={controller} alt="controller" />
                        </Typography>

                        <Box sx={{ flexGrow: 1, color: "black", display: { xs: 'flex', md: 'none' } }}>
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
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >

                                <MenuItem>
                                    <NavLink
                                        to='/games'
                                        onClick={handleCloseNavMenu}
                                        className="MenuLinkStyles"
                                    >
                                        Games
                                    </NavLink>
                                </MenuItem>

                                <MenuItem>
                                    <NavLink
                                        to='/ranking'
                                        onClick={handleCloseNavMenu}
                                        className="MenuLinkStyles"
                                    >
                                        Ranking
                                    </NavLink>
                                </MenuItem>

                                <MenuItem>
                                    <NavLink
                                        to='/login'
                                        onClick={handleCloseNavMenu}
                                        className="MenuLinkStyles"
                                    >
                                        Login
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
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 8,
                                height: '50px',
                                width: '50px',
                            }}
                        >
                            <img src={controller} alt="controller" className='con' />
                        </Typography>

                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            <NavLink
                                to='/'
                                onClick={handleCloseNavMenu}
                                className="NavLinkStyles"
                            >
                                Home
                            </NavLink>
                        </Box>

                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            <NavLink
                                to='/games'
                                onClick={handleCloseNavMenu}
                                className="NavLinkStyles"
                            >
                                Games
                            </NavLink>
                        </Box>

                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            <NavLink
                                to='/ranking'
                                onClick={handleCloseNavMenu}
                                className="NavLinkStyles"
                            >
                                Ranking
                            </NavLink>
                        </Box>

                        <Box sx={{ flexGrow: 1 }}>
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
                            </Menu>
                        </Box>


                        <Search className="searchContainer" style={{ background: '#ECECEC', color: 'black' }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                // onChange={e => test(e.target.value)}
                                onChange={(e) => setSearched(e.target.value)}
                                // value={searched}
                            />
                        </Search>

                        <Button className="logBtn" href='/login'
                        >Login</Button>

                    </Toolbar>
                </Container>
            </AppBar>
        )

    }

    return (<div className='navSpace'><ResponsiveAppBar /></div>)
}

export default Navigation