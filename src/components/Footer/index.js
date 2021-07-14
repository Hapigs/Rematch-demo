import React from 'react';
import FooterStyle from './styles';

const Footer = () => (
  <FooterStyle>
    <div className='content'>
      <div className='copyright'>
        Copyright © 2019 yU. All rights reserved.
      </div>
      <div className='link'>
        <span>About</span>
        <span>Privacy Policy</span>
        <span>Apps</span>
        <span>Contact</span>
      </div>
    </div>
  </FooterStyle>
)

export default Footer;