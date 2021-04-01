import styled from 'styled-components';

const HiddenSubmit = styled.input.attrs({
  type: 'submit',
})`
  display: none;
`;

export default HiddenSubmit;
