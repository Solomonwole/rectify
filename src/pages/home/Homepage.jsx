import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Service from './components/Service';

function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Service />
    </div>
  );
}

export default Homepage;
