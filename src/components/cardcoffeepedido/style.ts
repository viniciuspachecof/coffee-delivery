import styled from 'styled-components';

export const CoffePedidoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 2.5rem 0 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  .qtde-coffee {
    display: flex;
    gap: 1.25rem;

    img {
      width: 64px;
    }

    div {
      p {
        color: ${(props) => props.theme['base-subtitle']};
        margin-bottom: 0.5rem;
      }

      input {
        width: 4.5rem;
        background: ${(props) => props.theme['base-button']};
        padding: 0.5rem;
        border-radius: 0.375rem;
        border: 0;
      }

      .remover {
        display: flex;

        .button-remover {
          display: flex;
          align-items: center;
          background: ${(props) => props.theme['base-button']};
          padding: 0.5rem;
          border-radius: 0.375rem;
          border: 0;
          margin-left: 0.5rem;
          font-size: 0.75rem;
          cursor: pointer;
          transition: background-color 0.1s;
          color: ${(props) => props.theme['base-text']};

          &:hover {
            background: ${(props) => props.theme['base-hover']};
          }

          svg {
            color: ${(props) => props.theme['purple']};
          }
        }
      }
    }
  }

  > span {
    font-weight: 700;
  }
`;
