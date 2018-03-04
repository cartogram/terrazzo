import * as React from 'react';
import Link from 'gatsby-link';
import {styled} from '../../styles';

const A = styled(Link)`
  color: ${props => props.theme.primaryColor};
`;

export default A;
