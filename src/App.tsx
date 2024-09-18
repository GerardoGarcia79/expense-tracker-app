import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import useComponentVisible from "./hooks/useComponentVisible";
import HeaderSection from "./components/HeaderSection";
import SummarySection from "./components/SummarySection";
import MainSection from "./components/MainSection";
import { initialExpenses } from "./data/allExpensesData";

export interface Expense {
  id: number;
  title: string;
  category: string;
  dateAdded: string;
  amount: number;
}

function App() {
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible();

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen	w-full p-5">
      <HeaderSection
        isComponentVisible={isComponentVisible}
        setIsComponentVisible={setIsComponentVisible}
      />
      <SummarySection expenses={expenses} />
      <MainSection
        expenses={expenses}
        deleteExpense={(id) => deleteExpense(id)}
      />
      {isComponentVisible && (
        <div ref={ref}>
          <Form
            isComponentVisible={isComponentVisible}
            setIsComponentVisible={setIsComponentVisible}
          />
        </div>
      )}
    </div>
  );
}

export default App;
