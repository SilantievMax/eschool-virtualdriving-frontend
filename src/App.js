import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import HeaderV2 from './components/HeaderV2/Header'
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage';
import CustomFilesPage from './pages/CustomFilesPage/CustomFilesPage';
import CustomLiveriesPage from './pages/CustomLiveriesPage/CustomLiveriesPage';
import PersonalClassesPage from './pages/PersonalClassesPage/PersonalClassesPage';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import 'normalize.css';
import './index.css';
import AdminPanelPage from './pages/AdminPanelPage/AdminPanelPage';
import AdminHeader from './components/ComponentsForAdminPanelPage/AdminHeader/AdminHeader';
import AdminTrainingOne from './components/ComponentsForAdminPanelPage/AdminTrainingOne/AdminTrainingOne'
import AdminTrainingAll from './components/ComponentsForAdminPanelPage/AdminTrainingAll/AdminTrainingAll';


const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='authorization/login' element={<AuthorizationPage><LoginForm /></AuthorizationPage>} />
        <Route path='authorization/register' element={<AuthorizationPage><RegisterForm /></AuthorizationPage>} />
      </Route>
      <Route path='services/personal-classes' element={<PersonalClassesPage />}  />
      <Route path='services/custom-car' element={<CustomFilesPage />} />
      <Route path='services/liveries' element={<CustomLiveriesPage />} />
      <Route path='services/equipment' element={<>Test</>} />
      <Route path='services/coaches' element={<>Test</>} />
      <Route path='about' element={<AboutPage />} />
       {/*Admin panel*/}
      <Route path='administrator/' element={<AdminPanelPage />} >
        <Route path='statistics' element={<AdminHeader />} />
        <Route path='training' element={<AdminTrainingAll />} />
        <Route path='training/:id' element={<AdminTrainingOne />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
