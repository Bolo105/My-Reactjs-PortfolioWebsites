import React from 'react';
import { EcommNavbar } from './EcommNavbar';
import { EcommSlider } from './EcommSlider';
import { EcommCollection } from './EcommCollection';
import { EcommSpecial } from './EcommSpecial';
import { EcommOffers } from './EcommOffers';
import { EcommBlog } from './EcommBlog';
import { EcommAbout } from './EcommAbout';
import { EcommPopular } from './EcommPopular';
import { EcommNews } from './EcommNews';
import { EcommFooter } from './EcommFooter';




export const EcommWeb = () => {
  return (
    <div>
      <EcommNavbar />
      <EcommSlider />
      <EcommCollection />
      <EcommSpecial />
      <EcommOffers />
      <EcommBlog />
      <EcommAbout />
      <EcommPopular />
      <EcommNews />
      <EcommFooter />
    </div>
  );
};


