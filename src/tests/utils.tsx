import { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { Theme } from 'styles';

const AllProviders: FC = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      {children}
      <ToastContainer />
    </ThemeProvider>
  );
};

const renderWithTheme = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';

export { renderWithTheme as render };
