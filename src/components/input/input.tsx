import styled from 'styled-components';

const Input = styled.input`
  color: ${({ theme: { colors } }) => colors.black};
  border: 1px solid;
  border-color: ${({ theme: { colors } }) => colors.blueLighter};
  border-radius: 4px;
  display: block;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  line-height: 1;
  margin-bottom: 3px;
  padding: 10px 14px;
  width: 100%;

  &:focus {
    border-color: ${({ theme: { colors } }) => colors.blueLight};
    outline: none;
  }
`;

export default Input;
