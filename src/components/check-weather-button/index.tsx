import React from 'react';
import { Button } from '../../style/buttons';
import Logo from '../logo';
import { Wrapper } from './style';

interface CheckWeatherButtonProps {
  onClick: () => void;
}

const CheckWeatherButton: React.FC<CheckWeatherButtonProps> = ({
  onClick,
}: CheckWeatherButtonProps) => (
  <Wrapper>
    <Logo />
    <Button type="button" onClick={onClick}>
      Check Weather Forecast
    </Button>
  </Wrapper>
);

export default CheckWeatherButton;
