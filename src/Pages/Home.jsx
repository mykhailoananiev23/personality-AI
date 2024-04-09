import React, { useEffect } from 'react';
import Brands from '../components/Brands';
import Intro from '../components/Intro';
import HomePagdData from '../data/HomePagdData.json';

import Contact from '../components/Contact';


export default function Home() {
  const {
    intro,
    socialBtns,
    brands,
    contact,
  } = HomePagdData;

  return (
    <>
      <Intro data={intro} socialData={socialBtns} />
      <Brands  data={brands} />
      <Contact data={contact} socialData={socialBtns}  />

    </>
  );
}
