import styled, { css } from 'styled-components';

export type LabelProps = {
  isRequired?: boolean;
};

const Label = styled.label<LabelProps>`
  color: ${({ theme: { colors } }) => colors.grayDark};
  display: block;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  font-weight: 400;
  margin-bottom: 6px;

  ${({ isRequired = false }) =>
    isRequired &&
    css`
      &::after {
        content: ' *';
      }
    `};
`;

export default Label;
