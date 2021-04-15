import React from 'react';
import styled from 'styled-components';

const BasicTitle = styled.h1`
  color: blue;
`;

const App: React.FC = () => (
  <div>
    <BasicTitle>Basic React App</BasicTitle>
  </div>
);

export default App;
