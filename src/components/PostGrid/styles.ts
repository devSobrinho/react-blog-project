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
    max-width: 120rem;
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
// export const Grid = styled.div`
//   ${({ theme }) => css`
//     display: flex;
//     flex-flow: row wrap;

//     & ${PostCardStyles} {
//       width: 100%;
//       max-width: calc(100% / 3 - (3.2rem / 3));
//       margin-right: ${theme.spacings.small};
//       margin-bottom: ${theme.spacings.small};
//     }
//     & ${PostCardStyles}:nth-child(1n) {
//       margin-right: ${theme.spacings.small};
//       margin-bottom: ${theme.spacings.small};
//     }
//     & ${PostCardStyles}:nth-child(3n) {
//       margin-right: 0;
//     }

//     @media ${theme.media.lteMedium} {
//       & ${PostCardStyles} {
//         max-width: calc(100% / 2 - (0.8rem));
//       }

//       & ${PostCardStyles}:nth-child(1n) {
//         margin-right: ${theme.spacings.small};
//         margin-bottom: ${theme.spacings.small};
//       }

//       & ${PostCardStyles}:nth-child(2n) {
//         margin-right: 0;
//       }
//     }

//     @media ${theme.media.lteSmall} {
//       flex-flow: row wrap;

//       & ${PostCardStyles} {
//         max-width: 100%;
//       }

//       & ${PostCardStyles}:nth-child(1n) {
//         margin-right: 0;
//       }
//     }
//   `}
// `;
