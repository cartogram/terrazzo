import * as React from 'react';
import A from '../A/A';
import {styled} from '../../styles';

const StyledTitle = styled.h1`
  font-size: 1em;
  color: ${props => props.theme.primaryColor};
`;

function Title({children}) {
  return (
    <StyledTitle>
      <A>{children}</A>
    </StyledTitle>
  );
}

export default Title;
