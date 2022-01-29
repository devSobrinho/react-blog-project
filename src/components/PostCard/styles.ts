import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;

    ${HeadingStyles} {
      margin-top: calc(${theme.spacings.small} - 0.6rem);
      margin-bottom: calc(${theme.spacings.small} - 0.6rem);
    }

    ${HeadingStyles}:hover {
      color: ${theme.colors.primary};
    }

    a {
      text-decoration: none;
      color: inherit;
      transition: all 300ms ease-in-out;
    }

    &:hover ${Cover} {
      opacity: 0.8;
    }
    &:hover a {
      color: ${theme.colors.secondary};
    }
  `}
`;

export const Cover = styled.img`
  max-width: 100%;
  transition: all 300ms ease-in-out;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Excerpt = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`;
