import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import MainPage from "pages/MainPage/MainPage";
import AboutPage from "pages/AboutPage/AboutPage";
import { SetupListPage } from "pages/SetupsPage/SetupListPage";
import { SetupElementPage } from "pages/SetupsPage/SetupElementPage";
import CustomLiveriesPage from "pages/LiveriesPage/LiveriesPage";
import PersonalClassesPage from "pages/PersonalClassesPage/PersonalClassesPage";
import EquipmentPage from "pages/EquipmentPage/EquipmentPage";
import CoachesPage from "pages/CoachesPage/CoachesPage";
import "normalize.css";
import "./index.css";
import SuperAdminPanelPage from "pages/SuperAdminPanelPage/SuperAdminPanelPage";
import UserPanelPage from "pages/UserPanelPage/UserPanelPage";
import { fetchAuthMe } from "redux/features/authSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderV3 from "components/GeneralComponents/HeaderV3/HeaderV3";

const App = () => {
  const dispatch = useDispatch();
  const roleUser = useSelector((state) => state.auth.role);

  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("ref");
  if (myParam) {
    window.localStorage.setItem("refPartner", myParam);
  } else {
    window.localStorage.removeItem("refPartner");
  }

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  const adminPanelRoleComponents = (role) => {
    if (role === "SUPERADMIN") {
      return <SuperAdminPanelPage />;
    } else if (role === "USER") {
      return <UserPanelPage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderV3 />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="services/personal-classes" element={<PersonalClassesPage />} />
        <Route path="services/custom-car" element={<SetupListPage />} />
        <Route path="services/custom-car/:id" element={<SetupElementPage />} />
        <Route path="services/liveries" element={<CustomLiveriesPage />} />
        <Route path="services/equipment" element={<EquipmentPage />} />
        <Route path="services/coaches" element={<CoachesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="administrator/*" element={adminPanelRoleComponents(roleUser)} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default App;
