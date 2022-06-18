import AcUnitIcon from '@mui/icons-material/AcUnit';
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
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import Register from '../../features/Auth/components/Register';

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
  };
});

export default function Header() {
  const { classes } = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

          <Button color="inherit" onClick={handleClickOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog disableEscapeKeyDown onBackdropClick open={open} onClose={handleClose}>
        <DialogContent className={classes.overflow}>
          <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
