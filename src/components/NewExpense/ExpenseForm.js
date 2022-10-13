import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = function (event) {
    setTitle(event.target.value);
  };

  const amountChangeHandler = function (event) {
    setAmount(event.target.value);
  };

  const dateChangeHandler = function (event) {
    setDate(event.target.value);
  };

  const onSubmitHandler = function (event) {
    event.preventDefault();

    const expenseData = {
      id: Math.trunc(Math.random()).toString(),
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);

    setAmount('');
    setDate('');
    setTitle('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onForward}>Cancel</button>
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
