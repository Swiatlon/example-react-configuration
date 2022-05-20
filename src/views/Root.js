import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/theme/theme';
import { globalStyle as GlobalStyle } from 'assets/styles/globalStyle';
const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <div>Example Component</div>
    </ThemeProvider>
  );
};
export default Root;
