import styled from 'styled-components';

export const TextoConfirmacaoContainer = styled.div`
  margin-top: 5rem;

  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
`;

export const ConfirmacaoPedidoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.375rem;
  margin: 2.5rem 0 5.75rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .info-confirmacao-pedido {
    height: 16.875rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.5rem;
    border: 1px solid transparent;
    background: linear-gradient(
          ${(props) => props.theme['background']},
          ${(props) => props.theme['background']}
        )
        padding-box,
      linear-gradient(to right, #dbac2c, #8047f8) border-box;
    -webkit-border-radius: 8px;
    -webkit-border-top-right-radius: 30px;
    -webkit-border-bottom-left-radius: 30px;
    -moz-border-radius: 8px;
    -moz-border-radius-topright: 30px;
    -moz-border-radius-bottomleft: 30px;
    border-radius: 8px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;

    div:nth-of-type(1) {
      span {
        background: ${(props) => props.theme['purple']};
      }
    }

    div:nth-of-type(2) {
      span {
        background: ${(props) => props.theme['yellow']};
      }
    }

    div:nth-of-type(3) {
      span {
        background: ${(props) => props.theme['yellow-dark']};
      }
    }
  }

  .coffee-img-confirmacao {
    text-align: center;

    img {
      max-width: 100%;
    }
  }
`;

export const InfoConfirmacaoPedidoContainer = styled.div`
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
