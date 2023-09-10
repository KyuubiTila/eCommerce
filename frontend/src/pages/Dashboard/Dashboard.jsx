import React from 'react';
import { useEffect } from 'react';
import { PaidProductDisplayCard } from '../../components/cards/PaidProductDisplayCard';
import { useAuth } from '../../stores/auth';
import { useOrders } from '../../stores/orderStore';
import { ShippingAddress } from '../ShippingAddress';

export const Dashboard = () => {
  const fetchPaidOrders = useOrders((state) => state.fetchPaidOrders);
  const paidOrdersList = useOrders((state) => state.paidOrdersList);
  const loggedIn = useAuth((state) => state.loggedIn);

  useEffect(() => {
    if (loggedIn) {
      fetchPaidOrders();
    }
  }, [fetchPaidOrders, loggedIn]);

  return (
    <>
      {paidOrdersList.map((order) => (
        <PaidProductDisplayCard key={order.id} order={order} />
      ))}
      <ShippingAddress />
    </>
  );
};
