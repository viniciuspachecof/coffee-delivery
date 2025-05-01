import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.75rem;

    a,
    span {
      display: flex;
      gap: 0.25rem;
      align-items: center;
      text-decoration: none;
      font-size: 14px;
      color: ${(props) => props.theme['purple-dark']};
      padding: 0.5rem;
      border-radius: 0.5rem;
    }

    .localizacao {
      background: ${(props) => props.theme['purple-light']};
      svg {
        color: ${(props) => props.theme['purple']};
      }
    }
    .link-compras {
      background: ${(props) => props.theme['yellow-light']};
      svg {
        color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`;
