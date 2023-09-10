import React from 'react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../stores/auth';
import { useOrders } from '../../stores/orderStore';

export const Header = () => {
  const [toggle, setToggle] = useState('hidden');
  const user = useAuth((state) => state.user);
  const loggedIn = useAuth((state) => state.loggedIn);
  const logOut = useAuth((state) => state.logOut);
  const orders = useOrders((state) => state.orders);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('hidden');
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('hidden');
    setIsDropdownOpen(false);
  };

  const logout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('confirmedData');
    localStorage.removeItem('orderStorage');
    logOut();
    changeToggle();
  };

  const changeToggle = () => {
    setToggle((toggle) => (toggle === 'hidden' ? '' : 'hidden'));
  };

  const ordersById = orders.reduce((acc, order) => {
    if (!acc[order.id] || order.updatedAt > acc[order.id].updatedAt) {
      acc[order.id] = order;
    }
    return acc;
  }, {});

  const uniqueOrders = Object.values(ordersById);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={'/home'}>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Commerce
          </span>
        </Link>

        <div className="flex md:order-2">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={changeToggle}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${toggle} w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/home"
                onClick={changeToggle}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={changeToggle}
                to={'/cartPage'}
                className=" block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Cart:
                {uniqueOrders.length}
              </NavLink>
            </li>
            {!loggedIn && (
              <>
                <li>
                  <NavLink
                    onClick={changeToggle}
                    to={'/register'}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={changeToggle}
                    to={'/login'}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
            {loggedIn && (
              <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white relative">
                <button
                  id="dropdownDefaultButton"
                  onClick={toggleDropdown}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Welcome: {user}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute right-0 mt-2"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <Link
                        to={'/dashboard'}
                        onClick={closeDropdown}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <NavLink
                        onClick={closeDropdown}
                        to={'/createProduct'}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Create Product
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        onClick={logout}
                        to={'/home'}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </span>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
