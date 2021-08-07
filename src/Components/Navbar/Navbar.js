import { AppBar, Toolbar, IconButton, Typography, makeStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

function Navbar() {
    const c = useStyles();
    return (
        <div className={c.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={c.title}>
                       Smart Energy Challenge 
                    </Typography>
                    <IconButton edge="end" color="inherit" aria-label="profile">
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
