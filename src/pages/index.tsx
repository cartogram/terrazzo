import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {Site} from '../graphql-types';
import {Title, A} from '../components';

interface Props {
  data: {
    site: Site;
  };
}

console.log(A);

function Index({data: {site: {siteMetadata}}}: Props) {
  return <A to="/">{siteMetadata.title}</A>;
}

export const IndexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Index;
