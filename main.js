const paramsSelector = document.getElementById('params-selector');
const headerSelector = document.getElementById('header-selector');
const bodySelector = document.getElementById('body-selector');
const paramsTable = document.getElementById('query');
const headersTable = document.getElementById('headers');
const bodyTable = document.getElementById('body');
const addRow = document.querySelectorAll('#add-row');
const method = document.getElementById('method');
const dropdownOptions = document.querySelector('.dropdown-options');
const dropdownContainer = document.querySelector('.dropdown');
const options = dropdownOptions.querySelectorAll('p');

let selectedValue = 'GET';

const changeTextColor = () => {
  // Color changes for input text
  if (method.value === 'GET') {
    method.style.color = '#6bdd9a';
  } else if (method.value === 'POST') {
    method.style.color = '#ffe47e';
  } else if (method.value === 'PUT') {
    method.style.color = '#74aef6';
  } else if (method.value === 'PATCH') {
    method.style.color = '#c0a8e1';
  } else if (method.value === 'DELETE') {
    method.style.color = '#f79a8e';
  } else if (method.value === 'HEAD') {
    method.style.color = '#6bdd9a';
  } else if (method.value === 'OPTIONS') {
    method.style.color = '#f15eb0';
  }
};

method.addEventListener('keyup', changeTextColor);

for (let i = 0; i < options.length; i++) {
  // Loop through dropdown children (p tags and listen for click events on anyone of them)
  const selectMethod = () => {
    selectedValue = options[i].textContent;
    method.value = selectedValue;
    changeTextColor();
    dropdownContainer.style.display = 'none';
  };

  options[i].addEventListener('click', selectMethod);
}

const onFocus = () => {
  dropdownContainer.style.display = 'block';
  // Check if the input value is empty (or just whitespace)
  if (method.value.trim() === '') {
    // Change the value to a default value when focused
    method.value = selectedValue;
    changeTextColor();
  }
};

// Listen for focus event
method.addEventListener('focus', onFocus);

const onBlur = () => {
  // Give time allowance for event to register before display none
  setTimeout(() => {
    dropdownContainer.style.display = 'none';
  }, 200);
  // If the input is left empty when blurred, revert to the original value
  if (method.value.trim() === '') {
    method.value = selectedValue;
    changeTextColor();
  }
};

// Listen for blur event
method.addEventListener('blur', onBlur);

// Delete row function
const deleteAddedRows = newRow => {
  const clicked = newRow.querySelector('#delete-row');

  const deleteOnClick = e => {
    const element = e.target.closest('.data-entry-input');
    element.remove();
  };

  clicked.addEventListener('click', deleteOnClick);
};

// Add New row function
const addNewRow = e => {
  const parent = e.target.closest('.data-entry-box');
  const newRow = document.createElement('div');
  newRow.classList.add('data-entry-input');
  newRow.innerHTML = `
      <input type="text" placeholder="Key" />
      <input type="text" placeholder="Value" />
      <input type="text" placeholder="Description" />
      <button id="delete-row" data-hover="Delete Row">
        <i class="fa-regular fa-trash-can" style="color: #f0f2f5"></i>
      </button>
    `;

  parent.insertBefore(newRow, e.target.parentNode);

  deleteAddedRows(newRow);
};

for (let i = 0; i < addRow.length; i++) {
  addRow[i].addEventListener('click', addNewRow);
}

// Switch to query params tab
const onClickParams = () => {
  paramsSelector.classList.add('selected');
  headerSelector.classList.remove('selected');
  bodySelector.classList.remove('selected');

  paramsTable.classList.remove('hidden');
  headersTable.classList.add('hidden');
  bodyTable.classList.add('hidden');
};

paramsSelector.addEventListener('click', onClickParams);

// Switch to header tab
const onClickHeader = () => {
  paramsSelector.classList.remove('selected');
  headerSelector.classList.add('selected');
  bodySelector.classList.remove('selected');

  paramsTable.classList.add('hidden');
  headersTable.classList.remove('hidden');
  bodyTable.classList.add('hidden');
};

headerSelector.addEventListener('click', onClickHeader);

// Switch to body tab
const onClickBody = () => {
  paramsSelector.classList.remove('selected');
  headerSelector.classList.remove('selected');
  bodySelector.classList.add('selected');

  paramsTable.classList.add('hidden');
  headersTable.classList.add('hidden');
  bodyTable.classList.remove('hidden');
};

bodySelector.addEventListener('click', onClickBody);
