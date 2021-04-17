import React from 'react';
import ClockLoader from 'react-spinners/ClockLoader';
import { Wrapper } from './style';
import { BasicButton } from '../../style/buttons';

interface ButtonProps {
  onClick: () => void;
  type: 'submit' | 'reset' | 'button';
  text: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  text,
}: ButtonProps) => (
  <Wrapper onClick={onClick}>
    <ClockLoader loading size={20} />
    <BasicButton type={type}>{text}</BasicButton>
  </Wrapper>
);

export default Button;
