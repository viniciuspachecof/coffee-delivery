import { CardCoffeePedido } from '../../components/cardcoffeepedido';
import { PedidoContainer, PedidoEmptyContainer } from './styles';
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react';
import cofferEmpty from '../../assets/coffee-empty.svg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CoffeesContext } from '../../contexts/CoffeesContext';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

interface NewCoffeeFormData {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  formaPagamento: string;
}

export function MeuPedido() {
  const navigate = useNavigate();
  const { coffees } = useContext(CoffeesContext);

  const valorEntrega = 3.5;
  const valorTotalItens = coffees.reduce(
    (soma, coffee) => soma + coffee.valor * coffee.qtde,
    0
  );
  const valorTotalPedido = valorTotalItens + valorEntrega;

  // VALIDAÇÃO FORMULÁRIO (ZOD)
  const newCoffeeFormValidationSchema = zod.object({
    cep: zod
      .string()
      .min(1, 'Informe o CEP')
      .regex(/^\d+$/, 'Digite apenas numeros'), // Apenas letras,
    rua: zod.string().min(1, 'Informe a rua'),
    numero: zod
      .string()
      .min(1, 'Informe o número')
      .regex(/^\d+$/, 'Digite apenas números'), // Apenas números,
    complemento: zod.string(),
    bairro: zod.string().min(1, 'Informe o bairro'),
    cidade: zod
      .string()
      .min(1, 'Informe a cidade')
      .regex(/^[a-zA-Z]+$/, 'Digite apenas letras'), // Apenas letras,
    uf: zod
      .string()
      .min(1, 'Informe a UF')
      .regex(/^[a-zA-Z]+$/, 'Digite apenas letras'), // Apenas letras,
    formaPagamento: zod.string().min(1, 'Informe a forma de pagamento'),
  });

  const newCoffeeForm = useForm<NewCoffeeFormData>({
    resolver: zodResolver(newCoffeeFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      formaPagamento: '',
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = newCoffeeForm;

  function onSubmit() {
    navigate('/ConfirmacaoPedido');
  }

  return (
    <>
      {coffees.length ? (
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
                <input
                  type="text"
                  className="input-cep"
                  placeholder="CEP"
                  {...register('cep')}
                />
                {errors.cep && <p className="msg-erro">{errors.cep.message}</p>}
                <input
                  type="text"
                  className="input-rua"
                  placeholder="RUA"
                  {...register('rua')}
                />
                {errors.rua && <p className="msg-erro">{errors.rua.message}</p>}
                <div className="linha">
                  <div>
                    <input
                      type="text"
                      className="input-numero"
                      placeholder="NÚMERO"
                      {...register('numero')}
                    />
                    {errors.numero && (
                      <p className="msg-erro">{errors.numero.message}</p>
                    )}
                  </div>
                  <input
                    type="text"
                    className="input-complemento"
                    placeholder="COMPLEMENTO"
                    {...register('complemento')}
                  />
                </div>
                <div className="linha">
                  <div>
                    <input
                      type="text"
                      className="input-bairro"
                      placeholder="BAIRRO"
                      {...register('bairro')}
                    />
                    {errors.bairro && (
                      <p className="msg-erro">{errors.bairro.message}</p>
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <input
                      type="text"
                      className="input-cidade"
                      placeholder="CIDADE"
                      {...register('cidade')}
                    />
                    {errors.cidade && (
                      <p className="msg-erro">{errors.cidade.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      className="input-uf"
                      placeholder="UF"
                      maxLength={2}
                      onChange={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^a-zA-Z]/g,
                          ''
                        );
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="card-pagamento">
              <div className="texto-pagamento">
                <CurrencyDollar size={22} />
                <div>
                  <p>Pagamento</p>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </div>

              <div className="radio-pagamento">
                <input
                  type="radio"
                  id="cartaoCredito"
                  {...register('formaPagamento')}
                />
                <label htmlFor="cartaoCredito">
                  <CreditCard size={16} />
                  CARTÃO DE CRÉDITO
                </label>

                <input
                  type="radio"
                  id="cartaoDebito"
                  {...register('formaPagamento')}
                />
                <label htmlFor="cartaoDebito">
                  <Bank size={16} />
                  CARTÃO DE DÉBITO
                </label>

                <input
                  type="radio"
                  id="dinheiro"
                  {...register('formaPagamento')}
                />
                <label htmlFor="dinheiro">
                  <Money size={16} />
                  DINHEIRO
                </label>
              </div>

              {errors.formaPagamento && (
                <p className="msg-erro">{errors.formaPagamento.message}</p>
              )}
            </div>
          </div>

          <div className="info-selecionado">
            <p>Cafés selecionados</p>

            <div className="card-selecionado">
              {coffees.map((coffee, index) => {
                return <CardCoffeePedido key={index} {...coffee} />;
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
                  <span>
                    R$ {valorTotalPedido.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              <button onClick={handleSubmit(onSubmit)}>CONFIRMAR PEDIDO</button>
            </div>
          </div>
        </PedidoContainer>
      ) : (
        <PedidoEmptyContainer>
          <div>
            <img src={cofferEmpty} alt="" />
            <p> Seu carrinho de compras se encontra vazio </p>
            <span> Navegue pelas nossas ofertas incríveis Agora!</span>
          </div>

          <button onClick={() => navigate('/')}>Compre Agora</button>
        </PedidoEmptyContainer>
      )}
    </>
  );
}
