import styled from 'styled-components';

const Form = styled.form`
  background-color: ${({ theme: { colors } }) => colors.white};
  margin: 0;
  padding: 10px 16px 20px;
  width: max-content;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      `${breakpoints.small}px`}) {
    padding: 10px 27px 20px;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      `${breakpoints.medium}px`}) {
    padding: 41px 56px;
  }
`;

export default Form;
