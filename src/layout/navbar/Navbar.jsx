import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import StrollerOutlinedIcon from "@mui/icons-material/StrollerOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import InputBase from "@mui/material/InputBase";
import logo from "../../Assets/icon.png";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";

export const Navbar = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
        display: "flex",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
        display: "flex",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <AccountCircleOutlinedIcon />
        </IconButton>
      </MenuItem>

      <MenuItem>
        <IconButton size="large" color="inherit">
          <GridOnOutlinedIcon />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar sx={{ backgroundColor: "white", position: "static" }}>
        <Toolbar variant="dense">
          <img src={logo} width="30px" height="30px" sx={{ mr: 2 }} />
          <IconButton>
            <InputBase
              placeholder="Search..."
              sx={{
                m1: 3,
                width: "300px",
                edge: "start",
                backgroundColor: "grey",
              }}
            ></InputBase>
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton sx={{ ml: 20, flexDirection: "column" }}>
                <HomeOutlinedIcon />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ borderBottom: "2px solid black" }}
                >
                  Home
                </Typography>
              </IconButton>
              <IconButton sx={{ ml: 2, flexDirection: "column" }}>
                <AccountTreeOutlinedIcon />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  My Network
                </Typography>
              </IconButton>
              <IconButton sx={{ ml: 2, flexDirection: "column" }}>
                <StrollerOutlinedIcon />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Jobs
                </Typography>
              </IconButton>
              <IconButton sx={{ ml: 2, flexDirection: "column" }}>
                <ChatBubbleOutlineOutlinedIcon />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Messaging
                </Typography>
              </IconButton>
              <IconButton sx={{ ml: 2, flexDirection: "column" }}>
                <NotificationsActiveOutlinedIcon />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    borderRadius: "0 0 10px 10px solid green",
                  }}
                >
                  Notification
                </Typography>
              </IconButton>
              <IconButton sx={{ ml: 2, flexDirection: "column" }}>
                <AccountCircleOutlinedIcon />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Me
                </Typography>
              </IconButton>

              <IconButton sx={{ flexDirection: "column" }}>
                <GridOnOutlinedIcon />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  For Business
                </Typography>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton onClick={handleMobileMenuOpen}>
                <HomeOutlinedIcon />
                <AccountTreeOutlinedIcon />
                <StrollerOutlinedIcon />
                <ChatBubbleOutlineOutlinedIcon />
                <NotificationsActiveOutlinedIcon />
                <MoreIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* <Search>

            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
        </Search> */}
      {renderMobileMenu}
    </>
  );
};
