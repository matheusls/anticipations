import { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { Theme } from 'styles';

const themeProvider: FC = ({ children }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

const renderWithTheme = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: themeProvider, ...options });

export * from '@testing-library/react';

export { renderWithTheme as render };
