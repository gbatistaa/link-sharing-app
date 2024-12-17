import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import CustomizeLinks from "./components/Menu/components/Links/CustomizeLinks";
import ProfileDetails from "./components/Menu/components/Profile/ProfileDetails";
import Menu from "./components/Menu/Menu";
import "./css/tailwind.css";

function App(): JSX.Element {
  return (
    <div className="h-auto w-auto transition-all ease-out duration-200">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/login" />} /> */}
          <Route path="/" element={<Navigate to="/menu" />} />

          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />}>
            <Route path="/menu/links" element={<CustomizeLinks />} />
            <Route path="/menu/profile-details" element={<ProfileDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
