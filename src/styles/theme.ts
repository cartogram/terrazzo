import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export interface Theme {
  primaryColor: string;
}

const colors = {
  white: 'white',
  black: 'black',
  blue: 'blue',
};

export const theme = {
  siteBackgroundColor: colors.black,
  primaryColor: 'blue',
  fontFamily: 'Inconsolata, serif;',
};

export default styled;
export {css, injectGlobal, keyframes, ThemeProvider};
