import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
`;

export const LoadingDotsStyled = styled.div`
  margin: auto;
  width: 70px;
  text-align: center;
`;

export const Dot = styled.div`
  animation: ${pulse} 1.4s infinite ease-in-out both;
  background-color: ${({ theme: { colors } }) => colors.blueDark};
  border-radius: 100%;
  display: inline-block;
  height: 10px;
  width: 10px;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }

  &:nth-child(2) {
    animation-delay: -0.16s;
  }

  &:not(:last-child) {
    margin-right: 3px;
  }
`;
