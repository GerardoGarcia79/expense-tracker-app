import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import useCalculateTotal from "../data/useCalculateTotal";
import { Expense } from "../App";
import allExpensesData from "../data/allExpensesData";
ChartJS.register(ArcElement, Legend, Tooltip);

interface Props {
  expenses: Expense[];
}

const SummarySection = ({ expenses }: Props) => {
  const total = useCalculateTotal(expenses);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-5">
      <div className="flex justify-center items-center">
        <div>
          <h2 className="text-3xl font-bold">Total</h2>
          <h2 className="text-3xl font-bold">${total}</h2>
        </div>
      </div>
      <div className="flex justify-center items-center h-72">
        <Doughnut data={allExpensesData(expenses)} options={{}} className="" />
      </div>
    </div>
  );
};

export default SummarySection;
