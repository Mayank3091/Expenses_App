import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = function (props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (receivedExpenses) => {
    const expenseData = {
      ...receivedExpenses,
    };

    props.onRec(expenseData);
  };

  const showModalHandler = function () {
    setIsEditing(true);
  };

  const onForwardHandler = function () {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={showModalHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onForward={onForwardHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
