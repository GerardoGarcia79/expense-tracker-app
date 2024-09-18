import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import allData from "../data/allExpensesData";
ChartJS.register(ArcElement, Legend, Tooltip);

const SummarySection = () => {
  return (
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
  );
};

export default SummarySection;
