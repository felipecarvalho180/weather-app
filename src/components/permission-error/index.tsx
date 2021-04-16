import React from 'react';
import { ErrorLabel, Wrapper } from './style';

interface PermissionErrorInterface {
  active: boolean;
}

const PermissionError: React.FC<PermissionErrorInterface> = ({
  active,
}: PermissionErrorInterface) => (
  <Wrapper>
    <ErrorLabel active={active}>
      It was not possible to get your location, to proceed enter your
      browser&#39;s privacy and security settings and allow access to your
      location.
    </ErrorLabel>
  </Wrapper>
);

export default PermissionError;
