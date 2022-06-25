import styled from 'styled-components';

export const TitleLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: ${({ theme }) => theme.fontWeight.title};
  color: ${({ theme }) => theme.colors.white};
`;

export const DescriptionLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.description};
  font-weight: ${({ theme }) => theme.fontWeight.description};
  color: ${({ theme }) => theme.colors.white};
`;

export const TextLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.text};
  font-weight: ${({ theme }) => theme.fontWeight.text};
  color: ${({ theme }) => theme.colors.white};
`;
