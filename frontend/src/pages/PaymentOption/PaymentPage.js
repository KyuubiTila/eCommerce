import React, { useState } from 'react';
import { ItemsDisplayCard } from '../../components/cards/ItemsDisplayCard';
import { PayWithCard } from '../../components/cards/PayWithCard';
import { useOrders } from '../../stores/orderStore';
import { shippingAddress } from '../../stores/shippingAddress';
import { Link } from 'react-router-dom';

export const PaymentPage = () => {
  const address = shippingAddress((state) => state.address);

  const [selectedOption, setSelectedOption] = useState(''); // State to store the selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option when the user selects an option
  };

  const orders = useOrders((state) => state.orders);

  const ordersById = orders.reduce((acc, order) => {
    if (!acc[order.id] || order.updatedAt > acc[order.id].updatedAt) {
      acc[order.id] = order;
    }
    return acc;
  }, {});
  const uniqueOrders = Object.values(ordersById);
  console.log(uniqueOrders);

  let totalItemsPrice = 0;

  for (let i = 0; i < uniqueOrders.length; i++) {
    totalItemsPrice += uniqueOrders[i].price * uniqueOrders[i].quantity;
  }
  console.log(totalItemsPrice);

  console.log(address);

  return (
    <div>
      {/* Orders section */}
      <div className="bg-blue-200 p-4 rounded mb-2">
        {uniqueOrders.map((order) => (
          <ItemsDisplayCard
            key={order.id}
            order={order}
            totalItemsPrice={totalItemsPrice}
          />
        ))}
      </div>

      {/* Total Price section */}
      <div className="sm:px-6 bg-blue-200 rounded p-4 mb-2">
        <div className="ml-4 flex flex-1 flex-col">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className="text-gray-500">Total to be paid:</p>
            <p className="mt-1 text-sm text-gray-500">${totalItemsPrice}</p>
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
          Your address is : {address.address} {address.city} {address.country}
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
          <option value="transfer">TRANSFER</option>
          <option value="paypal">PAYPAL</option>
          <option value="interswitch">INTERSWITCH</option>
        </select>
      </div>

      {/* Payment with Card section (conditionally rendered) */}
      {selectedOption === 'card' && (
        <div className="bg-blue-200 p-4 rounded mb-2">
          <PayWithCard totalItemsPrice={totalItemsPrice} />
        </div>
      )}
    </div>
  );
};
