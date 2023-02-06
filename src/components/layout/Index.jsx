import React from 'react';
import Social from '../core/Social'
import Contact from '../core/ContactBar'
const Index = (props) => {
  return (
    <>
      <Social/>
      <Contact/>
      {props.children}
    </>
  );
};

export default Index;