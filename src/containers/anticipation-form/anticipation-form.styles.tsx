import styled from 'styled-components';

export const AnticipationFormStyled = styled.div`
  border-radius: 4px;
  display: grid;
  grid-template-columns: 100%;
  overflow: hidden;
  width: max-content;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      `${breakpoints.medium}px`}) {
    grid-template-columns: max-content max-content;
  }
`;
