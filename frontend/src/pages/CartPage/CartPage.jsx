import React from 'react';
import { useEffect } from 'react';
import { CartDisplayCard } from '../../components/cards/CartDisplayCard';
import { CartFooter } from '../../components/cards/CartFooter';
import { useOrders } from '../../stores/orderStore';

export const CartPage = () => {
  const fetchOrder = useOrders((state) => state.fetchOrder);
  const orders = useOrders((state) => state.orders);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  return (
    <>
      {orders.map((order) => (
        <CartDisplayCard key={order.id} order={order} />
      ))}

      <CartFooter orders={orders} />
    </>
  );
};
