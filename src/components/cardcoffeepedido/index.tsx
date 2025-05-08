import { ChangeEvent, FormEvent, useContext } from 'react';
import { CoffePedidoContainer } from './style';
import { Trash } from '@phosphor-icons/react';
import { CoffeesContext } from '../../contexts/CoffeesContext';
import { ICoffee } from '../../interface/ICoffee';

export function CardCoffeePedido({ id, img, titulo, qtde, valor }: ICoffee) {
  const { onRemoverCoffee, onAlterarQtdeCoffee } = useContext(CoffeesContext);

  function handlerDeleteCoffee(event: FormEvent) {
    event.preventDefault();

    onRemoverCoffee(id);
  }

  function onChangeQtdeCoffee(event: ChangeEvent<HTMLInputElement>) {
    onAlterarQtdeCoffee(id, Number(event.target.value));
  }

  return (
    <CoffePedidoContainer>
      <div className="qtde-coffee">
        <img src={img} alt="" />
        <div>
          <p>{titulo}</p>
          <div className="remover">
            <input
              type="number"
              value={qtde}
              onChange={onChangeQtdeCoffee}
              step="1"
              min={1}
            />
            <button className="button-remover" onClick={handlerDeleteCoffee}>
              <Trash size={16} />
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <span>R$ {valor.toFixed(2).replace('.', ',')}</span>
    </CoffePedidoContainer>
  );
}
