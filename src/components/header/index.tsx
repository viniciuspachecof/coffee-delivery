import logoCoffee from '../../assets/coffee-logo.svg';
import { ShoppingCart, MapPin } from '@phosphor-icons/react';
import { HeaderContainer } from './style';
import { NavLink } from 'react-router-dom';

export function Header() {
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
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
