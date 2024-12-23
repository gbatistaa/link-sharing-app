import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import CustomizeLinks from "./components/Menu/components/Links/CustomizeLinks";
import ProfileDetails from "./components/Menu/components/Profile/ProfileDetails";
import Menu from "./components/Menu/Menu";
import Preview from "./components/Preview";
import "./css/tailwind.css";

function App(): JSX.Element {
  return (
    <div className="h-auto w-auto transition-all ease-out duration-200">
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/preview" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Navigate to="/menu/links" />} />
          <Route path="/menu" element={<Menu />}>
            <Route path="/menu/links" element={<CustomizeLinks />} />
            <Route path="/menu/profile-details" element={<ProfileDetails />} />
          </Route>
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
