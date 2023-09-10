import React from 'react';
import { useOrders } from '../../stores/orderStore';
export const PaidProductDisplayCard = ({ order }) => {
  const deleteOrder = useOrders((state) => state.deleteOrder);

  const { quantity, price, totalPrice, ProductId } = order;
  const { brand, name, image } = order.Product;
  return (
    <>
      <div className="relative min-h-5 flex flex-col items-center justify-center">
        <div className="w-full bg-blue-400 shadow-lg rounded-xl p-6  pb-0 flex">
          <div className="flex-none mr-6">
            <div className="relative h-40 w-20 ">
              <div className="absolute flex flex-col top-0 right-0 p-3"></div>
              <img
                src={'http://localhost:3001/' + image}
                alt="Just a flower"
                className="w-full object-fill rounded-2xl"
              />
            </div>
          </div>
          <div className="flex-auto justify-evenly">
            <div className="flex flex-wrap">
              <div className="w-full flex-none text-sm flex items-center text-gray-600">
                <span>
                  <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                    IS PAID
                  </div>
                </span>
                <span>
                  <div className="flex items-center bg-red-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                    IS DELIVERED
                  </div>
                </span>
              </div>
              <div className="flex items-center w-full justify-between min-w-0">
                <h2 className="flex items-center text-lg px-2 py-1 cursor-pointer text-white hover:text-purple-500 truncate">
                  {name}
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full flex-none text-sm flex items-center text-gray-600">
                <span>
                  <div className="flex items-center text-white text-lg px-2 py-1">
                    Unit Price : $ {price}
                  </div>
                </span>
                <span>
                  <div className="flex items-center text-white text-lg px-2 py-1">
                    Quantity : {quantity}
                  </div>
                </span>
                <span>
                  <div className="flex items-center text-white text-lg px-2 py-1">
                    Price Paid : $ {totalPrice}
                  </div>
                </span>
                <span>
                  <div className="flex items-center text-white text-lg px-2 py-1">
                    Brand : {brand}
                  </div>
                </span>
              </div>
            </div>
            <button
              onClick={() => deleteOrder(ProductId)}
              className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600"
            >
              <span>DELETE ORDER</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
