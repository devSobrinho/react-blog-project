import { LogoLink } from '../LogoLink';
import { MenuLink, MenuLinkProps } from '../MenuLink';
import * as Styled from './styles';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@styled-icons/material-outlined';
import { useState } from 'react';

export type MenuProps = {
  // logoLink: LogoLinkProps;
  text: string;
  srcImg?: string;
  link: string;
  newTab?: boolean;

  links: MenuLinkProps[];
};

export const Menu = ({
  links,
  text,
  srcImg = '',
  link,
  newTab = false,
}: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Styled.Wrapper>
      <Styled.MenuOpenClose
        className={menuVisible ? 'menu-icon-opened' : 'menu-icon'}
        menuVisible={menuVisible}
        onClick={() => {
          setMenuVisible((p) => !p);
        }}
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
      >
        {menuVisible && <CloseIcon size={'2.5rem'} aria-label="Close menu" />}
        {!menuVisible && <MenuIcon size={'2.5rem'} aria-label="Open menu" />}
      </Styled.MenuOpenClose>
      <Styled.Container
        className={'menu'}
        menuVisible={menuVisible}
        aria-label="menu"
      >
        {menuVisible && (
          <LogoLink text={text} srcImg={srcImg} link={link} newTab={newTab} />
        )}
        {menuVisible && (
          <ul className="menu-navbar">
            {links?.map((link) => {
              return (
                <li key={link.id} className="navbar-item">
                  <MenuLink {...link} />
                </li>
              );
            })}
          </ul>
        )}
      </Styled.Container>
    </Styled.Wrapper>
  );
};
