import styled from 'styled-components';

export const StyledStatContainer = styled.div`
  background-color: var(--light);
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  margin: 20px;
  overflow: hidden;
  width: 700px;
`;

export const StyledStatTitle = styled.h2`
  letter-spacing: 1px;
  margin: 10px 0;
`;

export const StyledStatRightPart = styled.div`
  background-color: var(--blue-dark);
  color: var(--light);
  padding: 30px;
  max-width: 250px;
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
  width: 350px;
  &:nth-child(2) {
    position: absolute;
    top: 70px;
    right: 30px;
  }
`;

export const StyledStatProgress = styled.div`
  background-color: var(--light-grey);
  border-radius: 3px;
  height: 5px;
  width: 100%;
  &::after {
    border-radius: 3px;
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
  font-size: 10px;
  opacity: 0.6;
  letter-spacing: 1px;
`;

export const StyledBttn = styled.button`
  background-color: var(--blue-dark);
  border: 0;
  border-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 16px;
  padding: 12px 25px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  letter-spacing: 1px;
`;
