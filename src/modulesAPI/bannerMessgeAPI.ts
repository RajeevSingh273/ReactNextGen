import { Dispatch } from "react";
import { http } from "../modulesAPI/requestAPI";
import { BannerMessage } from "../app/model/bannerMessage.model";
import {
  BannerMessageLoadingStatus,
  FetchBannerMessage,
  UpdateBannerMessage,
} from "../modulesSlice/bannerMessageSlice";
// Remove when calling data form actual API
import axios from "axios";

export const fetchBannerMessage = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(BannerMessageLoadingStatus());
    http.initHttp(false);

    return (
      // Temp banner data: Remove when calling data form actual API
      axios
        .get<BannerMessage>("data/banner.json")
        // http
        // .get<BannerMessage>("/banner")
        .then((res) => dispatch(FetchBannerMessage(res.data)))
        .catch((err) => console.log("err", err))
    );
  };
};

export const updateBannerMessage = (bannerMsg: BannerMessage) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(BannerMessageLoadingStatus());
    return http
      .post<BannerMessage>("/banner", bannerMsg)
      .then((res) => dispatch(UpdateBannerMessage(res.data)))
      .catch((err) => console.log("err", err));
  };
};
