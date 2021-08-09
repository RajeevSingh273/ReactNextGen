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
    br_0: {
      borderRadius: 0,
    },
    
  m_0: { margin: '0px !important' },
  m_1: { margin: theme.spacing(1) + 'px !important' },
  m_2: { margin: theme.spacing(2) + 'px !important' },
  m_3: { margin: theme.spacing(3) + 'px !important' },
  mr_0: { marginRight: '0px !important' },
  mr_1: { marginRight: theme.spacing(1) + 'px !important' },
  mr_2: { marginRight: theme.spacing(2) + 'px !important' },
  mr_3: { marginRight: theme.spacing(3) + 'px !important' },
  ml_0: { marginLeft: '0px !important' },
  ml_1: { marginLeft: theme.spacing(1) + 'px !important' },
  ml_2: { marginLeft: theme.spacing(2) + 'px !important' },
  ml_3: { marginLeft: theme.spacing(3) + 'px !important' },
  mt_0: { marginTop: '0px !important' },
  mt_1: { marginTop: theme.spacing(1) + 'px !important' },
  mt_2: { marginTop: theme.spacing(2) + 'px !important' },
  mt_3: { marginTop: theme.spacing(3) + 'px !important' },
  mb_0: { marginBottom: '0px !important' },
  mb_1: { marginBottom: theme.spacing(1) + 'px !important' },
  mb_2: { marginBottom: theme.spacing(2) + 'px !important' },
  mb_3: { marginBottom: theme.spacing(3) + 'px !important' },
  p_0: { padding: '0px !important' },
  p_1: { padding: theme.spacing(1) + 'px !important' },
  p_2: { padding: theme.spacing(2) + 'px !important' },
  p_3: { padding: theme.spacing(3) + 'px !important' },
  pr_0: { paddingRight: '0px !important' },
  pr_1: { paddingRight: theme.spacing(1) + 'px !important' },
  pr_2: { paddingRight: theme.spacing(2) + 'px !important' },
  pr_3: { paddingRight: theme.spacing(3) + 'px !important' },
  pl_0: { paddingLeft: '0px !important' },
  pl_1: { paddingLeft: theme.spacing(1) + 'px !important' },
  pl_2: { paddingLeft: theme.spacing(2) + 'px !important' },
  pl_3: { paddingLeft: theme.spacing(3) + 'px !important' },
  pt_0: { paddingTop: '0px !important' },
  pt_1: { paddingTop: theme.spacing(1) + 'px !important' },
  pt_2: { paddingTop: theme.spacing(2) + 'px !important' },
  pt_3: { paddingTop: theme.spacing(3) + 'px !important' },
  pb_0: { paddingBottom: '0px !important' },
  pb_1: { paddingBottom: theme.spacing(1) + 'px !important' },
  pb_2: { paddingBottom: theme.spacing(2) + 'px !important' },
  pb_3: { paddingBottom: theme.spacing(3) + 'px !important' },
  })
);
