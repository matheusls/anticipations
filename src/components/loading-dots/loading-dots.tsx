import { Dot, LoadingDotsStyled } from './loading-dots.styles';

const LoadingDots = () => (
  <LoadingDotsStyled data-testid="loading-dots">
    <Dot />
    <Dot />
    <Dot />
  </LoadingDotsStyled>
);

export default LoadingDots;
