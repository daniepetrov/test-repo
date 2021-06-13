import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const SubTitle = styled('h2')`
  font-size: 34px;
  color: black;
`;

export default function Home() {
  return (
    <div>
      <Title>My page</Title>
      <SubTitle>Hello</SubTitle>
    </div>
  );
}
