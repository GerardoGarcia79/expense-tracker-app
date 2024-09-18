import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import useComponentVisible from "./hooks/useComponentVisible";
import HeaderSection from "./components/HeaderSection";
import SummarySection from "./components/SummarySection";
import MainSection from "./components/MainSection";

export interface Expense {
  id: number;
  title: string;
  category: string;
  dateAdded: string;
  amount: number;
}

function App() {
  const [expenses] = useState<Expense[]>([
    {
      id: 1,
      title: "Videogames",
      category: "Entertainment",
      dateAdded: "2017-08-20",
      amount: 100,
    },
  ]);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible();

  return (
    <div className="bg-gray-50 min-h-screen	w-full p-5">
      <HeaderSection
        isComponentVisible={isComponentVisible}
        setIsComponentVisible={setIsComponentVisible}
      />
      <SummarySection />
      <MainSection expenses={expenses} />
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
