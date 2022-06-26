import styled from 'styled-components';

export const CustomButton = styled.button`
  width: fit-content;
  padding: 8px 32px;
  border: 1px ${({ theme }) => theme.colors.white} solid;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;
