import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryProvider from "./context/CountryContext";
import Homepage from "./pages/Homepage";
import CountryPage from "./pages/CountryPage";

export default function App() {
  return (
    <CountryProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/:name" element={<CountryPage />} />
        </Routes>
      </BrowserRouter>
    </CountryProvider>
  );
}
