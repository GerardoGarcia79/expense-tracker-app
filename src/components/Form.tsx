const Form = () => {
  return (
    <div className="fixed top-1/3 md:right-[12%] lg:right-1/3 z-10 bg-[#63b3ed] p-7 rounded-md text-xl w-[92%] md:w-3/4 lg:w-[30%]">
      <h1 className="text-3xl font-bold">Add Expense</h1>
      <form>
        <p className="font-bold mt-2">Title</p>
        <input type="text" className="p-1 rounded-sm w-full" />
        <p className="font-bold mt-2">Category</p>
        <div className="">
          <div className="block">
            <input
              type="radio"
              name="category"
              id="Entertainment"
              value="Entertainment"
              className="mr-3 cursor-pointer"
            />
            <label htmlFor="Entertainment" className="cursor-pointer">
              Entertainment
            </label>
          </div>
          <div className="block">
            <input
              type="radio"
              name="category"
              id="Groceries"
              value="Groceries"
              className="mr-3 cursor-pointer"
            />
            <label htmlFor="Groceries" className="cursor-pointer">
              Groceries
            </label>
          </div>
          <div className="block ">
            <input
              type="radio"
              name="category"
              id="General"
              value="General"
              className="mr-3 cursor-pointer"
            />
            <label htmlFor="General" className="cursor-pointer">
              General
            </label>
          </div>
        </div>
        <p className="font-bold mt-2">Date</p>
        <input type="date" className="p-1 rounded-sm" />
        <p className="font-bold mt-2">Amount</p>
        <input type="number" className="p-1 rounded-sm" />
        <div className="mt-3">
          <button className="border-2 border-red-600 text-red-600 bg-white p-2 rounded-md mr-2 font-bold hover:border-4">
            Cancel
          </button>
          <button
            type="reset"
            className="border-2 border-black text-black bg-white p-2 rounded-md mr-2 font-bold hover:border-4"
          >
            Reset
          </button>
          <button
            type="submit"
            className="border-2 border-blue-600 text-blue-600 bg-white p-2 rounded-md mr-2 font-bold hover:border-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
