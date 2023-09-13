import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialTransactionsList = []

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amount: '',
    option: transactionTypeOptions[0].optionId,
    transactionsList: initialTransactionsList,
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeOption = event => {
    this.setState({option: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amount, option} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === option,
    )
    const {displayText} = typeOption
    if (titleInput !== '' && amount !== '') {
      const newTransaction = {
        id: uuidv4(),
        title: titleInput,
        amount: parseInt(amount),
        type: displayText,
      }
      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
        titleInput: '',
        amount: '',
        option: transactionTypeOptions[0].optionId,
      }))
    }
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const updatedTransactionList = transactionsList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({
      transactionsList: updatedTransactionList,
    })
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expenseAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenseAmount += eachTransaction.amount
      }
    })
    return expenseAmount
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    let expenseAmount = 0
    let balanceAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expenseAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expenseAmount
    return balanceAmount
  }

  render() {
    const {titleInput, amount, option, transactionsList} = this.state
    const incomeAmount = this.getIncome()
    const expenseAmount = this.getExpenses()
    const balanceAmount = this.getBalance()

    return (
      <div className="bg-container">
        <div className="money-manager-card">
          <h1 className="manager-name">Hi,Richard</h1>
          <p className="welcome-text">
            Welcome back to your
            <span className="span-text"> Money Manager</span>
          </p>
        </div>

        <MoneyDetails
          incomeAmount={incomeAmount}
          expenseAmount={expenseAmount}
          balanceAmount={balanceAmount}
        />

        <div className="transactions-Container">
          <div className="add-transactions-card">
            <h1 className="transaction-heading">Add Transaction</h1>

            <form className="form-card" onSubmit={this.onAddTransaction}>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                className="input-cards"
                onChange={this.onChangeTitle}
                value={titleInput}
              />

              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                className="input-cards"
                onChange={this.onChangeAmount}
                value={amount}
              />

              <label htmlFor="select" className="label">
                TYPE
              </label>
              <select
                className="input-cards"
                id="select"
                value={option}
                onChange={this.onChangeOption}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>

              <button className="submit-button" type="submit">
                Add
              </button>
            </form>
          </div>

          <div className="history-card">
            <h1 className="transaction-heading">History</h1>
            <div className="transactions-list-head">
              <p className="list-heads">Title</p>
              <p className="list-heads">Amount</p>
              <p className="list-heads">Type</p>
            </div>
            <ul className="transactions-list">
              {transactionsList.map(eachTransaction => (
                <TransactionItem
                  transactionDetails={eachTransaction}
                  key={eachTransaction.id}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
