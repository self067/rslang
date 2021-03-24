import styled from 'styled-components';

export const StyledTeamCard = styled.div`
  background-color: var(--light);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10px;
  padding: 5px;
`;

export const StyledTeamTitle = styled.p`
  color: var(--grey);
  font-size: 18px;
`;
export const StyledTeamSubtitle = styled.p`
  color: var(--grey);
  font-size: 16px;
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
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin: 10px auto 10px;
`;
