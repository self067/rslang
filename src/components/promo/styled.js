import styled from 'styled-components';

export const PromoContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);*/
  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const PromoContent = styled.div`
  max-width: 1120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const PromoBttn = styled.div`
  display: flex;
  justify-content: center;
`;

export const PromoTitle = styled.h1`
  color: var(--light);
  font-size: 3rem;
  margin: 3rem 0 3rem;
  @media (max-width: 960px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const PromoSubtitle = styled.p`
  color: var(--light);
  opacity: 0.8;
  font-size: 2rem;
  margin: 3rem 0 3rem;
  margin-bottom: 32px;
  @media (max-width: 960px) {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const PromoIconContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px auto;
`;

export const PromoItem = styled.div`
  width: 222px;
  margin: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    margin: 20px 20px;
  }
`;

export const PromoIcon = styled.i`
  color: var(--light);
  font-size: 50px;
`;

export const PromoIconTitle = styled.h5`
  color: var(--light);
  font-size: 1rem;
  margin: 0.5rem 0 0.5rem;
  letter-spacing: 0.9px;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const PromoIconSubtitle = styled.p`
  color: var(--light);
  font-size: 0.9rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
