import styled, { css } from 'styled-components';

import { Theme } from 'styles';

export type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = {
  color?: keyof typeof Theme.colors;
  fontSize?: keyof typeof Theme.fontSizes;
  fontStyle?: 'normal' | 'italic';
  level: HeadingLevels;
  textTransform?: 'capitalize' | 'lowercase' | 'uppercase';
  withUnderline?: boolean;
};

const Heading = styled.h1.attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  color: ${({ color = 'grayDark', theme: { colors } }) => colors[color]};
  display: block;
  font-size: ${({ fontSize = 'xlarge', theme: { fontSizes } }) =>
    fontSizes[fontSize]};
  font-style: ${({ fontStyle = 'normal' }) => fontStyle};
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 22px;
  text-transform: ${({ textTransform }) => textTransform || 'none'};
  width: 100%;

  ${({ withUnderline }) =>
    withUnderline &&
    css`
      &::after {
        background-color: ${({ theme: { colors } }) => colors.blue};
        content: '';
        display: block;
        height: 1px;
        margin-top: 4px;
        mix-blend-mode: normal;
        opacity: 0.3;
        width: 100%;
      }
    `};
`;

export default Heading;
