import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Header from "./components/GeneralComponents/Header/Header";
import HeaderV2 from "./components/GeneralComponents/HeaderV2/Header";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import SetupsPage from "./pages/SetupsPage/SetupsPage";
import CustomLiveriesPage from "./pages/LiveriesPage/LiveriesPage";
import PersonalClassesPage from "./pages/PersonalClassesPage/PersonalClassesPage";
import LoginForm from "./components/AuthorizationPageComponents/LoginForm/LoginForm";
import RegisterForm from "./components/AuthorizationPageComponents/RegisterForm/RegisterForm";
import EquipmentPage from "./pages/EquipmentPage/EquipmentPage";
import CoachesPage from "./pages/CoachesPage/CoachesPage";
import "normalize.css";
import "./index.css";
import SuperAdminPanelPage from "./pages/SuperAdminPanelPage/SuperAdminPanelPage";
import UserPanelPage from "./pages/UserPanelPage/UserPanelPage";
import { fetchAuthMe } from "./redux/features/authSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderV3 from "./components/GeneralComponents/HeaderV3/HeaderV3";
import Layout from "./components/GeneralComponents/Layout/Layout";

const App = () => {
  const dispatch = useDispatch();
  const roleUser = useSelector((state) => state.auth.role);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  const adminPanelRoleComponents = (role) => {
    if (role === "SUPERADMIN") {
      return <SuperAdminPanelPage />;
    } else if (role === "USER") {
      return <UserPanelPage />;
    }
  };

  return (
    <>
      <Layout>
        <HeaderV3 />
      </Layout>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route
            path="authorization/login"
            element={
              <AuthorizationPage>
                <LoginForm />
              </AuthorizationPage>
            }
          />
          <Route
            path="authorization/register"
            element={
              <AuthorizationPage>
                <RegisterForm />
              </AuthorizationPage>
            }
          />
        </Route>
        <Route path="services/personal-classes" element={<PersonalClassesPage />} />
        <Route path="services/custom-car" element={<SetupsPage />} />
        <Route path="services/liveries" element={<CustomLiveriesPage />} />
        <Route path="services/equipment" element={<EquipmentPage />} />
        <Route path="services/coaches" element={<CoachesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="administrator/*" element={adminPanelRoleComponents(roleUser)} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default App;
