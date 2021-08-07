import React from "react";
import { Alert } from "@material-ui/lab";
import { RootState } from "../../reduxStore/store";
import { makeStyles, Link } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { BannerMessageToggleDisplay } from "../../modulesSlice/bannerMessageSlice";
import { addClasses, commonStyle } from "../../assets/styles/index";

const useStyle = makeStyles((theme) => ({
  text: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "white",
    lineHeight: "normal",
    verticalAlign: "middle",
  },
  link: {
    color: "#eaeaea",
    "&:hover": {
      color: "white",
    },
  },
}));

export const Banner = () => {
  const classes = useStyle();
  const commonClasses = commonStyle();
  const dispatch = useDispatch();
  const { banner, show } = useSelector((state: RootState) => state.bannerMessageReducer);

  return show ? (
    <Alert
      severity="info"
      variant="filled"
      className={commonClasses.br_0}
    >
      <span
        className={classes.text}
        dangerouslySetInnerHTML={{ __html: banner?.message }}
      />
      <Link
        className={addClasses(commonClasses.ml_2, classes.text, classes.link)}
        component="button"
        onClick={() => {
          dispatch(BannerMessageToggleDisplay());
        }}
      >
        dismiss
      </Link>
    </Alert>
  ) : null;
};
