import React from 'react';
import { Link } from 'react-router-dom';
export const ItemsDisplayCard = ({ order, totalItemsPrice }) => {
  const { name, quantity, image, price } = order;
  const totalPrice = price * quantity;
  console.log(totalPrice);

  return (
    <div>
      <div className="flex h-full flex-col overflow-y-scroll bg-white ">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="mt-8">
            <div className="flow-root">
              <div role="list" className="-my-6 divide-y divide-gray-200">
                <li className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={'http://localhost:3001/' + image}
                      alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <Link to="#">{name}</Link>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p className="text-gray-500">Qty {quantity}</p>
                        <p className="mt-1 text-sm text-gray-500">${price}</p>
                        <p className="mt-1 text-sm text-gray-500">
                          ${totalPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
