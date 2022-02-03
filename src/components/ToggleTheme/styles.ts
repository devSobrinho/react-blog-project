import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 2;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;

  width: 5rem;
  height: 2.5rem;

  font-size: 0;
  line-height: 0;
  overflow: hidden;
  color: transparent;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider} {
      background-color: ${theme.colors.secondary};
    }

    &:checked + ${Slider}:before {
      background-color: ${theme.colors.primary};
    }

    &:focus + ${Slider}:before {
      box-shadow: 0 0 0.5rem ${theme.colors.darkGray};
    }
    /* &:focus:checked + ${Slider}:before {
      box-shadow: 0 0 1rem ${theme.colors.secondary};
    } */

    &:checked + ${Slider}:before {
      transform: translateX(calc(100% - 2px));
    }
  `}
`;

export const Slider = styled.span`
  ${({ theme }) => css`
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: ${theme.colors.mediumGray};
    border-radius: 2rem;
    border: 1px solid ${theme.colors.mediumGray};

    transition: all 300ms ease-in-out;

    display: flex;
    align-items: center;

    &::before {
      content: '';
      position: absolute;
      left: 0.4rem;

      height: 2.1rem;
      width: 2.1rem;
      background-color: ${theme.colors.white};
      border-radius: 50%;

      transition: all 300ms ease-in-out;
    }
  `}
`;
