import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieScreen from "./components/MovieScreen";
import Header from "./components/Header";
import TimeScreen from "./components/TimeScreen";
import SeatsScreen from "./components/SeatsScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieScreen />} />
        <Route path="/filme/:id" element={<TimeScreen />} />
        <Route path="/sessao/:id" element={<SeatsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
