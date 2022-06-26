import React from 'react';
import { Warning } from 'phosphor-react';
import { useTheme } from 'styled-components';

import { Wrapper } from './styles';

interface ToastifyProps {
  message: string;
}

const ToastifyComponent: React.FC<ToastifyProps> = ({
  message,
}: ToastifyProps) => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Warning color={theme.colors.white} weight="fill" size={20} />
      {message}
    </Wrapper>
  );
};

export default ToastifyComponent;
