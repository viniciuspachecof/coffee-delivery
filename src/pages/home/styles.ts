import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 36.75rem 1fr;
  gap: 4rem;
  margin: 5.75rem 0 2.875rem;

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
  }

  .coffee-info {
    h1 {
      font-family: 'Baloo 2';
      font-size: 3rem;
      font-weight: 800;
      color: ${(props) => props.theme['base-title']};
      line-height: 3.75rem;
    }

    > p {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
      margin-top: 20px;
    }
  }

  .coffee-img-home {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 0;
  margin-top: 3.75rem;

  div:nth-of-type(1) {
    span {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }

  div:nth-of-type(2) {
    span {
      background: ${(props) => props.theme['base-text']};
    }
  }

  div:nth-of-type(3) {
    span {
      background: ${(props) => props.theme['yellow']};
    }
  }

  div:nth-of-type(4) {
    span {
      background: ${(props) => props.theme['purple']};
    }
  }
`;

export const GridItemContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  span {
    display: flex;
    padding: 0.5rem;
    border-radius: 100%;

    svg {
      color: ${(props) => props.theme['white']};
    }
  }
`;

export const ListaCoffee = styled.div`
  margin: 7.5rem 0 5.75rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 3.375rem;
  }
`;

export const GridCoffeeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;

  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GridCoffeeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem 1.25rem 1.5rem;
  background: ${(props) => props.theme['base-card']};
  -webkit-border-radius: 8px;
  -webkit-border-top-right-radius: 30px;
  -webkit-border-bottom-left-radius: 30px;
  -moz-border-radius: 8px;
  -moz-border-radius-topright: 30px;
  -moz-border-radius-bottomleft: 30px;
  border-radius: 8px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;

  > img {
    margin-top: -1rem;
  }

  .categorias-coffee {
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    margin: 0.75rem 0 0.875rem 0;
    span {
      font-size: 0.625rem;
      font-weight: bold;
      color: ${(props) => props.theme['yellow-dark']};
      background: ${(props) => props.theme['yellow-light']};
      padding: 0.25rem 0.5rem;
      border-radius: 0.625rem;
    }
  }

  h3 {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin-top: 0.5rem;
  }

  .carrinho-coffee {
    margin-top: 2.0625rem;
    display: flex;
    align-items: center;

    .preco-coffee {
      display: flex;
      gap: 3px;
      align-items: baseline;
      color: ${(props) => props.theme['base-text']};
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 1.5rem;

      .cifrao {
        color: ${(props) => props.theme['base-text']};
        font-size: 0.875rem;
        font-family: 'Roboto';
        font-weight: 400;
      }
    }

    .qtde-coffee {
      margin-left: 1.438rem;
      background: ${(props) => props.theme['base-button']};
      width: 4.5rem;
      padding: 0.5rem;
      border-radius: 0.375rem;
      border: 0;
    }

    .adicionar-coffee {
      display: flex;
      padding: 0.5rem;
      margin-left: 0.5rem;
      background: ${(props) => props.theme['purple-dark']};
      border-radius: 0.5rem;
      svg {
        color: ${(props) => props.theme['white']};
      }
    }
  }
`;
