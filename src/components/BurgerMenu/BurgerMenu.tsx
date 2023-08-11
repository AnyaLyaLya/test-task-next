'use client'
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { navigationItems } from '../../utils/data.utils';
import cn from 'classnames';
import { GoPerson } from 'react-icons/go';
import { BsCart } from 'react-icons/bs';
import Image from 'next/image';
import './burgerMenu.scss';

type Props = {
  setIsOpen: (isOpen: boolean) => void;
}

export const BurgerMenu: FC<Props> = ({ setIsOpen }) => {
  const pathname = usePathname();
  
  return (
    <div className="burger-menu">
      <div className="burger-menu__top">
        <a href="/" className='burger-menu__logo'>Logo Here</a>

        <button className='burger-menu__button' onClick={() => setIsOpen(false)}>
          <Image src="/cross.svg" alt='cart-icon' width={18} height={18} className="icon"/>
        </button>
      </div>

      <nav className="burger-menu__navigation">
        {navigationItems.map((label) => {
          const link = label === 'Home' ? '/' : `/${label}`;
          
          return (
            <li   
              className='burger-menu__item'
              key={label}
            >
              <a 
                className={cn(
                  'burger-menu__link', 
                  {'burger-menu__link--active': pathname === link}
                )} 
                href={link}
              >
                {label}
              </a>
            </li>
          )
        })}
      </nav>

      <div className="burger-menu__icons">
        <div className="burger-menu__icon">
          <a href="/auth" className="burger-menu__link">
            <GoPerson size={18} />
          </a>
        </div>

        <div className="burger-menu__icon">
          <a href="/cart" className="burger-menu__link">
            <BsCart size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}