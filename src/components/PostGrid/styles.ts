import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const NotFound = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    text-align: center;
    font-size: ${theme.font.sizes.medium};
    font-weight: bold;
    color: ${theme.colors.secondary};
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.sizes.maxWith};
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: ${theme.spacings.large};
    padding: ${theme.spacings.large};
    @media ${theme.media.lteSmall} {
      grid-template-columns: 1fr;
    }
  `}
`;
