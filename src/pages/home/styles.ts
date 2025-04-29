import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5.75rem 0;

  .coffee-info {
    flex: 1;
    h1 {
      font-family: 'Baloo 2';
      font-size: 3rem;
      font-weight: 800;
      color: ${(props) => props.theme['base-title']};
      line-height: 3.75rem;
    }

    p {
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
