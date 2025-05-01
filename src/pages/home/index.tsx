import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import coffeeHome from '../../assets/coffee-home.svg';
import coffeeExpresso from '../../assets/coffees/coffee-expresso.svg';
import coffeeAmericano from '../../assets/coffees/coffee-americano.svg';
import coffeeExpressoCremoso from '../../assets/coffees/coffee-expresso-cremoso.svg';
import coffeeGelado from '../../assets/coffees/coffee-gelado.svg';
import coffeeComLeite from '../../assets/coffees/coffee-com-leite.svg';
import coffeeLatte from '../../assets/coffees/coffee-latte.svg';
import coffeeCapuccino from '../../assets/coffees/coffee-capuccino.svg';
import coffeeMacchiato from '../../assets/coffees/coffee-macchiato.svg';
import coffeeMochacchino from '../../assets/coffees/coffee-mochacchino.svg';
import coffeeChocolateQuente from '../../assets/coffees/coffee-chocolate-quente.svg';
import coffeeCubano from '../../assets/coffees/coffee-cubano.svg';
import coffeeHavaiano from '../../assets/coffees/coffee-havaiano.svg';
import coffeeArabe from '../../assets/coffees/coffee-arabe.svg';
import coffeeIrlandes from '../../assets/coffees/coffee-irlandes.svg';
import {
  GridCoffeeContainer,
  GridContainer,
  GridItemContainer,
  InfoContainer,
  ListaCoffee,
} from './styles';
import { CardCoffee } from '../../components/cardcoffee';

export function Home() {
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
          <CardCoffee
            img={coffeeExpresso}
            categorias={['TRADICIONAL']}
            descricao="Expresso Tradicional"
            sobre="O tradicional café feito com água quente e grãos moídos"
            valor="9,90"
          />
          <CardCoffee
            img={coffeeAmericano}
            categorias={['TRADICIONAL']}
            descricao="Expresso Americano"
            sobre="Expresso diluído, menos intenso que o tradicional"
            valor="9,90"
          />
          <CardCoffee
            img={coffeeExpressoCremoso}
            categorias={['TRADICIONAL']}
            descricao="Expresso Cremoso"
            sobre="Café expresso tradicional com espuma cremosa"
            valor="9,90"
          />
          <CardCoffee
            img={coffeeGelado}
            categorias={['TRADICIONAL', 'GELADO']}
            descricao="Expresso Gelado"
            sobre="Bebida preparada com café expresso e cubos de gelo"
            valor="9,90"
          />

          <CardCoffee
            img={coffeeComLeite}
            categorias={['TRADICIONAL', 'COM LEITE']}
            descricao="Café com Leite"
            sobre="Meio a meio de expresso tradicional com leite vaporizado"
            valor="9,90"
          />
          <CardCoffee
            img={coffeeLatte}
            categorias={['TRADICIONAL', 'COM LEITE']}
            descricao="Latte"
            sobre="Uma dose de café expresso com o dobro de leite e espuma cremosa"
            valor="9,90"
          />
          <CardCoffee
            img={coffeeCapuccino}
            categorias={['TRADICIONAL', 'COM LEITE']}
            descricao="Capuccino"
            sobre="Bebida com canela feita de doses iguais de café, leite e espuma"
            valor="9,90"
          />
          <CardCoffee
            img={coffeeMacchiato}
            categorias={['TRADICIONAL', 'COM LEITE']}
            descricao="Macchiato"
            sobre="Café expresso misturado com um pouco de leite quente e espuma"
            valor="9,90"
          />

          <CardCoffee
            img={coffeeMochacchino}
            categorias={['TRADICIONAL', 'COM LEITE']}
            descricao="Mocaccino"
            sobre="Café expresso com calda de chocolate, pouco leite e espuma"
            valor="9,90"
          />
          <CardCoffee
            img={coffeeChocolateQuente}
            categorias={['TRADICIONAL', 'COM LEITE']}
            descricao="Chocolate Quente"
            sobre="Bebida feita com chocolate dissolvido no leite quente e café"
            valor="9,90"
          />
          <CardCoffee
            img={coffeeCubano}
            categorias={['ESPECIAL', 'ALCOÓLICO', 'GELADO']}
            descricao="Cubano"
            sobre="Drink gelado de café expresso com rum, creme de leite e hortelã"
            valor="9,90"
          />
          <CardCoffee
            img={coffeeHavaiano}
            categorias={['ESPECIAL']}
            descricao="Havaiano"
            sobre="Bebida adocicada preparada com café e leite de coco"
            valor="9,90"
          />

          <CardCoffee
            img={coffeeArabe}
            categorias={['ESPECIAL']}
            descricao="Árabe"
            sobre="Bebida preparada com grãos de café árabe e especiarias"
            valor="9,90"
          />
          <CardCoffee
            img={coffeeIrlandes}
            categorias={['ESPECIAL', 'ALCOÓLICO']}
            descricao="Irlandês"
            sobre="Bebida a base de café, uísque irlandês, açúcar e chantilly"
            valor="9,90"
          />
        </GridCoffeeContainer>
      </ListaCoffee>
    </div>
  );
}
