import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage';
import CustomFilesPage from './pages/CustomFilesPage/CustomFilesPage';
import CustomLiveriesPage from './pages/CustomLiveriesPage/CustomLiveriesPage';
import PersonalClassePage from './pages/PersonalClassePage/PersonalClassePage';
import 'normalize.css';
import './index.css';

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/custom/lessons' element={<PersonalClassePage />} />
      <Route path='/custom/files' element={<CustomFilesPage />} />
      <Route path='/custom/liveries' element={<CustomLiveriesPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/authorization' element={<AuthorizationPage />} />
    </Routes>
    </>
  );
}

export default App;
