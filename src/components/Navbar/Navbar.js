import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
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
	rightoption: {
		display: "flex",
		marginBottom: 0,
		marginLeft: "auto",
		padding: "0 5px",
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},
	leftoption: {
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},
}));

export default function Header() {
	const classes = useStyles();
	const handleMobileMenuOpen = (event) => {
		setState({
			left: true,
		});
	};
	const [state, setState] = React.useState({
		left: false,
	});
	const hideDrawer = () => {
		setState({
			left: false,
		});
	};
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
						<Link
							activeClass="active"
							onClick={hideDrawer}
							to="Navbar"
							spy={true}
							smooth={true}
							offset={0}
							duration={0}>
							<Typography component={"span"} className="option1">
								HOME
							</Typography>
						</Link>
					</li>
					<li className="home_name1">
						<Link
							activeClass="active"
							onClick={hideDrawer}
							to="about"
							spy={true}
							smooth={true}
							offset={0}
							duration={0}>
							<Typography component={"span"} className="option">
								ABOUT
							</Typography>
						</Link>
					</li>
					<li className="home_name1">
						<Link
							activeClass="active"
							onClick={hideDrawer}
							to="project"
							spy={true}
							smooth={true}
							offset={0}
							duration={0}>
							<Typography component={"span"} className="option">
								PROJECTS
							</Typography>
						</Link>
					</li>
					<li className="home_name1">
						<Link
							to="experience"
							spy={true}
							smooth={true}
							offset={0}
							onClick={hideDrawer}
							duration={0}>
							<Typography component={"span"} className="option">
								EXPERIENCE
							</Typography>
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
						onOpen={toggleDrawer(anchor, true)}>
						{list(anchor)}
					</SwipeableDrawer>
				</React.Fragment>
			))}
		</div>
	);

	return (
		<div id="Navbar">
			<AppBar className="appbar">
				<Toolbar>
					<div className={classes.leftoption}>
						<Link to="Navbar" spy={true} smooth={true} offset={0} duration={0}>
							<Typography component={"span"} className="option">
								HOME
							</Typography>
						</Link>
					</div>
					<div className={classes.rightoption}>
						<div className="rightoptionmore">
							<Link to="about" spy={true} smooth={true} offset={0} duration={0}>
								<Typography component={"span"} className="option">
									ABOUT
								</Typography>
							</Link>
							<Link
								to="project"
								spy={true}
								smooth={true}
								offset={0}
								duration={0}>
								<Typography component={"span"} className="option">
									PROJECTS
								</Typography>
							</Link>
							<Link
								to="experience"
								spy={true}
								smooth={true}
								offset={0}
								duration={0}>
								<Typography component={"span"} className="option">
									EXPERIENCE
								</Typography>
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
