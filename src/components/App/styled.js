import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

export const AppStyled = styled(Router)`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
