const Card = () => {
  return (
    <div className="mx-auto container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 w-full bg-white p-4">
        <div className="p-6 md:p-10 rounded-xl bg-blue-50">
          

          <h3 className="mt-4 text-base md:text-xl font-medium text-gray-800">
            Point of Sale
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">
          Powering amazing customer experience for thousands of food and retail brands globally. Grow multi-channel sales and serve customers faster.
          </p>
        </div>

        <div className="p-6 md:p-10 rounded-xl bg-blue-50">
          

          <h3 className="mt-4 text-base md:text-xl font-medium text-gray-800">
            Inventory Management
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">
          Free your brand from an industry average accuracy of 63%. Shopwave customers achieve 95% accuracy to delight customers and optimise cash flow.


          </p>
        </div>

        

        
      </div>
    </div>
  );
};

export default Card;
