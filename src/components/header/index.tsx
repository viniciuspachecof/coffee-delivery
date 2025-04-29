import logoCoffee from '../../assets/coffee-logo.svg';
import { ShoppingCart, MapPin } from '@phosphor-icons/react';
import { HeaderContainer } from './style';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <nav>
        <a className="localizacao" href="">
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </a>

        <a className="link-compras" href="">
          <ShoppingCart size={22} weight="fill" />
        </a>
      </nav>
    </HeaderContainer>
  );
}
