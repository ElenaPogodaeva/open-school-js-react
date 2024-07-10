import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/pages/layout';
import { HomePage } from '@/pages/home';
import { ProductDetail } from '@/pages/product-detail';
import { CartPage } from '@/pages/cart';
import { NotFoundPage } from '@/pages/not-found';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
