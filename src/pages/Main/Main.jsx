import React from 'react';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import Promo from './components/Promo/Promo.jsx';
import AboutProject from './components/AboutProject/AboutProject.jsx';
import Techs from './components/Techs/Techs.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';

const Main = () => (
  <div className='body'>
    <Header></Header>
    <main className='main'>
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Techs></Techs>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
    </main>
    <Footer></Footer>
  </div>
);

export default Main;
