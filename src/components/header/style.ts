import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.75rem;

    .localizacao {
      display: flex;
      gap: 0.25rem;
      align-items: center;
      text-decoration: none;
      font-size: 14px;
      color: ${(props) => props.theme['purple-dark']};
      padding: 0.5rem;
      border-radius: 0.5rem;
      background: ${(props) => props.theme['purple-light']};

      svg {
        color: ${(props) => props.theme['purple']};
      }
    }

    .link-compras {
      position: relative;
      display: flex;
      gap: 0.25rem;
      align-items: center;
      text-decoration: none;
      font-size: 14px;
      color: ${(props) => props.theme['purple-dark']};
      padding: 0.5rem;
      border-radius: 0.5rem;
      background: ${(props) => props.theme['yellow-light']};

      .cart-count {
        position: absolute;
        top: -8px;
        right: -8px;
        background-color: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme['white']};
        font-size: 12px;
        font-weight: bold;
        border-radius: 50%;
        padding: 4px 7px;
        line-height: 1;
      }

      svg {
        color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`;
