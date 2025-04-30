import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import coffeeHome from '../../assets/coffee-home.svg';
import {
  GridCoffeeContainer,
  GridCoffeeItemContainer,
  GridContainer,
  GridItemContainer,
  InfoContainer,
  ListaCoffee,
} from './styles';

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
          {/* PRIMEIRA LINHA */}
          <GridCoffeeItemContainer>
            <img src="" alt="" />
            <div className="categorias-coffee">
              <span>TRADICIONAL</span>
            </div>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className="valor-coffee">
              <span>R$ 9,90</span>
              <span>- 0 +</span>
              <ShoppingCart />
            </div>
          </GridCoffeeItemContainer>

          <GridCoffeeItemContainer>
            <img src="" alt="" />
            <div className="categorias-coffee">
              <span>TRADICIONAL</span>
            </div>
            <h3>Expresso Americano</h3>
            <p>Expresso diluído, menos intenso que o tradicional</p>
            <div className="valor-coffee">
              <span>R$ 9,90</span>
              <span>- 0 +</span>
              <ShoppingCart />
            </div>
          </GridCoffeeItemContainer>

          <GridCoffeeItemContainer>
            <img src="" alt="" />
            <div className="categorias-coffee">
              <span>TRADICIONAL</span>
            </div>
            <h3>Expresso Cremoso</h3>
            <p>Café expresso tradicional com espuma cremosa</p>
            <div className="valor-coffee">
              <span>R$ 9,90</span>
              <span>- 0 +</span>
              <ShoppingCart />
            </div>
          </GridCoffeeItemContainer>

          <GridCoffeeItemContainer>
            <img src="" alt="" />
            <div className="categorias-coffee">
              <span>TRADICIONAL</span>
              <span>GELADO</span>
            </div>
            <h3>Expresso Gelado</h3>
            <p>Bebida preparada com café expresso e cubos de gelo</p>
            <div className="valor-coffee">
              <span>R$ 9,90</span>
              <span>- 0 +</span>
              <ShoppingCart />
            </div>
          </GridCoffeeItemContainer>

          {/* SEGUNDA LINHA */}
          <GridCoffeeItemContainer>
            <img src="" alt="" />
            <div className="categorias-coffee">
              <span>TRADICIONAL</span>
              <span>COM LEITE</span>
            </div>
            <h3>Café com Leite</h3>
            <p>Meio a meio de expresso tradicional com leite vaporizado</p>
            <div className="valor-coffee">
              <span>R$ 9,90</span>
              <span>- 0 +</span>
              <ShoppingCart />
            </div>
          </GridCoffeeItemContainer>

          <GridCoffeeItemContainer>
            <img src="" alt="" />
            <div className="categorias-coffee">
              <span>TRADICIONAL</span>
              <span>COM LEITE</span>
            </div>
            <h3>Latte</h3>
            <p>
              Uma dose de café expresso com o dobro de leite e espuma cremosa
            </p>
            <div className="valor-coffee">
              <span>R$ 9,90</span>
              <span>- 0 +</span>
              <ShoppingCart />
            </div>
          </GridCoffeeItemContainer>

          <GridCoffeeItemContainer>
            <img src="" alt="" />
            <div className="categorias-coffee">
              <span>TRADICIONAL</span>
              <span>COM LEITE</span>
            </div>
            <h3>Capuccino</h3>
            <p>
              Bebida com canela feita de doses iguais de café, leite e espuma
            </p>
            <div className="valor-coffee">
              <span>R$ 9,90</span>
              <span>- 0 +</span>
              <ShoppingCart />
            </div>
          </GridCoffeeItemContainer>

          <GridCoffeeItemContainer>
            <img src="" alt="" />
            <div className="categorias-coffee">
              <span>TRADICIONAL</span>
              <span>COM LEITE</span>
            </div>
            <h3>Macchiato</h3>
            <p>Café expresso misturado com um pouco de leite quente e espuma</p>
            <div className="valor-coffee">
              <span>R$ 9,90</span>
              <span>- 0 +</span>
              <ShoppingCart />
            </div>
          </GridCoffeeItemContainer>

          {/* TERCEIRA LINHA */}
          <GridCoffeeItemContainer>
            <img src="" alt="" />
            <div className="categorias-coffee">
              <span>TRADICIONAL</span>
              <span>COM LEITE</span>
            </div>
            <h3>Mocaccino</h3>
            <p>Café expresso com calda de chocolate, pouco leite e espuma</p>
            <div className="valor-coffee">
              <span>R$ 9,90</span>
              <span>- 0 +</span>
              <ShoppingCart />
            </div>
          </GridCoffeeItemContainer>

          <GridCoffeeItemContainer>
            <img src="" alt="" />
            <div className="categorias-coffee">
              <span>TRADICIONAL</span>
              <span>COM LEITE</span>
            </div>
            <h3>Chocolate Quente</h3>
            <p>Bebida feita com chocolate dissolvido no leite quente e café</p>
            <div className="valor-coffee">
              <span>R$ 9,90</span>
              <span>- 0 +</span>
              <ShoppingCart />
            </div>
          </GridCoffeeItemContainer>

          <GridCoffeeItemContainer>
            <img src="" alt="" />
            <div className="categorias-coffee">
              <span>ESPECIAL</span>
              <span>ALCOÓLICO</span>
              <span>GELADO</span>
            </div>
            <h3>Cubano</h3>
            <p>
              Drink gelado de café expresso com rum, creme de leite e hortelã
            </p>
            <div className="valor-coffee">
              <span>R$ 9,90</span>
              <span>- 0 +</span>
              <ShoppingCart />
            </div>
          </GridCoffeeItemContainer>

          <GridCoffeeItemContainer>
            <img src="" alt="" />
            <div className="categorias-coffee">
              <span>ESPECIAL</span>
            </div>
            <h3>Havaiano</h3>
            <p>Bebida adocicada preparada com café e leite de coco</p>
            <div className="valor-coffee">
              <span>R$ 9,90</span>
              <span>- 0 +</span>
              <ShoppingCart />
            </div>
          </GridCoffeeItemContainer>

          {/* QUARTA LINHA */}
          <GridCoffeeItemContainer>
            <img src="" alt="" />
            <div className="categorias-coffee">
              <span>ESPECIAL</span>
            </div>
            <h3>Árabe</h3>
            <p>Bebida preparada com grãos de café árabe e especiarias</p>
            <div className="valor-coffee">
              <span>R$ 9,90</span>
              <span>- 0 +</span>
              <ShoppingCart />
            </div>
          </GridCoffeeItemContainer>

          <GridCoffeeItemContainer>
            <img src="" alt="" />
            <div className="categorias-coffee">
              <span>ESPECIAL</span>
              <span>ALCOÓLICO</span>
            </div>
            <h3>Irlandês</h3>
            <p>Bebida a base de café, uísque irlandês, açúcar e chantilly</p>
            <div className="valor-coffee">
              <span>R$ 9,90</span>
              <span>- 0 +</span>
              <ShoppingCart />
            </div>
          </GridCoffeeItemContainer>
        </GridCoffeeContainer>
      </ListaCoffee>
    </div>
  );
}
