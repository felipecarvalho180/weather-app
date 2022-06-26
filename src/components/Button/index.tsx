import React from 'react';

import { CustomButton } from './styles';

interface ButtonInterface extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...props }: ButtonInterface) {
  return <CustomButton {...props}>{title}</CustomButton>;
}
