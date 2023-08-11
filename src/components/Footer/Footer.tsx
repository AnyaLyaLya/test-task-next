'use client';

import React, { useState, FormEvent } from 'react';
import Image from 'next/image';
import './footer.scss';
import { validateEmail } from '../../utils/validation.utils';
import { contactInfo, menuData } from '../../utils/data.utils';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Invalid email');
      return;
    }
    
    setEmail('');
  };
  return (
    <footer className='footer'>
      <h1 className='footer__title'>
        <a href="/" className='footer__title'>Logo Here</a>
      </h1>

      <div className='footer__info'>
        <div className='footer__info--block'>
          <h3 className='footer__subtitle'>
            Reach us
          </h3>

          <div className='footer__list'>
            {contactInfo.map(item => (
              <div className='footer__list--item' key={item.title}>
                <Image 
                className='footer__icon'
                  src={item.icon} 
                  alt={item.alt} 
                  width={18} 
                  height={18}
                />

                <a href={item.link} className='footer__link'>{item.title}</a>
              </div>
            ))}
          </div>
        </div>
        
        <div className='footer__info--lists'>
          {menuData.map(menuItem => (
            <div className='footer__info--block' key={menuItem.title}>
              <h3 className='footer__subtitle'>
                {menuItem.title}
              </h3>
              <div className='footer__list'>
                {menuItem.links.map(link => (
                  <div className='footer__list--item' key={link}>
                    <a href={`/${link.replace(/ /g, '-')}`} className='footer__link'>
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer__subscribe-block">
          <h3 className='footer__subscribe-block--subtitle'>
            Join Our Newsletter
          </h3>

          <form className='footer__form' onSubmit={handleSubmit}>
            <input 
              className='footer__form--input'
              type="email" 
              placeholder='Your email address' 
              required
            />

            <button className='footer__form--button' type='submit'>
              Subscribe
            </button>
          </form>

          <p className='footer__text'>*  Will send you weekly updates for your better tool management.</p>
        </div>
      </div>

      
    </footer>
  )
}