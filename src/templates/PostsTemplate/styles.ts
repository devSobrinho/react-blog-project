import styled, { css } from 'styled-components';

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} 0;
    display: flex;
    justify-content: center;
    padding: ${theme.spacings.small};
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-weight: bold;
    padding: ${theme.spacings.small};
    border: none;

    &:disabled {
      background: ${theme.colors.darkGray};
    }
    &:disabled:hover {
      color: ${theme.colors.white};
    }
    &:hover {
      color: ${theme.colors.secondary};
    }
  `}
`;
