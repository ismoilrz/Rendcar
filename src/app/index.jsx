import { Suspense } from "react";
import HeaderCom from "../components/Header";
import MenuBar from "../components/menuBar";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import { CarProvider } from "../CarContext";

const App = () => {
  return (
    <CarProvider>
      <div className="wrap">
        <div className="menu">
          <MenuBar />
        </div>
        <main>
          <header>
            <HeaderCom />
          </header>
          <section className="content">
            <Suspense>
              <Routes>
                {routes.map((item, index) => (
                  <Route key={index} path={item.path} element={item.element} />
                ))}
              </Routes>
            </Suspense>
          </section>
        </main>
      </div>
    </CarProvider>
  );
};

export default App;
