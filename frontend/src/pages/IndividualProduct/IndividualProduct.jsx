import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../stores/productStore';
import { useOrders } from '../../stores/orderStore';

export const IndividualProduct = () => {
  const fetchSingleProduct = useProducts((state) => state.fetchSingleProduct);

  const singleProduct = useProducts((state) => state.singleProduct);

  const { id: ProductId } = useParams();

  const [inputPrice, setInputPrice] = useState(1);

  const [addOrder, orders] = useOrders((state) => [
    state.addOrder,
    state.orders,
  ]);

  // const query = useQuery({
  //   queryKey: ['my-orders'],
  //   queryFn: async () => {
  //     return await axios.get('http://localhost:3001/api/order', data);
  //   },
  // });

  // const orders = query.data;

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(orders));
  }, [orders]);

  const handleInputChange = (event) => {
    setInputPrice(event.target.value);
  };

  const handleAddToCart = async () => {
    // Destructure properties of singleProduct to create new data object
    const { id, price } = singleProduct;
    const quantity = inputPrice;
    const cartItemData = {
      price: price,
      quantity: quantity,
      ProductId: id,
      totalPrice: quantity * price,
    };
    addOrder(cartItemData);
    console.log(cartItemData);
    // naviagte(`/individualProduct/${ProductId}`);
  };

  useEffect(() => {
    fetchSingleProduct(ProductId);
  }, [ProductId, fetchSingleProduct]);
  const {
    rating,
    description,
    price,
    numReviews,
    countInStock,
    category,
    brand,
    image,
    name,
  } = singleProduct;

  const newPrice = parseFloat(price) * parseFloat(inputPrice);

  return (
    <div className="m-3 max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="relative mx-auto w-full">
        <div className="shadow p-4 rounded-lg bg-white">
          <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
            <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
              <img
                className="rounded-t-lg w-full h-64"
                alt=""
                src={'http://localhost:3001/' + image}
              />
            </div>
          </div>
          <div className="mt-4">
            <h2
              className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
              title="New York"
            >
              {name}
            </h2>
            <p
              className="mt-2 text-sm text-gray-800 "
              title="New York, NY 10004, United States"
            >
              {description}
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
              <span className="mt-2 xl:mt-0">Category : {category}</span>
            </p>
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800 justify-end">
              <span>Brand : {brand}</span>
            </p>
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
              <span className="mt-2 xl:mt-0">Instock : {countInStock}</span>
            </p>
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800 justify-end">
              <span className="mt-2 xl:mt-0">Price : ${price}</span>
            </p>

            <div className="flex items-center ">
              <svg
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                {rating}
              </p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                {numReviews} reviews
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8">
            {countInStock === 0 ? (
              <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg">
                CAN NOT PLACE ORDER
              </div>
            ) : (
              <input
                autoComplete="off"
                type="number"
                name="price"
                placeholder="enter amount"
                value={inputPrice}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            )}

            <div className="flex justify-end">
              {countInStock === 0 ? (
                <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg">
                  OUT OF STOCK
                </div>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>

          {countInStock === 0 ? (
            ''
          ) : (
            <div>NEW PRICE: ${newPrice.toFixed(2)} </div>
          )}
        </div>
      </div>
    </div>
  );
};
