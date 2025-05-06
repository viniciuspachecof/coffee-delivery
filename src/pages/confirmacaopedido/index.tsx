import { Package } from '@phosphor-icons/react';
import coffeeConfirmacao from '../../assets/coffee-confirmacao.svg';

import {
  ConfirmacaoPedidoContainer,
  InfoConfirmacaoPedidoContainer,
  TextoConfirmacaoContainer,
} from './style';

export function ConfirmacaoPedido() {
  return (
    <>
      <TextoConfirmacaoContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TextoConfirmacaoContainer>

      <ConfirmacaoPedidoContainer>
        <div className="info-confirmacao-pedido">
          <InfoConfirmacaoPedidoContainer>
            <span>
              <Package size={16} weight="fill" />
            </span>
            <div>
              <p>Entrega em Rua João Daniel Martinelli, 102</p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </InfoConfirmacaoPedidoContainer>

          <InfoConfirmacaoPedidoContainer>
            <span>
              <Package size={16} weight="fill" />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </InfoConfirmacaoPedidoContainer>

          <InfoConfirmacaoPedidoContainer>
            <span>
              <Package size={16} weight="fill" />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </InfoConfirmacaoPedidoContainer>
        </div>

        <div className="coffee-img-confirmacao">
          <img src={coffeeConfirmacao} alt="" />
        </div>
      </ConfirmacaoPedidoContainer>
    </>
  );
}
