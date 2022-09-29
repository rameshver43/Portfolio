import React from "react";
import {makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from '@material-ui/icons/Menu';
import "./Navbar.css";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-scroll";
const useStyles = makeStyles((theme) => ({
  list: {
    width: 200,
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    }, 
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  colorDefault: {
    backgroundColor: "red",
  },
  appbar: {
    backgroundColor: "black",
  },
  rightoption:{
    display: "flex",
    marginBottom: 0,
    marginLeft: "auto",
    padding: "0 5px",
    [theme.breakpoints.down("md")]: {
        display: "none",
      },
},
leftoption:{
    [theme.breakpoints.down("md")]: {
        display: "none",
      },
}

}));

export default function Header() {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
    setState({
      left: true,
    });
  };
  const [state, setState] = React.useState({
    left: false,
  });
const hideDrawer = ()=>{
    setState({
        left: false,
      });
}
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			<Divider />
			<div>
				<ul className="list">
					<li className="home_name">
						<Link onClick={hideDrawer} to="Navbar" spy={true} smooth={true}>
							<Typography className="option1">Rameshver</Typography>
						</Link>
					</li>
					<li className="home_name1">
						<Link onClick={hideDrawer} to="about" spy={true} smooth={true}>
							<Typography className="option">About</Typography>
						</Link>
					</li>
					<li className="home_name1">
						<Link onClick={hideDrawer} to="project" spy={true} smooth={true}>
							<Typography className="option">Projects</Typography>
						</Link>
					</li>
					<li className="home_name1">
						<Link onClick={hideDrawer} to="contact" spy={true} smooth={true}>
							<Typography className="option">Contact</Typography>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);


  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );

  return (
		<div className="header" id="Navbar">
			<AppBar className={classes.appbar}>
				<Toolbar>
					<div className={classes.leftoption}>
						<Link to="Navbar" spy={true} smooth={true}>
							<Typography className="option">Rameshver</Typography>
						</Link>
					</div>
					<div className={classes.rightoption}>
						<div className="rightoptionmore">
							<Link to="about" spy={true} smooth={true}>
								<Typography className="option">About</Typography>
							</Link>
							<Link to="project" spy={true} smooth={true}>
								<Typography className="option">Projects</Typography>
							</Link>
							<Link to="contact" spy={true} smooth={true}>
								<Typography className="option">Contact</Typography>
							</Link>
						</div>
					</div>
					<div className={classes.sectionMobile}>
						<MenuIcon
							className="menu"
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"></MenuIcon>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
		</div>
	);
}
