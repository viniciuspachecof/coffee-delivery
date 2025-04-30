import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5.75rem 0 2.875rem;

  .coffee-info {
    flex: 1;
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
    flex: 0.9;
    text-align: center;
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
    background: ${(props) => props.theme['yellow-dark']};

    svg {
      color: ${(props) => props.theme['white']};
    }
  }
`;

export const ListaCoffee = styled.div`
  margin: 2.875rem 0 5.75rem;

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
`;

export const GridCoffeeItemContainer = styled.div`
  .categorias-coffee span {
    font-size: 0.625rem;
    font-weight: bold;
    color: ${(props) => props.theme['yellow-dark']};
  }

  h3 {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`;
