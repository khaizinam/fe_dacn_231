import S01Component from "../../pages/s01/s01.component";
import S02Component from "../../pages/s02/s02.component";
import NotFound from "../../pages/s404/s404.component";

export const SCREEN = {
  s01: {
    id: "s01",
    path: "/s01",
    component: <S01Component title="màn hình s01" />,
  },
  s02: {
    id: "s02",
    path: "/",
    component: <S02Component title="Home Page" />,
  },
  s404: {
    id: "s404",
    path: "/*",
    component: <NotFound title="404" />,
  },
};
