import styled from 'styled-components';

import { Tab, TabList } from 'react-tabs';

export const StyledSection = styled.section`
  box-shadow: inset 0 0 0 1000px rgb(0 0 0 / 20%);
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: contain;
`;

export const StyledVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  margin-top: -100px;
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

export const StyledContent = styled.div`
  background: #fff;
  max-width: 1120px;
  width: 100%;
  padding: 2rem 0 5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const StyledTabHeader = styled.div`
  background-color: #fff;
  margin: 2rem auto;
  text-align: center;
  font-size: 1.5rem;
`;

export const STabList = styled(TabList)`
  background-color: #fff;
  margin: 2rem auto;
  text-align: center;
  font-size: 1rem;
`;

export const STab = styled(Tab)`
  border-color: #aaa;
  border-radius: 5px;
  display: inline-block;
  border: 1px solid transparent;
  padding: 6px 12px;
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    background: var(--blue-dark-rgba);
  }
`;

export const StyledText = styled.p`
  color: var(--dark);
  font-size: 1.5rem;
  padding: 1rem 2rem;
`;

export const StyledTextTitle = styled(StyledTitle)`
  color: var(--dark);
  padding: 0 1rem;
`;

export const StyledImg = styled.img`
  height: 110px;
`;
