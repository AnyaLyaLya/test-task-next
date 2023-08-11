'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { GoPerson } from 'react-icons/go';
import Image from 'next/image';
import cn from 'classnames';
import './header.scss';
import { navigationItems } from '../../utils/data.utils';
import { BsCart } from 'react-icons/bs';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Adding a resize event listener to handle closing the menu
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    isOpen ? (
      // If menu is open, display the BurgerMenu component
      <BurgerMenu setIsOpen={setIsOpen}/>
    ) : (
      // If menu is not open, display the regular header
      <header className="header">
        <a href="/" className='header__logo'>
          Logo Here
        </a>

        <nav className="header__navigation">
          {/* Mapping through navigation items */}
          {navigationItems.map((label) => {
            const link = label === 'Home' ? '/' : `/${label}`;
            
            return (
              <li   
                className={cn(
                  'header__navigation--item', 
                  {'header__navigation--item--active': pathname === link}
                )}
                key={label}
              >
                <a className="header__navigation--item--link" href={link}>
                  {label}
                </a>
              </li>
            )
          })}
          
          {/* User and cart icons */}
          <div className="header__navigation--icon">
            <a href="/auth" className="header__navigation--item--link">
              <GoPerson size={18} />
            </a>
          </div>

          <div className="header__navigation--icon">
            <a href="/cart" className="header__navigation--item--link">
              <BsCart size={18} />
            </a>
          </div>
        </nav>

        <Image 
          src="/menu.svg" 
          alt='menu-icon' 
          width={18} 
          height={18} 
          className="header__burger-icon"
          onClick={() => setIsOpen(true)}
        />
      </header>
    ) 
  );
}
