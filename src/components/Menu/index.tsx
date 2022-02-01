import { LogoLink, LogoLinkProps } from '../LogoLink';
import { MenuLink, MenuLinkProps } from '../MenuLink';
import * as Styled from './styles';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@styled-icons/material-outlined';
import { useState } from 'react';

export type MenuProps = {
  // text: string;
  // srcImg?: string;
  // link: string;
  // newTab?: boolean;

  links: MenuLinkProps[];
} & LogoLinkProps;

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
            {links?.map((linkMenu) => {
              return (
                <li key={linkMenu.id} className="navbar-item">
                  <MenuLink {...linkMenu} />
                </li>
              );
            })}
          </ul>
        )}
      </Styled.Container>
    </Styled.Wrapper>
  );
};
