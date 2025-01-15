import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryProvider from "./context/CountryContext";
import Homepage from "./pages/Homepage";
import CountryPage from "./pages/CountryPage";
import Layout from "./components/Layout";
import ColorModeProvider from "./context/ColorModeContext";

export default function App() {
  return (
    <CountryProvider>
      <ColorModeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="/:name" element={<CountryPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ColorModeProvider>
    </CountryProvider>
  );
}
