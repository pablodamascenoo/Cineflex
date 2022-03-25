import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieScreen from "./components/MovieScreen";
import Header from "./components/Header";
import TimeScreen from "./components/TimeScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieScreen />} />
        <Route path="/filme/:id" element={<TimeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
