import { Header } from '../../components/header';
import { Home } from '../../pages/home';
import { LayoutContainer } from './style';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Home />
    </LayoutContainer>
  );
}
