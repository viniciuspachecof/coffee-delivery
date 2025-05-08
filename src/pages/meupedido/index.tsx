import { CardCoffeePedido } from '../../components/cardcoffeepedido';
import { PedidoContainer } from './styles';
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CoffeesContext } from '../../contexts/CoffeesContext';

export function MeuPedido() {
  const navigate = useNavigate();
  const { coffees } = useContext(CoffeesContext);

  const valorEntrega = 3.5;
  const valorTotalItens = coffees.reduce(
    (soma, coffee) => soma + coffee.valor * coffee.qtde,
    0
  );
  const valorTotalPedido = valorTotalItens + valorEntrega;

  function direcionarPagina() {
    navigate('/ConfirmacaoPedido');
  }

  return (
    <PedidoContainer>
      <div className="info-entrega">
        <p>Complete seu pedido</p>
        <div className="card-entrega">
          <div className="texto-entrega">
            <MapPinLine size={22} />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>

          <form action="" className="form-entrega">
            <input type="text" className="input-cep" placeholder="CEP" /> <br />
            <input
              type="text"
              className="input-rua"
              name=""
              id=""
              placeholder="RUA"
            />
            <div>
              <input
                type="text"
                className="input-numero"
                name=""
                id=""
                placeholder="NÚMERO"
              />
              <input
                type="text"
                className="input-complemento"
                name=""
                id=""
                placeholder="COMPLEMENTO"
              />
            </div>
            <div>
              <input
                type="text"
                className="input-bairro"
                name=""
                id=""
                placeholder="BAIRRO"
              />
              <input
                type="text"
                className="input-cidade"
                name=""
                id=""
                placeholder="CIDADE"
              />
              <input
                type="text"
                className="input-uf"
                name=""
                id=""
                placeholder="UF"
              />
            </div>
          </form>
        </div>

        <div className="card-pagamento">
          <div className="texto-pagamento">
            <CurrencyDollar size={22} />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>

          <div className="radio-pagamento">
            <input type="radio" name="forma-pagamento" id="cartaoCredito" />
            <label htmlFor="cartaoCredito">
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </label>

            <input type="radio" name="forma-pagamento" id="cartaoDebito" />
            <label htmlFor="cartaoDebito">
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </label>

            <input type="radio" name="forma-pagamento" id="dinheiro" />
            <label htmlFor="dinheiro">
              <Money size={16} />
              DINHEIRO
            </label>
          </div>
        </div>
      </div>

      <div className="info-selecionado">
        <p>Cafés selecionados</p>
        <div className="card-selecionado">
          {coffees.map((coffee) => {
            return <CardCoffeePedido {...coffee} />;
          })}

          <div className="total-pedido">
            <div>
              <span>Total de itens</span>
              <span>R$ {valorTotalItens.toFixed(2).replace('.', ',')}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ {valorEntrega.toFixed(2).replace('.', ',')}</span>
            </div>
            <div className="total-valor">
              <span>Total</span>
              <span>R$ {valorTotalPedido.toFixed(2).replace('.', ',')}</span>
            </div>
          </div>

          <button onClick={direcionarPagina}>CONFIRMAR PEDIDO</button>
        </div>
      </div>
    </PedidoContainer>
  );
}
