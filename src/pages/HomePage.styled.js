import styled from 'styled-components';

export const HomeTitle = styled.p`
  max-width: 400px;
  padding-left: 15px;
  font-size: 32px;
  font-weight: 700;
  margin-top: 30px;
  text-align: center;
  @media screen and (max-width: 550px) {
    font-size: 26px;
  }
`;
export const WrapperHomePage = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 40px;
  @media screen and (max-width: 550px) {
    padding: 25px;
  }
`;
export const HomePage = styled.div`
   {
    background-size: cover;
    overflow -x: hidden;

    background-repeat: no-repeat;
    height: calc(100vh - 70px);
  }
`;
