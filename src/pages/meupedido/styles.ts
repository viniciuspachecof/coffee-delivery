import styled from 'styled-components';

export const PedidoEmptyContainer = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20%;

  img {
    width: 7rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    margin-bottom: 2px;
  }

  span {
    font-size: 0.875rem;
  }

  button {
    text-decoration: none;
    background: transparent;
    color: ${(props) => props.theme['yellow']};
    font-size: 0.875rem;
    border: 1px solid ${(props) => props.theme['yellow']};
    padding: 0.75rem;
    border-radius: 0.375rem;
    transition: background-color 0.1s;
    cursor: pointer;
    margin-top: 1rem;

    &:hover {
      background: ${(props) => props.theme['yellow']};
      color: ${(props) => props.theme['white']};
    }
  }
`;

export const PedidoContainer = styled.div`
  display: grid;
  grid-template-columns: 640px 1fr;
  gap: 2rem;
  margin-bottom: 5.75rem;

  @media (max-width: 1070px) {
    grid-template-columns: 1fr;
  }

  .info-entrega {
    margin-top: 2.5rem;

    > p {
      font-size: 1.125rem;
      font-weight: 700;
      font-family: 'Baloo 2';
      margin-bottom: 1rem;
    }

    .card-entrega {
      padding: 2.5rem;
      background: ${(props) => props.theme['base-card']};
      border-radius: 5px;

      .texto-entrega {
        display: flex;
        gap: 0.5rem;

        p {
          color: ${(props) => props.theme['base-subtitle']};
          font-size: 1rem;
          margin-bottom: 2px;
        }

        span {
          font-size: 0.875rem;
        }

        svg {
          color: ${(props) => props.theme['yellow-dark']};
        }
      }

      .form-entrega {
        margin-top: 2rem;

        input {
          height: 2.69rem;
          margin-bottom: 1rem;
          padding: 0.75rem;
          border: 1px solid ${(props) => props.theme['base-button']};
          border-radius: 5px;
          background: ${(props) => props.theme['base-input']};
          color: ${(props) => props.theme['base-label']};
          font-size: 0.875rem;

          &:focus {
            border: 1px solid ${(props) => props.theme['yellow-dark']};
          }
        }

        .linha {
          display: flex;
          gap: 0.75rem;
        }

        .input-cep {
          width: 200px;
        }

        .input-rua {
          width: 100%;
        }

        .input-numero {
          width: 200px;
        }

        .input-complemento {
          flex: 1;
        }

        .input-bairro {
          width: 200px;
        }

        .input-cidade {
          width: 100%;
        }

        .input-uf {
          width: 3.75rem;
        }

        .msg-erro {
          color: red;
          font-size: 0.75rem;
          margin-bottom: 1rem;
        }
      }
    }

    .card-pagamento {
      padding: 2.5rem;
      background: ${(props) => props.theme['base-card']};
      border-radius: 5px;
      margin-top: 0.75rem;

      .texto-pagamento {
        display: flex;
        gap: 0.5rem;

        p {
          color: ${(props) => props.theme['base-subtitle']};
          font-size: 1rem;
          margin-bottom: 2px;
        }

        span {
          font-size: 0.875rem;
        }

        svg {
          color: ${(props) => props.theme['purple']};
        }
      }

      .radio-pagamento {
        margin-top: 2rem;
        display: flex;
        gap: 0.75rem;

        input {
          display: none;

          &:checked + label {
            background: ${(props) => props.theme['purple-light']};
            border: 1px solid ${(props) => props.theme['purple']};
          }
        }

        label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.75rem;
          padding: 1rem;
          background: ${(props) => props.theme['base-button']};
          border: 1px solid transparent;
          border-radius: 5px;
          flex: 1;

          cursor: pointer;
          transition: background-color 0.1s;

          &:hover {
            background: ${(props) => props.theme['base-hover']};
          }
        }

        svg {
          color: ${(props) => props.theme['purple']};
        }
      }

      .msg-erro {
        color: red;
        font-size: 0.75rem;
        margin-top: 1rem;
      }
    }
  }

  .info-selecionado {
    margin-top: 2.5rem;

    > p {
      font-size: 1.125rem;
      font-weight: 700;
      font-family: 'Baloo 2';
      margin-bottom: 1rem;
    }

    .card-selecionado {
      padding: 0 2.5rem 2.5rem;
      background: ${(props) => props.theme['base-card']};
      border-radius: 5px;
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
    }
  }

  .total-pedido {
    padding: 1.5rem 0 0.75rem;

    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.75rem;

      span:first-of-type {
        font-size: 0.875rem;
      }
    }

    .total-valor {
      span {
        font-weight: 700;
        font-size: 1.25rem !important;
      }
    }
  }

  button {
    background: ${(props) => props.theme['yellow']};
    color: ${(props) => props.theme['white']};
    font-size: 0.875rem;
    width: 100%;
    border: 0;
    padding: 0.75rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.1s;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`;
