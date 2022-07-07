import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';
import { logout } from '../../features/Auth/userSlice';

const useStyles = makeStyles()(() => {
  return {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'black !important',
      height: 32,
      padding: '0 30px',
    },
    link: {
      textDecoration: 'none',
      color: 'white',
    },
    overflow: {
      overflow: 'hidden',
    },
    iconClose: {
      width: 50,
      position: 'absolute',
      right: 0,
    },
  };
});

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function Header() {
  const { classes } = useStyles();
  const loginUser = useSelector((state) => state.user.current);
  const dispatch = useDispatch();
  let isLogin = !!loginUser.id;
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleLogout = () => {
    const action = logout();
    dispatch(action);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <AcUnitIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className={classes.link} to="/">
              Trun-shop
            </Link>
          </Typography>

          <NavLink to="/album" className={classes.link}>
            <Button color="inherit">Album</Button>
          </NavLink>
          <NavLink to="/todo" className={classes.link}>
            <Button color="inherit">Todo</Button>
          </NavLink>
          <NavLink to="/redux" className={classes.link}>
            <Button color="inherit">Redux</Button>
          </NavLink>
          <NavLink to="/product" className={classes.link}>
            <Button color="inherit">Product</Button>
          </NavLink>

          {isLogin && (
            <IconButton color="inherit" onClick={handleClickOpenMenu}>
              <AccountCircleIcon />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </IconButton>
          )}
          {isLogin || (
            <Button color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Dialog disableEscapeKeyDown onBackdropClick open={open} onClose={handleClose}>
        <IconButton onClick={handleClose} className={classes.iconClose} style={{ position: 'absolute' }}>
          <FaTimes />
        </IconButton>
        <DialogContent className={classes.overflow}>
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />

              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Đăng kí tài khoản
                </Button>
              </Box>
            </>
          )}

          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />

              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Đăng nhập
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </Box>
  );
}
