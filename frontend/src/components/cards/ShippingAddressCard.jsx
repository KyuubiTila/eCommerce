import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const ShippingAddressCard = ({
  initialValues,
  validationSchema,
  updateShippingAddress,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(data, params) => {
        updateShippingAddress(data);

        params.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ADDRESS
          </label>
          <Field
            autoComplete="off"
            type="text"
            name="address"
            placeholder="enter address"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
          <span className="text-red-500">
            <ErrorMessage name="address" component="span" />
          </span>
        </div>

        <div className="mb-6">
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            CITY
          </label>

          <Field
            autoComplete="off"
            type="text"
            name="city"
            placeholder="enter city"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
          <span className="text-red-500">
            <ErrorMessage name="city" component="span" />
          </span>
        </div>

        <div className="mb-6">
          <label
            htmlFor="postalCode"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            POSTAL CODE
          </label>

          <Field
            autoComplete="off"
            type="number"
            name="postalCode"
            placeholder="enter postalCode"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
          <span className="text-red-500">
            <ErrorMessage name="postalCode" component="span" />
          </span>
        </div>

        <div className="mb-6">
          <label
            htmlFor="country"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            COUNTRY
          </label>

          <Field
            autoComplete="off"
            type="text"
            name="country"
            placeholder="enter country"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
          <span className="text-red-500">
            <ErrorMessage name="country" component="span" />
          </span>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          UPDATE DETAILS
        </button>
      </Form>
    </Formik>
  );
};
