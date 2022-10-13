import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

function App() {
  let dummy_Expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // const [expenseList, updateExpenseList] = useState(dummy_Expenses);
  const [data, setData] = useState(dummy_Expenses);

  useEffect(() => {
    const clashingData = localStorage.getItem('UpdatedData');

    if (clashingData === '2') {
      setData(() => {
        return dummy_Expenses.push(data);
      });
    }
  }, [dummy_Expenses, data]);

  const updateData = function (receivedData) {
    setData(() => {
      dummy_Expenses.push(receivedData);
      localStorage.setItem('UpdatedData', '2');
      console.log(dummy_Expenses);
      return dummy_Expenses;
    });
  };

  // useEffect(() => {
  //   const dataUpdated = localStorage.getItem('dataUpdate');

  //   if (dataUpdated === '2') {
  //     setData((expenses) => dummy_Expenses.push({ ...expenses }));
  //   }
  // }, [dummy_Expenses]);

  // const receivedExpenseHandler = (data) => {
  //   updateExpenseList((prevExp) => {
  //     return [data, ...prevExp];
  //   });
  // };

  return (
    <div>
      <NewExpense onRec={updateData} />
      <Expenses items={data} />
    </div>
  );
}

export default App;
