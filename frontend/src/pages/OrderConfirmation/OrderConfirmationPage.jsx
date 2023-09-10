import React from 'react';

export const OrderConfirmationPage = () => {
  const data = JSON.parse(localStorage.getItem('confirmedData'));

  console.log(data);

  return (
    data && (
      <>
        <div className="text-center text-3xl leading-8 tracking-tight text-gray-900 sm:text-sm sm:leading-10">
          YOU HAVE PLACED YOUR ORDER SUCCESSFULLY
        </div>
        <div className="bg-blue-200 p-4 rounded mb-2">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl py-12">
            <h3 className="text-center text-3xl leading-8 tracking-tight text-gray-900 sm:text-sm sm:leading-10">
              Confirmed Address: {data.confirmedShippingAddress}
            </h3>
            <p className="mt-4 max-w-3xl mx-auto text-center text-md leading-7 text-gray-500">
              Confirmed Price Paid: ${data.confirmedTotalItemsPrice}
            </p>
            <div>
              {data.confirmedOrders.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-wrap justify-center gap-4 mt-4 lg:mt-8">
                    <div className="lg:flex lg:items-center lg:justify-between border p-4 rounded mt-4 lg:mt-0">
                      <div className="flex-1 min-w-0 mt-5 lg:mt-0">
                        <div className="flex">
                          <div>
                            <span className="inline-flex items-center justify-center h-16 w-16 mt-1">
                              <img
                                src={'http://localhost:3001/' + item.image}
                                alt="nothing here man"
                              />
                            </span>
                          </div>

                          <div className="ml-4">
                            <h2 className="text-xl font-semibold text-gray-500">
                              Item Name: {item.name}
                            </h2>
                            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                              <div className="mt-2 flex items-center leading-5 text-gray-400 sm:mr-6 text-sm">
                                Quantity: {item.Orders[0].quantity}
                              </div>
                              <div className="mt-2 flex items-center leading-5 text-gray-400 sm:mr-6 text-sm">
                                Price: ${item.price}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  );
};
