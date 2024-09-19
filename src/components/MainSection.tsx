import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { allChartData } from "../data/allExpensesData";
import { Expense } from "../App";
import ExpensesList from "./ExpensesList";
import { useEffect, useState } from "react";
ChartJS.register(ArcElement, Legend, Tooltip);

interface Props {
  expenses: Expense[];
  deleteExpense: (id: number) => void;
}

const MainSection = ({ expenses, deleteExpense }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    setFilteredExpenses(
      selectedCategory
        ? expenses.filter((e) => e.category === selectedCategory)
        : expenses
    );
  }, [selectedCategory, expenses]);

  return (
    <>
      <select
        onChange={(e) => {
          setSelectedCategory(e.target.value);
        }}
        name="filterCategory"
        id="filterCategory"
        className="border-2 border-[#63b3ed] text-lg p-2 rounded-md"
      >
        <option value="">All expenses</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Groceries">Groceries</option>
        <option value="General">General</option>
      </select>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <ExpensesList
          expenses={expenses}
          deleteExpense={deleteExpense}
          filteredExpenses={filteredExpenses}
          selectedCategory={selectedCategory}
        />
        <div className="h-72 flex justify-center lg:fixed lg:right-0  2xl:right-24">
          <Doughnut data={allChartData} options={{}} className="" />
        </div>
      </div>
    </>
  );
};

export default MainSection;
