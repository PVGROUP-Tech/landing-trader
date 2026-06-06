import ReactPixel from "react-facebook-pixel";

const PIXEL_ID = "1495705125366593";

export const initPixel = () => {
  ReactPixel.default.init(PIXEL_ID);
  ReactPixel.default.pageView();
};

export const trackLead = () => {
  ReactPixel.default.track("Lead");
};