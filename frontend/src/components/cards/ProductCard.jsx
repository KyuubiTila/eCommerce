import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const { id, description, image, name } = product;
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
          </div>
        </Link>
      </div>
    </div>
  );
};
