import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: ${theme.sizes.max};
    padding-bottom: ${theme.spacings.xlarge};
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};

    & ${HeadingStyles} {
      margin: 0;
      margin-bottom: ${theme.spacings.medium};
      /* color: ${theme.colors.darkText}; */
      font-size: ${theme.font.sizes.huge};
    }

    @media${theme.media.lteMedium} {
      & ${HeadingStyles} {
        font-size: ${theme.font.sizes.xlarge};
      }
    }
  `}
`;

export const Excerpt = styled.p`
  ${({ theme }) => css`
    font-size: 2.4rem;
    margin: ${theme.spacings.medium} 0;
  `}
`;

export const Cover = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    display: block;
    margin-bottom: ${theme.spacings.medium};
  `}
`;
