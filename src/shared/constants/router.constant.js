import S01Component from "../../pages/s01/s01.component";
import S02Component from "../../pages/s02/s02.component";
import NotFound from "../../pages/s404/s404.component";

export const SCREEN = {
  s01: {
    id: "s01",
    path: "/s01",
    title: "Màn hình s01",
    component: <S01Component />,
  },
  s02: {
    id: "s02",
    path: "/",
    title: "Home Page",
    component: <S02Component />,
  },
  s404: {
    id: "s404",
    path: "/*",
    title: "404 Page",
    component: <NotFound />,
  },
};
