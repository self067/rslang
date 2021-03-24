import styled from 'styled-components';

export const StyledStatContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  margin: 20px auto;
  width: 70%;
`;

export const StyledStatTitle = styled.h2`
  letter-spacing: 1px;
  margin: 10px 0;
`;

export const StyledStatRightPart = styled.div`
  background-color: var(--blue-dark);
  color: var(--light);
  padding: 30px;
  max-width: 33%;
  @media (max-width: 700px) {
    padding: 10px;
  }
`;

export const StyledStatInfo = styled.div`
  padding: 30px;
  position: relative;
  width: 100%;
`;

export const StyledStatProgressContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  text-align: right;
  width: 80%;
  &:nth-child(2) {
    position: absolute;
    top: 70px;
    right: 30px;
  }
`;

export const StyledStatProgress = styled.div`
  background-color: var(--light-grey);
  border-radius: 10px;
  height: 5px;
  width: 100%;
  &::after {
    border-radius: 10px;
    background-color: var(--blue-dark);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    width: 66%;
  }
`;

export const StyledStatProgressText = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
`;

export const StyledBttn = styled.button`
  background-color: var(--blue-dark);
  border: 0;
  border-radius: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 16px;
  padding: 12px 25px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  letter-spacing: 1px;
`;
