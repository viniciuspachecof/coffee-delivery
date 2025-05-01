import { CoffePedidoContainer } from './style';
import { Trash } from '@phosphor-icons/react';

interface CardCoffeePedidoProps {
  img: string;
  descricao: string;
  qtde: number;
  valor: string;
}

export function CardCoffeePedido({
  img,
  descricao,
  qtde,
  valor,
}: CardCoffeePedidoProps) {
  return (
    <CoffePedidoContainer>
      <div className="qtde-coffee">
        <img src={img} alt="" />
        <div>
          <p>{descricao}</p>
          <div className="remover">
            <input type="number" value={qtde} />
            <span className="button-remover">
              <Trash size={16} />
              REMOVER
            </span>
          </div>
        </div>
      </div>
      <span>R$ {valor}</span>
    </CoffePedidoContainer>
  );
}
