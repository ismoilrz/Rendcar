import { AssetsPage, BookingPage, HomePage, ServicePage, SettingPage } from "../pages";
import AssetsCar from "../pages/assets/car";
import Audi from "../pages/audi/audi";
import Bmw from "../pages/bmw/bmw";
import Lambo from "../pages/lambo/lambo";
import Merc from "../pages/merc/merc";
import Porsche from "../pages/porsche/porsche";
import SellCarsPage from "../pages/sellCars";

export const routes = [
    {
        id: 1,
        path: "",
        element: <HomePage />,
    },
    {
        id: 2,
        path: "/assets",
        element: <AssetsPage />,
    },
    {
        id: 3,
        path: "/booking",
        element: <BookingPage />,
    },
    {
        id: 4,
        path: "/sell",
        element: <SellCarsPage />,
    },
    {
        id: 5,
        path: "/service",
        element: <ServicePage />,
    },
    {
        id: 6,
        path: "/setting",
        element: <SettingPage />
    },
    {
        id: 7,
        path: "/lambo",
        element: <Lambo />
    },
    {
        id: 8,
        path: "/bmw",
        element: <Bmw />
    },
    {
        id: 9,
        path: "/merc",
        element: <Merc />
    },
    {
        id: 10,
        path: "/porsche",
        element: <Porsche />
    },
    {
        id: 11,
        path: "/audi",
        element: <Audi />
    },
    {
        id: 12,
        path: "assets/car",
        element: <AssetsCar />
    },
    {
        id: 13,
        path: "/lambo/assets/car",
        element: <AssetsCar />
    },
    {
        id: 14,
        path: "/audi/assets/car",
        element: <AssetsCar />
    },
    {
        id: 15,
        path: "/bmw/assets/car",
        element: <AssetsCar />
    },
    {
        id: 16,
        path: "/porsche/assets/car",
        element: <AssetsCar />
    },
    {
        id: 17,
        path: "/merc/assets/car",
        element: <AssetsCar />
    },
]