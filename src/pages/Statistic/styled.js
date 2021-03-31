import styled from 'styled-components';

export const StyledChartContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  margin: 2rem auto;
  width: 80%;
  height: 100%;
  background-color: var(--light);
  padding: 2rem;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 0;
  }
`;
