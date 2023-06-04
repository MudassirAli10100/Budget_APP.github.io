const nameInput = document.getElementById('name');
const amountInput = document.getElementById('amount');
const addBtn = document.getElementById('add-btn');
const transactionList = document.getElementById('transaction-list');

addBtn.addEventListener('click', addTransaction);

function addTransaction() {
  const name = nameInput.value;
  const amount = amountInput.value;

  if (name.trim() === '' || amount.trim() === '') {
    alert('Please enter both name and amount.');
    return;
  }

  const transactionItem = document.createElement('div');
  transactionItem.classList.add('transaction-item');

  const nameElement = document.createElement('span');
  nameElement.classList.add('name');
  nameElement.textContent = name;

  const amountElement = document.createElement('span');
  amountElement.classList.add('amount');
  amountElement.textContent = '$' + amount;

  transactionItem}