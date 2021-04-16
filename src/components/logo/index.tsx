import React from 'react';
import { Image, Label, Wrapper } from './style';

const Logo: React.FC = () => (
  <Wrapper>
    <Image src="http://openweathermap.org/img/wn/02d@2x.png" />
    <Label>Weather App</Label>
  </Wrapper>
);

export default Logo;
