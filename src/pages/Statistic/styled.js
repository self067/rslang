import styled from 'styled-components';

export const StyledStatContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  margin: 20px auto;
  width: 80%;
  height: 100%;
  position: relative;
`;

export const StyledStatInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  position: relative;
  width: 100%;
`;

export const StyledTitle = styled.h1`
  color: var(--light);
  font-size: 3rem;
  margin: 2rem 1rem 2rem;
  @media (max-width: 960px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const StyledStatSubTitle = styled.p`
  letter-spacing: 1.2px;
  margin: 10px 0;
  font-size: 1.3rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  text-align: end;
`;

export const StyledInfoText = styled.p`
  color: var(--light);
  font-size: 1.3rem;
  padding-bottom: 10px;
  letter-spacing: 1.1px;
`;

export const StyledInfoValue = styled.span`
  padding-left: 10px;
`;

export const StyledInfoLine = styled.hr`
  border: none;
  background-color: var(--blue-light);
  color: var(--blue-light-rgba);
  height: 1px;
  margin: 5px 0;
`;
