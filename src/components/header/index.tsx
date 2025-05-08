import logoCoffee from '../../assets/coffee-logo.svg';
import { ShoppingCart, MapPin } from '@phosphor-icons/react';
import { HeaderContainer } from './style';
import { NavLink } from 'react-router-dom';
import { CoffeesContext } from '../../contexts/CoffeesContext';
import { useContext } from 'react';

export function Header() {
  const { coffees } = useContext(CoffeesContext);

  return (
    <HeaderContainer>
      <NavLink to="/" title="home">
        <img src={logoCoffee} alt="" />
      </NavLink>
      <nav>
        <span className="localizacao">
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </span>

        <NavLink className="link-compras" to="/pedido" title="Meu pedido">
          <span className="cart-count">{coffees.length}</span>
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
