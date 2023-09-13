// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expenseAmount, balanceAmount} = props
  return (
    <div className="money-details-container">
      <div className="balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-manager-image"
        />
        <div className="details-card">
          <p className="detail-text">Your Balance</p>
          <p className="details-amount" data-testid="balanceAmount">
            RS {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-manager-image"
        />
        <div className="details-card">
          <p className="detail-text">Your Income</p>
          <p className="details-amount" data-testid="incomeAmount">
            RS {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-manager-image"
        />
        <div className="details-card">
          <p className="detail-text">Your Expenses</p>
          <p className="details-amount" data-testid="expensesAmount">
            RS {expenseAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
