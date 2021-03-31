import styled from 'styled-components';

import { Theme } from 'styles';

type TextHelpProps = {
  color?: keyof typeof Theme.colors;
};

const TextHelp = styled.p<TextHelpProps>`
  color: ${({ color = 'red', theme: { colors } }) => colors[color]};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xsmall};
  font-weight: 700;
  margin: 0;
  margin-top: 3px;
`;

export default TextHelp;
