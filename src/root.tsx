import { ThemeProvider } from 'styled-components';

import { Home } from 'pages';
import { GlobalStyles, Theme } from 'styles';

const Root = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Home />
  </ThemeProvider>
);

export default Root;
