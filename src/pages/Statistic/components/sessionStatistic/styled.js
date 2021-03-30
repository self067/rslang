import styled from 'styled-components';

export const StyledStatContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  margin: 20px auto;
  width: 80%;
  height: 100%;
  position: relative;
  background-color: var(--light);
`;

export const StyledStatInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  position: relative;
  width: 100%;
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
  color: var(--dark);
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

export const StyledImg = styled.img`
  width: 250px;
  position: absolute;
  top: 140px;
  left: 80px;
  z-index: 1;
  @media (max-width: 960px) {
    display: none;
  }
`;
