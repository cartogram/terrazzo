import {injectGlobal, theme} from './';

export const global = injectGlobal`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.siteBackgroundColor};
    font-family: ${theme.fontFamily};
    font-size: 16px;
    text-align: center;
    font-weight: 400;
  }
`;
