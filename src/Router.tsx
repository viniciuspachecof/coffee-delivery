import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/defaultlayout';
import { Home } from './pages/home';
import { MeuPedido } from './pages/meupedido';
import { ConfirmacaoPedido } from './pages/confirmacaopedido';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pedido" element={<MeuPedido />} />
        <Route path="/ConfirmacaoPedido" element={<ConfirmacaoPedido />} />
      </Route>
    </Routes>
  );
}
