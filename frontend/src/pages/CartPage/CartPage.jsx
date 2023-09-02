import React from 'react';
// import { useEffect } from 'react';
import { CartDisplayCard } from '../../components/cards/CartDisplayCard';
import { CartFooter } from '../../components/cards/CartFooter';
import { useOrders } from '../../stores/orderStore';

export const CartPage = () => {
  const orders = useOrders((state) => state.orders);

  const ordersById = orders.reduce((acc, order) => {
    if (!acc[order.id] || order.updatedAt > acc[order.id].updatedAt) {
      acc[order.id] = order;
    }
    return acc;
  }, {});

  const uniqueOrders = Object.values(ordersById);

  return (
    <>
      {uniqueOrders.map((order) => (
        <CartDisplayCard key={order.id} order={order} />
      ))}

      <CartFooter orders={orders} />
    </>
  );
};
