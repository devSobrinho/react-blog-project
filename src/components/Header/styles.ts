import styled, { css } from 'styled-components';
import { Title as HeaddingStyles } from '../Heading/styles';

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 48rem;
    display: flex;
    flex-flow: column wrap;
    margin-left: ${theme.spacings.large};

    @media ${theme.media.lteSmall} {
      margin-left: 0;

      & > h2 {
        text-align: center;
      }

  `}
`;
export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: ${theme.sizes.max};
    color: ${theme.colors.darkText};
    font-size: ${theme.font.sizes.small};
    padding-bottom: ${theme.spacings.xhuge};
    margin: 0 auto;

    & ${HeaddingStyles} {
      margin: 0 0 calc(${theme.spacings.small} - 1rem);
    }

    @media ${theme.media.lteSmall} {
      display: flex;
      flex-flow: column wrap;
      & > ${HeaddingStyles} {
        margin: 0 0 ${theme.spacings.medium} 0;
      }
    }
  `}
`;
