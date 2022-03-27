import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import MovieScreen from "./components/MovieScreen";
import Header from "./components/Header";
import TimeScreen from "./components/TimeScreen";
import SeatsScreen from "./components/SeatsScreen";
import SuccessScreen from "./components/SuccessScreen";

export default function App() {
  const [objSubmit, SetObjSubmit] = useState({});

  function getObj(obj) {
    SetObjSubmit({ ...obj });
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieScreen />} />
        <Route path="/filme/:id" element={<TimeScreen />} />
        <Route path="/sessao/:id" element={<SeatsScreen getObj={getObj} />} />
        <Route path="/sucesso" element={<SuccessScreen obj={objSubmit} />} />
      </Routes>
    </BrowserRouter>
  );
}
