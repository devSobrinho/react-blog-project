import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkGray};
    font-style: italic;

    .categories span::after {
      content: ', ';
    }
    .categories span:last-child::after {
      content: '';
    }

    p {
      font-size: ${theme.font.sizes.small};
    }

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;

      &:hover {
        filter: brightness(50%);
      }
    }

    @media${theme.media.lteMedium} {
      p {
        font-size: ${theme.font.sizes.small};
      }
    }
  `}
`;
