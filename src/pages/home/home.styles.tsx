import styled from 'styled-components';

export const HomeStyled = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: auto;
  padding: 2rem;
  width: 100vw;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      `${breakpoints.medium}px`}) {
    height: 100vh;
  }
`;
