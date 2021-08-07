import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Menu, MenuItem } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { commonStyle } from "../../assets/styles/index";

export const SubMenu = (props: any) => {
  const { tab } = props;
  const commonClasses = commonStyle();
  // console.log("taps", tab);
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const performAction = (action: any) => {
    handleClose();
    setTimeout(() => {
      if (action) {
        action();
      }
    }, 300);
  };

  return (
    <div>
      <Button
        aria-controls={"simple-menu-" + tab.id}
        aria-haspopup="true"
        onClick={openMenu}
      >
        {tab.title}
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id={"simple-menu-" + tab.id}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {tab.links.map((link: any, index: number) => {
          if (!link.url) {
            return (
              <MenuItem onClick={() => performAction(link.action)} key={index}>
                <>{link.render ? link.render() : link.text}</>
              </MenuItem>
            );
          } else {
            return (
              <NavLink
                to={link.url}
                key={index}
                className={commonClasses.navLink}
              >
                <MenuItem onClick={() => performAction(link.action)}>
                  <>{link.render ? link.render() : link.text}</>
                </MenuItem>
              </NavLink>
            );
          }
        })}
      </Menu>
    </div>
  );
};
