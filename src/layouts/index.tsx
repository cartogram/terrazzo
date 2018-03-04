import * as React from 'react';
import Helmet from 'react-helmet';
import {Site} from '../graphql-types';
import {global, ThemeProvider, theme} from '../styles';

interface Props {
  children: any;
  data: {
    site: Site;
  };
}

function Template({data: {site: {siteMetadata}}, children}: Props) {
  return (
    <main>
      <Helmet
        title={siteMetadata.title}
        meta={[
          {name: 'description', content: siteMetadata.description},
          {name: 'keywords', content: siteMetadata.keywords},
        ]}
      />
      <ThemeProvider theme={theme}>{children()}</ThemeProvider>
    </main>
  );
}

export const TemplateQuery = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;

export default Template;
