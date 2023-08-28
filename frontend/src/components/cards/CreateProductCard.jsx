import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
const CreateProductCard = ({ addProduct, initialValues, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(data, params) => {
        addProduct(data);
        params.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            NAME
          </label>
          <Field
            autoComplete="off"
            type="text"
            name="name"
            placeholder="enter name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
          <span className="text-red-500">
            <ErrorMessage name="name" component="span" />
          </span>
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            DESCRIPTION
          </label>
          <Field
            autoComplete="off"
            type="text"
            name="description"
            placeholder="enter description"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
          <span className="text-red-500">
            <ErrorMessage name="description" component="span" />
          </span>
        </div>
        <div className="mb-6">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            BRAND
          </label>

          <Field
            autoComplete="off"
            type="text"
            name="brand"
            placeholder="enter brand"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
          <span className="text-red-500">
            <ErrorMessage name="brand" component="span" />
          </span>
        </div>
        <div className="mb-6">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            CATEGORY
          </label>

          <Field
            autoComplete="off"
            type="text"
            name="category"
            placeholder="enter category"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
          <span className="text-red-500">
            <ErrorMessage name="category" component="span" />
          </span>
        </div>
        <div className="mb-6">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            PRICE
          </label>

          <Field
            autoComplete="off"
            type="number"
            name="price"
            placeholder="enter price"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
          <span className="text-red-500">
            <ErrorMessage name="price" component="span" />
          </span>
        </div>
        <div className="mb-6">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            IMAGE
          </label>
          <Field
            name="image"
            type="file"
            accept=".jpg, .jpeg, .png, .gif"
            className="block w-full"
          />
          <ErrorMessage name="image" component="div" className="text-red-500" />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          CREATE PRODUCT
        </button>
      </Form>
    </Formik>
  );
};

export default CreateProductCard;
