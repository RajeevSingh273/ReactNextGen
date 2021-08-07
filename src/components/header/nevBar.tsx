import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  makeStyles,
  Toolbar,
  Box,
  Typography,
  Hidden,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  Divider,
  AppBar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import logo from "../../logo.svg";
import { SubMenu } from "./subMenu";
import { commonStyle } from "../../assets/styles/index";

const useStyles = makeStyles((theme) => ({
  root: {
    "& button": {
      color: theme.palette.primary.contrastText,
      fontSize: "1.2em",
      textDecoration: "none",
    },
    "& a": {
      textDecoration: "none",
      paddingLeft: 13,
    },
  },
}));

interface ChildProps {
  darkMode: any;
  setDarkMode: (mode: boolean) => void;
}

export const NavBar: React.FC<ChildProps> = (props) => {
  const classes = useStyles();
  const commonClasses = commonStyle();
  const [drawerPosition, setDrawerPosition] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const applyLightTheme = () => {
    props.setDarkMode(false);
    window.localStorage.setItem("theme", "light");
  };
  const applyDarkTheme = () => {
    props.setDarkMode(true);
    window.localStorage.setItem("theme", "dark");
  };

  const homeTab = { text: "Home", url: "/" };
  const aboutTab = { text: "About", url: "/about" };
  const helpTab = {
    title: "Help",
    links: [
      { text: "React Help", url: "/help/reachelp" },
      { text: "Redux Help", url: "/help/readuxhelp" },
    ],
  };
  const accountTab = {
    title: "Theme",
    links: [
      {
        text: "Light Switch",
        action: () => {
          props.darkMode ? applyLightTheme() : applyDarkTheme();
        },
        render: () => (
          <>
            {props.darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            &nbsp;Dark Theme: {props.darkMode ? "On" : "Off"}
          </>
        ),
      },
    ],
  };

  const navTabs: any = [];
  navTabs.push(homeTab);
  navTabs.push(aboutTab);
  navTabs.push(helpTab);
  navTabs.push(accountTab);

  const toggleDrawer = (side: string, open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerPosition({ ...drawerPosition, [side]: open });
  };

  const performAction = (action: any) => {
    if (action) {
      action();
    }
  };

  const displaySideList = (side: any) => (
    <Box
      className={commonClasses.navBarShift}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {navTabs.map((tab: any, tabIndex: number) => {
        return tab.title ? (
          <Box key={tabIndex}>
            <List>
              {tab.links.map((link: any, linkIndex: number) => {
                if (!link.url) {
                  return (
                    <ListItem
                      button
                      onClick={() => performAction(link.action)}
                      key={linkIndex}
                    >
                      {link.render ? link.render() : link.text}
                    </ListItem>
                  );
                } else {
                  return (
                    <NavLink
                      to={link.url}
                      key={linkIndex}
                      className={commonClasses.navLink}
                    >
                      <ListItem
                        button
                        onClick={() => performAction(link.action)}
                      >
                        {link.render ? link.render() : link.text}
                      </ListItem>
                    </NavLink>
                  );
                }
              })}
            </List>
            <Divider />
          </Box>
        ) : (
          <Box key={tabIndex}>
            <List>
              <NavLink to={tab.url || "/"} className={commonClasses.navLink}>
                <ListItem button>{tab.text}</ListItem>
              </NavLink>
            </List>
            <Divider />
          </Box>
        );
      })}
    </Box>
  );

  const displayTabs = () => {
    return (
      <>
        <Hidden smDown>
          {navTabs.map((tab: any, index: number) => {
            return tab.title ? (
              <SubMenu tab={tab} key={index} />
            ) : (
              <NavLink
                key={index}
                to={tab.url || "/"}
                className={commonClasses.navLink}
              >
                <Button>{tab.text}</Button>
              </NavLink>
            );
          })}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("right", true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerPosition.right}
            onClose={toggleDrawer("right", false)}
          >
            {displaySideList("right")}
          </Drawer>
        </Hidden>
      </>
    );
  };

  return (
    <AppBar position="fixed" className={commonClasses.navBar}>
      <Toolbar className={classes.root} variant="dense">
        <img src={logo} className={commonClasses.logo} alt="logo" />
        <Typography
          className={commonClasses.appTitle}
          component="div"
          color="inherit"
          noWrap
        >
          <Box textAlign="left" m={1}>
            ReactNextGen
          </Box>
        </Typography>
        <div className={commonClasses.grow} />
        {displayTabs()}
      </Toolbar>
    </AppBar>
  );
};
