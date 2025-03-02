import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const navItems = ['Home', 'Components', 'Pages', 'Docs'];

const Nav = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setOpenDrawer(open);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Blog
                    </Typography>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        // onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                        ))}
                        <Button variant="outlined" color="inherit" sx={{ mr: 2, ml: 2 }}>Sign In</Button>

                        <Button variant="contained" color="warning">Purchase</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                {/* Drawer */}
                <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
                    <List>
                        <ListItem button onClick={toggleDrawer(false)}>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button onClick={toggleDrawer(false)}>
                            <ListItemText primary="About" />
                        </ListItem>
                        <ListItem button onClick={toggleDrawer(false)}>
                            <ListItemText primary="Contact" />
                        </ListItem>
                        <ListItem button onClick={toggleDrawer(false)}>
                            <ListItemText primary="Login" />
                        </ListItem>
                    </List>
                </Drawer>
            </nav>
        </Box>
    );
}

export default Nav;
