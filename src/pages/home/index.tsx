import coffeeHome from '../../assets/coffee-home.svg';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <div className="coffee-info">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </div>

      <div className="coffee-img-home">
        <img src={coffeeHome} alt="" />
      </div>
    </HomeContainer>
  );
}
