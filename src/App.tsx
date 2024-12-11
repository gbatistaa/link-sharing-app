import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Menu from "./components/Menu";
import "./css/tailwind.css";

function App(): JSX.Element {
  return (
    <div className="h-auto w-auto transition-all ease-out duration-200">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/login" />} /> */}
          <Route path="/" element={<Navigate to="/menu" />} />

          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
