import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const {
    id,
    rating,
    description,
    price,
    numReviews,
    countInStock,
    category,
    brand,
    image,
    name,
  } = product;
  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="relative mx-auto w-full">
        <Link
          to={`/individualProduct/${id}`}
          className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
        >
          <div className="shadow p-4 rounded-lg bg-white">
            <div className="flex relative rounded-lg overflow-hidden h-52">
              <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                <img className="rounded-t-lg w-full h-64" alt="" src={image} />
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
                <span>Brand: {brand}</span>
              </p>
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <span className="mt-2 xl:mt-0">Instock : {countInStock}</span>
              </p>
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800 justify-end">
                <span className="mt-2 xl:mt-0">Price : $ {price}</span>
              </p>
            </div>
            <div className="grid grid-cols-2 mt-8 ml-12 justify-center items-center">
              <div className="flex items-center justify-end">
                <div className="flex items-center">
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
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
