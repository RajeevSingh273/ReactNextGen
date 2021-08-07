import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const commonStyle = makeStyles((theme: Theme) =>
  createStyles({
    //--------------------------------------------------------------
    // Navbar
    // --------------------------------------------------------------
    root: {
      display: "flex",
    },
    grow: {
      flexGrow: 1,
    },
    logo: {
      height: "6vmin",
      pointerEvents: "none",
      animation: "App-logo-spin infinite 10s linear",
    },
    navBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    navLink: { textDecoration: "none", color: "inherit" },
    navBarShift: {
      marginLeft: "3vmin",
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    appTitle: {
      flexGrow: 1,
      fontSize: "1.5em",
      fontWeight: "bold",
      color: "inherit",
      lineHeight: "20px",
    },

    // ----------------------------------------------------------
    // common style
    // ----------------------------------------------------------

    clrDanger: {
      fontWeight: "bold",
      color: theme.palette.error.main,
      "&:hover": {
        color: theme.palette.error.dark,
      },
    },
    clrWarning: {
      fontWeight: "bold",
      color: theme.palette.warning.main,
      "&:hover": {
        color: theme.palette.warning.dark,
      },
    },
    clrInfo: {
      fontWeight: "bold",
      color: theme.palette.info.main,
      "&:hover": {
        color: theme.palette.info.dark,
      },
    },
    clrSuccess: {
      fontWeight: "bold",
      color: theme.palette.success.main,
      "&:hover": {
        color: theme.palette.success.dark,
      },
    },
    labelDanger: {
      fontWeight: "bold",
      color: theme.palette.error.main,
    },
    labelWarning: {
      fontWeight: "bold",
      color: theme.palette.warning.main,
    },
    labelInfo: {
      fontWeight: "bold",
      color: theme.palette.info.main,
    },
    labelSuccess: {
      fontWeight: "bold",
      color: theme.palette.success.main,
    },
    btnDanger: {
      fontWeight: "bold",
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      "& *": {
        color: theme.palette.error.contrastText,
        cursor: "pointer",
        fontWeight: "bold",
      },
      "&:hover": {
        backgroundColor: theme.palette.error.dark,
      },
    },
    btnWarning: {
      fontWeight: "bold",
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.warning.contrastText,
      "& *": {
        color: theme.palette.warning.contrastText,
        cursor: "pointer",
        fontWeight: "bold",
      },
      "&:hover": {
        backgroundColor: theme.palette.warning.dark,
      },
    },
    btnInfo: {
      fontWeight: "bold",
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
      "& *": {
        color: theme.palette.info.contrastText,
        cursor: "pointer",
        fontWeight: "bold",
      },
      "&:hover": {
        backgroundColor: theme.palette.info.dark,
      },
    },
    btnSuccess: {
      fontWeight: "bold",
      backgroundColor: theme.palette.success.main,
      color: theme.palette.success.contrastText,
      "& *": {
        color: theme.palette.success.contrastText,
        cursor: "pointer",
        fontWeight: "bold",
      },
      "&:hover": {
        backgroundColor: theme.palette.success.dark,
      },
    },
  })
);
