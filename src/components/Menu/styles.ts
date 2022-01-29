import styled, { css } from 'styled-components';
import { Container as LogoLinkStyles } from '../LogoLink/styles';
import { Title as HeadingStyles } from '../Heading/styles';
import { Container as MenuLinkStyles } from '../MenuLink/styles';

type MenuBehaviorProps = {
  menuVisible: boolean;
};

export const Wrapper = styled.menu`
  ${() => css`
    position: fixed;
    top: 0;
    z-index: 1;
  `}
`;

const menuVisibleMobile = () => css`
  padding: 3px;
  margin-left: calc(100vw - 39px - 1.6rem);
`;
const menuVisibleDesk = () => css`
  margin-left: 14rem;
`;

export const MenuOpenClose = styled.a<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    position: fixed;
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    border-radius: 5px;
    border-color: transparent;
    padding: 5px;
    margin-left: 1.6rem;
    margin-top: 1.6rem;
    transition: all 300ms ease-in-out;
    &:hover {
      color: ${theme.colors.secondary};
    }

    ${menuVisible && menuVisibleDesk()}

    @media ${theme.media.lteSmall} {
      ${menuVisible && menuVisibleMobile()}
    }
  `}
`;

export const Container = styled.nav<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${menuVisible ? '20rem' : '1rem'};
    transition: all 300ms ease-in-out;
    height: 100vh;
    background: ${theme.colors.primary};
    padding: ${menuVisible ? theme.spacings.medium : '0.5rem'};
    overflow-y: auto;
    overflow: auto;
    overflow-wrap: anywhere;

    & ${HeadingStyles} {
      width: auto;
      margin-top: 5rem;
    }

    & ${LogoLinkStyles} img {
      border: 0.5rem solid ${theme.colors.secondary};
      border-radius: 50%;
    }

    .menu-navbar {
      list-style: none;
      padding: 0;
      margin: 0;
      width: auto;
    }

    .navbar-item ${MenuLinkStyles} {
    }

    @media ${theme.media.lteSmall} {
      width: ${menuVisible ? '100vw' : '0px'};
      padding: ${menuVisible ? theme.spacings.medium : '0rem'};

      .menu-navbar {
        margin: 0 20px;
      }
      .navbar-item ${MenuLinkStyles} {
        width: initial;
        border: none;
      }
    }
  `}
`;
