import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigatorOnline } from 'hooks';
import { Home } from 'pages';
import { GlobalStyles, Theme } from 'styles';
import { renderErrorToast } from 'utils';

const Root = () => {
  const isOnline = useNavigatorOnline();

  useEffect(() => {
    if (!isOnline) {
      renderErrorToast('offline');
    }
  }, [isOnline]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <ToastContainer />
      <Home />
    </ThemeProvider>
  );
};

export default Root;
