import React from 'react';
import ClockLoader from 'react-spinners/ClockLoader';
import { useSelector } from 'react-redux';
import { Wrapper } from './style';
import { RootState } from '../../redux/reducers';

interface ButtonProps {
  onClick: () => void;
  type: 'submit' | 'reset' | 'button';
  text: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  text,
}: ButtonProps) => {
  const { loading } = useSelector((state: RootState) => ({
    loading: state.loading,
  }));

  return (
    <Wrapper onClick={onClick}>
      {loading && <ClockLoader loading size={20} />}
      {/* <BasicButton disabled={!!loading} type={type}>
        {text}
      </BasicButton> */}
    </Wrapper>
  );
};

export default Button;
