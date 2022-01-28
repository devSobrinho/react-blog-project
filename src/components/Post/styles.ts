import styled, { css } from 'styled-components';
import { Container as HtmlContentStyles } from '../HtmlContent/styles';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: ${theme.sizes.max};

    & ${HtmlContentStyles} {
      margin-top: ${theme.spacings.xhuge};
    }
  `}
`;
