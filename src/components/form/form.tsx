import styled from 'styled-components';

const Form = styled.form`
  background-color: ${({ theme: { colors } }) => colors.white};
  margin: 0;
  padding: 41px 56px;
  width: max-content;
`;

export default Form;
