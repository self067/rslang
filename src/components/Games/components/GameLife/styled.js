import styled from 'styled-components';

const HeartsContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 50px;
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  img {
    max-width: 50px;
  }
`;

export { HeartsContainer };
