import { Link } from 'react-router-dom';
import { useOrders } from '../../stores/orderStore';

export const CartDisplayCard = ({ order }) => {
  const deleteOrder = useOrders((state) => state.deleteOrder);

  const { name, image, price } = order;
  const { ProductId, totalPrice, quantity } = order.Orders[0];

  return (
    <div className="flex h-full flex-col overflow-y-scroll border-t-8 bg-white shadow-xl">
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
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <Link to="#">{name}</Link>
                      </h3>
                      <p className="ml-4">${totalPrice}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">${price}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {quantity}</p>

                    <div className="flex">
                      <button
                        type="button"
                        onClick={() => deleteOrder(ProductId)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
