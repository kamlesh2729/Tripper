import React from 'react'

import Heropages from "../components/Heropages";
import Testimonal from '../components/Testimonal';
import BookBanner from "../components/BookBanner";

const Testimonials = () => {
  return (
    <>
      <section>
        <Heropages name="Testimonials" />
        <Testimonal/>
        <BookBanner />
      </section>
    </>
  );
}

export default Testimonials