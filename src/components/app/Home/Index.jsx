import React from 'react';
import Social from './Social';
import Navbar from './Nav';
import Header from './Header'
import AboutUs from './AboutUs';
import AboutFeedBack from './AboutFeedBack';
import Services from './Services';
import Facts from './Facts';
import Team from './Team';
import Review from './Review';
import Contract from './Contract';
import Footer from './Footer';


const Index = () => {
  return (
    <>
      <Social/>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <AboutFeedBack/>
      <Services/>
      <Facts/>
      <Team/>
      <Review/>
      <Contract/>
      <Footer/>
    </>
  );
};

export default Index;