import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';

const Main = () => (
    <MainLayout>
      <Header></Header>
      <main className='main'></main>
      <Footer></Footer>
    </MainLayout>
);

export default Main;
