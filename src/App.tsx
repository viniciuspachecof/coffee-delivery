import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { DefaultLayout } from './layouts/defaultlayout';

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <DefaultLayout />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
