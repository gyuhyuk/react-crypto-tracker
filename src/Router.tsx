import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

interface RouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

const Router = ({ toggleDark, isDark }: RouterProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId/*" element={<Coin isDark={isDark} />} />
        <Route path="/" element={<Coins toggleDark={toggleDark} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
