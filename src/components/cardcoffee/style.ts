import styled from 'styled-components';

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
    margin-top: -1.25rem;
    width: 120px;
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
