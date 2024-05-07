import "./App.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import React, { Suspense, useRef, useState } from "react";
import CommonLoader from "./common/Components/CommonLoader/CommonLoader";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";

const Home = React.lazy(() => import("./components/Home/Home"));

function App() {
  const [width, setWidth] = useState({ leftWidth: 30, rightWidth: 44 });

  const handleClick = (e) => {
    const id = e.currentTarget.id;
    setWidth((prev) => ({
      leftWidth:
        id === "leftButton"
          ? prev?.leftWidth === 30
            ? 12
            : 30
          : prev.leftWidth,
      rightWidth:
        id === "rightButton"
          ? prev?.rightWidth === 44
            ? 12
            : 44
          : prev.rightWidth,
    }));
  };

  console.log(width);
  return (
    <Suspense fallback={<CommonLoader />}>
      <SideBar width={width} handleClick={handleClick}>
        <Header width={width} />
        <Router>
          <Routes>
            <Route path="/" element={<Home width={width} />} />
            <Route path="/login" />
            <Route path="/app/dashboard" />
          </Routes>
        </Router>
      </SideBar>
    </Suspense>
  );
}

export default App;
