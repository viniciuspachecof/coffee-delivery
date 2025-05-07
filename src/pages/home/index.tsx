import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import coffeeHome from '../../assets/coffee-home.svg';
import {
  GridCoffeeContainer,
  GridContainer,
  GridItemContainer,
  InfoContainer,
  ListaCoffee,
} from './styles';
import { CardCoffee } from '../../components/cardcoffee';
import { useState } from 'react';
import { ICoffee } from '../../interface/Coffee';
import { DataCoffes } from '../../data/Coffes';

export function Home() {
  const [coffees, setCoffees] = useState<ICoffee[]>([]);

  function handleAdicionarCoffee(data: ICoffee) {
    setCoffees((state) => [...state, { ...data }]);
  }

  console.log(coffees);

  return (
    <div>
      <InfoContainer>
        <div className="coffee-info">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <GridContainer>
            <GridItemContainer>
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </GridItemContainer>
            <GridItemContainer>
              <span>
                <Package size={16} weight="fill" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </GridItemContainer>
            <GridItemContainer>
              <span>
                <Timer size={16} weight="fill" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </GridItemContainer>
            <GridItemContainer>
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              <p>O café chega fresquinho até você</p>
            </GridItemContainer>
          </GridContainer>
        </div>

        <div className="coffee-img-home">
          <img src={coffeeHome} alt="" />
        </div>
      </InfoContainer>

      <ListaCoffee>
        <h1>Nossos cafés</h1>

        <GridCoffeeContainer>
          {DataCoffes.map((coffee) => (
            <CardCoffee {...coffee} onAdicionarCoffee={handleAdicionarCoffee} />
          ))}
        </GridCoffeeContainer>
      </ListaCoffee>
    </div>
  );
}
