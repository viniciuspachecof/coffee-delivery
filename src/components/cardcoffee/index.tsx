import { GridCoffeeItemContainer } from './style';
import { ShoppingCart } from '@phosphor-icons/react';

interface CardCoffeeProps {
  img: string;
  categorias: string[];
  descricao: string;
  sobre: string;
  valor: string;
}

export function CardCoffee({
  img,
  categorias,
  descricao,
  sobre,
  valor,
}: CardCoffeeProps) {
  return (
    <GridCoffeeItemContainer>
      <img src={img} alt="" />
      <div className="categorias-coffee">
        {categorias.map((categoria) => (
          <span>{categoria}</span>
        ))}
      </div>
      <h3>{descricao}</h3>
      <p>{sobre}</p>
      <div className="carrinho-coffee">
        <span className="preco-coffee">
          <span className="cifrao">R$</span>
          {valor}
        </span>
        <input className="qtde-coffee" type="number" />
        <span className="adicionar-coffee">
          <ShoppingCart size={22} weight="fill" />
        </span>
      </div>
    </GridCoffeeItemContainer>
  );
}
