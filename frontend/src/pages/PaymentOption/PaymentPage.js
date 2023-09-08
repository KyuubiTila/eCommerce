import React, { useState } from 'react';
import { ItemsDisplayCard } from '../../components/cards/ItemsDisplayCard';
import { PayWithCard } from '../../components/cards/PayWithCard';
import { useOrders } from '../../stores/orderStore';
import { shippingAddress } from '../../stores/shippingAddress';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const PaymentPage = () => {
  const Navigate = useNavigate();
  const address = shippingAddress((state) => state.address);

  const [selectedOption, setSelectedOption] = useState(''); // State to store the selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option when the user selects an option
  };

  const orders = useOrders((state) => state.orders);

  const ordersById = orders.reduce((acc, order) => {
    if (
      !acc[order.id] ||
      order.Orders[0].updatedAt > acc[order.id].Orders[0].updatedAt
    ) {
      acc[order.id] = order;
    }
    return acc;
  }, {});

  const confirmedOrders = Object.values(ordersById);

  const confirming = confirmedOrders.map((items) => {
    return items.Orders[0].totalPrice;
  });

  const confirmedTotalItemsPrice = confirming.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const confirmedShippingAddress = `${address.address} ${address.city} ${address.country}`;

  const updateOrder = async ({ ids }) => {
    try {
      await axios.put('http://localhost:3001/api/order', { ids });
    } catch (error) {
      console.error('Error updating products:', error);
    }
  };

  const confirmed = () => {
    const data = {
      confirmedShippingAddress: confirmedShippingAddress,
      confirmedTotalItemsPrice: confirmedTotalItemsPrice,
      confirmedOrders: confirmedOrders,
    };
    const confirmedData = JSON.stringify(data);
    localStorage.setItem('confirmedData', confirmedData);
    Navigate('/orderConfirmation');
    const ids = data.confirmedOrders.map((items) => {
      return items.Orders[0].id;
    });
    console.log(ids);
    updateOrder({ ids });
    localStorage.removeItem('orderStorage');
    localStorage.removeItem('cartItems');
  };
  return (
    <div>
      {/* Orders section */}
      <div className="bg-blue-200 p-4 rounded mb-2">
        {confirmedOrders.map((order) => (
          <ItemsDisplayCard key={order.id} order={order} />
        ))}
      </div>

      {/* Total Price section */}
      <div className="sm:px-6 bg-blue-200 rounded p-4 mb-2">
        <div className="ml-4 flex flex-1 flex-col">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className="text-gray-500">Total to be paid:</p>
            <p className="mt-1 text-sm text-gray-500">
              ${confirmedTotalItemsPrice}
            </p>
          </div>
        </div>
      </div>

      {/* Address section */}
      <div className="bg-blue-200 p-4 rounded mb-2">
        <label
          htmlFor="address"
          className="block mb-2 pt-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          ADDRESS
        </label>
        <div className="block mb-2 text-sm pt-2 font-medium text-gray-900 dark:text-white">
          Your address is : {confirmedShippingAddress}
          <Link to={'/shippingAddress'}>
            <br />
            <br />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Update Address
            </button>
          </Link>
        </div>
      </div>

      {/* Payment option section */}
      <div className="bg-blue-200 p-4 rounded mb-2">
        <label
          htmlFor="payment_option"
          className="block mb-2 text-sm pt-4 font-medium text-gray-900 dark:text-white"
        >
          Select payment option
        </label>
        <select
          id="payment_option"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="">Choose payment method</option>
          <option value="card">CARD</option>
          <option value="paymentOnDelivery">PAYMENT ON DELIVERY</option>
          <option value="paypal">PAYPAL</option>
          <option value="interswitch">INTERSWITCH</option>
        </select>
      </div>

      {/* Payment with Card section (conditionally rendered) */}
      {selectedOption === 'card' && (
        <div className="bg-blue-200 p-4 rounded mb-2">
          <PayWithCard
            confirmedTotalItemsPrice={confirmedTotalItemsPrice}
            confirmed={confirmed}
          />
        </div>
      )}

      {selectedOption === 'paymentOnDelivery' && (
        <div className="mt-8">
          <button
            onClick={confirmed}
            type="submit"
            className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Confirm to Pay $ {confirmedTotalItemsPrice}
          </button>
        </div>
      )}
      {selectedOption === 'paypal' && (
        <div className="mt-8">
          <button
            type="submit"
            className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Paypal payment option coming soon...
          </button>
        </div>
      )}
      {selectedOption === 'interswitch' && (
        <div className="mt-8">
          <button
            type="submit"
            className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Interswitch payment option coming soon...
          </button>
        </div>
      )}
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
  );
};
