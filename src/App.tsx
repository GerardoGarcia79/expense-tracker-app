import "./App.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import allData from "./data/allExpensesData";
import { useState } from "react";
ChartJS.register(ArcElement, Legend, Tooltip);

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Videogames",
      category: "Entertainment",
      dateAdded: "2017-08-20",
      amount: 100,
    },
  ]);

  return (
    <div className="bg-gray-50 min-h-screen	w-full p-5">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold ">Expense Tracker</h1>
        <button className="border-2 border-[#63b3ed] text-black text-lg py-1 px-3 rounded-md hover:text-white hover:bg-[#63b3ed]">
          Add Expense
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center">
          <div>
            <h2 className="text-3xl font-bold">Total</h2>
            <h2 className="text-3xl font-bold">$1000</h2>
          </div>
        </div>
        <div className="flex justify-center items-center h-72">
          <Doughnut data={allData} options={{}} className="" />
        </div>
      </div>
      <select
        name="filterCategory"
        id="filterCategory"
        className="border-2 border-[#63b3ed] text-lg p-2 rounded-md"
      >
        <option value="">Filter by</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Groceries">Groceries</option>
        <option value="General">General</option>
      </select>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-3">
          <div className="my-4 w-full">
            <div className="p-2 border-y-2 border-gray-300 grid grid-cols-6 gap-2">
              <p className="col-span-2">Title</p>
              <p>Category</p>
              <p>Date Added</p>
              <p>Amount</p>
              <p></p>
            </div>
            {expenses.map((expense) => (
              <div className="p-2 border-b-2 border-gray-300 grid grid-cols-6 gap-2">
                <p className="col-span-2 break-words">{expense.title}</p>
                <p>{expense.category}</p>
                <p>{expense.dateAdded}</p>
                <p>{expense.amount}</p>
                <div>
                  <button>DELETE</button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="font-bold text-2xl">Total: $100</p>
          </div>
        </div>
        <div className="h-72 flex justify-center lg:fixed lg:right-[88px]">
          <Doughnut data={allData} options={{}} className="" />
        </div>
      </div>
    </div>
  );
}

export default App;
