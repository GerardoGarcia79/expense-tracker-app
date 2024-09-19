import { useRef, useState } from "react";
import { Expense } from "../App";

interface Props {
  setIsComponentVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isComponentVisible: boolean;
  expenses: Expense[];
  addExpense: (newExpense: Expense) => void;
}

const Form = ({
  setIsComponentVisible,
  isComponentVisible,
  expenses,
  addExpense,
}: Props) => {
  const [category, setCategory] = useState("");
  const title = useRef<HTMLInputElement>(null);
  const amount = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (title.current && amount.current && date.current) {
      addExpense({
        title: title.current?.value,
        amount: Number(amount.current?.value),
        category: category,
        dateAdded: date.current.value,
        id: expenses.length + 1,
      });
      setCategory("");
      title.current.value = "";
      amount.current.value = "";
      date.current.value = "";
    }
  };

  return (
    <div className="fixed top-1/3 md:right-[12%] lg:right-1/3 z-10 bg-[#63b3ed] p-7 rounded-md text-xl w-[92%] md:w-3/4 lg:w-[30%]">
      <h1 className="text-3xl font-bold">Add Expense</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <p className="font-bold mt-2">Title</p>
        <input
          ref={title}
          type="text"
          required
          autoFocus
          className="p-1 rounded-sm w-full"
        />
        <p className="font-bold mt-2">Category</p>
        <div onChange={(e) => setCategory((e.target as Element).id)}>
          <div className="block">
            <input
              required
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
              required
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
              required
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
        <input
          ref={date}
          required
          min="2020-01-01"
          max="2024-09-19"
          type="date"
          className="p-1 rounded-sm"
        />
        <p className="font-bold mt-2">Amount</p>
        <input
          ref={amount}
          type="number"
          required
          min="1"
          max="9999"
          className="p-1 rounded-sm"
        />
        <div className="mt-3">
          <button
            onClick={() => setIsComponentVisible(!isComponentVisible)}
            className="border-2 border-red-600 text-red-600 bg-white p-2 rounded-md mr-2 font-bold hover:border-4"
          >
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
