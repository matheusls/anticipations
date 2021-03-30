import styled from 'styled-components';

export const AnticipationsStyled = styled.div`
  align-items: center;
  background-color: rgba(209, 220, 227, 0.18);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 35px;
`;

export const AnticipationsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const AnticipationsListItem = styled.li`
  color: ${({ theme: { colors } }) => colors.blue};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  font-style: italic;
  line-height: 46px;
  width: 100%;
`;
