import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { allChartData } from "../data/allExpensesData";
import { Expense } from "../App";
import useCalculateTotal from "../data/useCalculateTotal";
ChartJS.register(ArcElement, Legend, Tooltip);

interface Props {
  expenses: Expense[];
}

const MainSection = ({ expenses }: Props) => {
  const total = useCalculateTotal(expenses);
  return (
    <>
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
              <p className="col-span-2 font-bold">Title</p>
              <p className="font-bold">Category</p>
              <p className="font-bold">Date Added</p>
              <p className="font-bold">Amount</p>
              <p></p>
            </div>
            {expenses.map((expense) => (
              <div
                key={expense.id}
                className="p-2 border-b-2 border-gray-300 grid grid-cols-6 gap-2"
              >
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
            <p className="font-bold text-2xl">Total: ${total}</p>
          </div>
        </div>
        <div className="h-72 flex justify-center lg:fixed lg:right-0  2xl:right-24">
          <Doughnut data={allChartData} options={{}} className="" />
        </div>
      </div>
    </>
  );
};

export default MainSection;
