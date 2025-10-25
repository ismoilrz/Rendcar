import { lazy } from "react";

const HomePage = lazy(() => import("./home"));
const AssetsPage = lazy(() => import("./assets/index"));
const BookingPage = lazy(() => import("./booking/index"));
const SellCars = lazy(() => import("./sellCars/index"));
const ServicePage = lazy(() => import("./service/index"));
const SettingPage = lazy(() => import("./setting/index"));

export {HomePage, AssetsPage, BookingPage, SellCars, ServicePage, SettingPage}
