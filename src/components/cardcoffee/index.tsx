import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { GridCoffeeItemContainer } from './style';
import { ShoppingCart } from '@phosphor-icons/react';
import { ICoffee } from '../../interface/ICoffee';
import { CoffeesContext } from '../../contexts/CoffeesContext';

export function CardCoffee({
  id,
  img,
  categorias,
  titulo,
  descricao,
  valor,
}: ICoffee) {
  const { onAdicionarEditarCoffee } = useContext(CoffeesContext);
  const [qtdeCoffee, setQtdeCoffee] = useState(1);

  function handleFormCoffee(event: FormEvent) {
    event.preventDefault();

    onAdicionarEditarCoffee({
      id,
      img,
      categorias,
      titulo,
      descricao,
      valor,
      qtde: qtdeCoffee,
    });
  }

  return (
    <GridCoffeeItemContainer>
      <img src={img} alt="" />
      <div className="categorias-coffee">
        {categorias.map((categoria, index) => (
          <span key={index}>{categoria}</span>
        ))}
      </div>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <div className="carrinho-coffee">
        <span className="preco-coffee">
          <span className="cifrao">R$</span>
          {valor.toFixed(2).replace('.', ',')}
        </span>
        <form onSubmit={handleFormCoffee}>
          <input
            className="qtde-coffee"
            type="number"
            step="1"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setQtdeCoffee(Number(event.target.value))
            }
            min={1}
            value={qtdeCoffee}
          />
          <button className="adicionar-coffee" type="submit">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </form>
      </div>
    </GridCoffeeItemContainer>
  );
}
