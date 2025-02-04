import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const menuItems = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/#about" },
  { label: "Services", path: "/#services" },
  { label: "Contact", path: "/#contact" },
  { label: "Admin", path: "/admin" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  return (
    <AppBar 
      position="sticky"
      elevation={0}
      sx={{ 
        background: "#6d1493", 
        backdropFilter: "blur(10px)", 
        borderBottom: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "none",
        px: 3,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Logo */}
        <Box>
          <Link to="/">
            <img src={logo} alt="Logo" style={{ height: "30px" }} />
          </Link>
        </Box>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          {menuItems.map((item) => (
            <Typography 
              key={item.label}
              variant="h6" 
              component={Link} 
              to={item.path}
              sx={{
                color: "white",
                textDecoration: "none",
                fontWeight: 500,
                position: "relative",
                "&:hover": {
                  color: "#ffd700",
                  transition: "color 0.3s ease",
                },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton 
          color="inherit" 
          onClick={toggleDrawer} 
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer} sx={{ "& .MuiDrawer-paper": { width: 250, backgroundColor: "#fff" } }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon sx={{ color: "#6F3193" }} />
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.label} component={Link} to={item.path} onClick={toggleDrawer}>
                <ListItemText primary={item.label} sx={{ color: "#6F3193", textAlign: "center" }} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
