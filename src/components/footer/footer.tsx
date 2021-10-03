import { makeStyles, Typography, Grid, IconButton } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { FC, ReactElement } from "react";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const useStyles = makeStyles((theme) => ({
  itemLeft: { textAlign: "left", float: "left" },
  itemCenter: { textAlign: "center" },
  itemRight: { textAlign: "right", float: "right" },
}));

interface ChildProps {
  darkMode: any;
  setDarkMode: (mode: boolean) => void;
}

const Footer: FC<ChildProps> = (props): ReactElement => {
  const classes = useStyles();

  const applyLightTheme = () => {
    props.setDarkMode(false);
    window.localStorage.setItem("theme", "light");
  };
  const applyDarkTheme = () => {
    props.setDarkMode(true);
    window.localStorage.setItem("theme", "dark");
  };

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={6} sm={6} className={classes.itemLeft}>
          <Typography variant="body1" color="inherit">
            © 2021 ReactNextGen, All Rights Reserved.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} className={classes.itemRight}>
          <IconButton
            onClick={() => {
              props.darkMode ? applyLightTheme() : applyDarkTheme();
            }}
          >
            {props.darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          : {props.darkMode ? "Light" : "Dark"}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
