import styled from 'styled-components';

export const StyledStatContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  margin: 20px auto;
  width: 80%;
  height: 250px;
  position: relative;
`;

export const StyledStatTitle = styled.h2`
  letter-spacing: 1px;
  margin: 10px 0;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const StyledStatRightPart = styled.div`
  background-color: var(--blue-dark);
  color: var(--light);
  padding: 30px;
  max-width: 33%;
  @media (max-width: 768px) {
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
  margin-bottom: 4px;
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
  font-size: 1rem;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    letter-spacing: 0.8px;
  }
`;

export const StyledBttn = styled.button`
  background-color: var(--blue-dark);
  color: var(--light);
  transition: all 0.3s ease-out;
  border-radius: 10px;
  letter-spacing: 1px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  outline: none;
  padding: 15px 20px;
  font-size: 20px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  &:hover {
    transition: all 0.3s ease-out;
    background: var(--light);
    color: var(--grey);
    transition: 0.5s;
    border: 1px solid var(--blue-dark);
  }
  @media (max-width: 768px) {
    padding: 15px 10px;
    font-size: 16px;
  }
`;

export const StyledImg = styled.img`
  width: 250px;
  position: absolute;
  top: 190px;
  right: -115px;
  z-index: 1;
  @media (max-width: 960px) {
    display: none;
  }
`;
