import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BannerMessage } from "../app/model/bannerMessage.model";
// import swal from "@sweetalert/with-react";

/* * initial State */
export interface InitialState {
  banner: BannerMessage;
  show: boolean;
  loading: boolean;
}

const initialState: InitialState = {
  banner: {} as BannerMessage,
  show: false,
  loading: false,
};

const bannerMessageSlice = createSlice({
  name: "bannerMessage",
  initialState,
  reducers: {
    BannerMessageLoadingStatus: (state: InitialState) => {
      state.loading = true;
    },

    FetchBannerMessage: (
      state: InitialState,
      action: PayloadAction<BannerMessage>
    ) => {
      // console.log("Banner Payload", action.payload, !!action.payload.message.match(/\w+/));
      state.loading = false;
      state.banner = action.payload;
      state.show = !!action.payload.message.match(/\w+/);
    },

    UpdateBannerMessage: (
      state: InitialState,
      action: PayloadAction<BannerMessage>
    ) => {
      state.loading = false;
      state.banner = action.payload;
      state.show = !!action.payload.message.match(/\w+/);
      //   swal({
      //     title: "Banner Message Updated!",
      //     text: "Banner Message Updated.",
      //     icon: "success",
      //   });
    },

    BannerMessageToggleDisplay: (state: InitialState) => {
      state.show = !state.show;
    },
    //Todo Add error handling code
  },
});

export default bannerMessageSlice.reducer;
export const {
  BannerMessageLoadingStatus,
  FetchBannerMessage,
  UpdateBannerMessage,
  BannerMessageToggleDisplay,
} = bannerMessageSlice.actions;
