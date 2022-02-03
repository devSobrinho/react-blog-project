import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    svg.search-ok-icon,
    svg.search-cancel-icon {
      width: 2.4rem;
      height: 2.4rem;
      margin-left: 0.5rem;
    }
    svg.search-ok-icon {
      /* color: ${theme.colors.success}; */
    }
    svg.search-cancel-icon {
      color: ${theme.colors.secondary};
    }
  `}
`;

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xhuge};
    padding: 0 ${theme.spacings.large};
  `}
`;

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: ${theme.spacings.large};
    padding: 0 ${theme.spacings.large};
    ${theme.sizes.maxWith};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    padding: 0.5rem ${theme.spacings.small};

    outline: 0.1rem solid ${theme.colors.mediumGray};
    outline-color: ${theme.name === 'inverted'
      ? theme.colors.white
      : theme.colors.mediumGray};

    transition: all 300ms ease-in-out;

    /* &:disabled {
      outline: 0.1rem solid ${theme.colors.success};
    } */
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.sizes.maxWith};
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.sizes.maxWith};
    width: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`;
