// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {title, amount, type, id} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transactions-lists-card">
      <div className="card">
        <p className="list-values">{title}</p>
        <p className="list-values">Rs {amount}</p>
        <p className="list-values">{type}</p>
      </div>
      <button
        className="delete-button"
        type="button"
        data-testid="delete"
        onClick={onDeleteTransaction}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-image"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
