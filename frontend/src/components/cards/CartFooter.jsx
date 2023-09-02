import React from 'react';
import { Link } from 'react-router-dom';

export const CartFooter = ({ orders }) => {
  // Group orders by their unique 'id' using an object
  const ordersById = orders.reduce((acc, order) => {
    if (!acc[order.id] || order.updatedAt > acc[order.id].updatedAt) {
      acc[order.id] = order;
    }
    return acc;
  }, {});

  // Convert the grouped object back to an array of unique orders
  const uniqueOrders = Object.values(ordersById);

  const newPrices = uniqueOrders.map((elements) => {
    return elements.price * elements.quantity;
  });

  const sum = newPrices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return (
    <div>
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${sum}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <Link
            to="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </Link>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or
            <Link to={'/home'}>
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
