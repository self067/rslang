import styled from 'styled-components';

export const StyledTeamCard = styled.div`
  background-color: var(--light);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
`;

export const StyledTeamContainer = styled.div`
  width: 94%;
  margin: 0 auto 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px 20px;
  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledTeamTitle = styled.p`
  color: var(--grey);
  font-size: 18px;
  padding-bottom: 10px;
`;
export const StyledTeamSubtitle = styled.p`
  color: var(--grey);
  font-size: 16px;
  padding-bottom: 5px;
`;

export const StyledLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTeamLink = styled.a`
  text-decoration: none;
  font-size: 30px;
  color: var(--grey);
  margin: 5px;
  transition: transform 0.2s leaner;
  &:hover {
    opacity: 0.7;
    transform: translate3d(-5px, -5px, 0);
  }
`;

export const StyledTeamImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin: 10px auto 10px;
`;
