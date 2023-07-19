const paramsSelector = document.getElementById('params-selector');
const headerSelector = document.getElementById('header-selector');
const bodySelector = document.getElementById('body-selector');
const paramsTable = document.getElementById('query');
const headersTable = document.getElementById('headers');
const bodyTable = document.getElementById('body');
const addRow = document.querySelectorAll('#add-row');
const deleteRow = document.querySelectorAll('#delete-row');
const tableFormat = document.getElementById('table-format');
// const parent = document.querySelectorAll('.data-entry-box');
// const newRow = document.querySelectorAll('.data-entry-input');

const addNewRow = e => {
  const parent = e.target.closest('.data-entry-box');
  const newRow = document.createElement('div');
  newRow.classList.add('data-entry-input');
  newRow.innerHTML = `
      <input type="text" placeholder="Key" />
      <input type="text" placeholder="Value" />
      <input type="text" placeholder="Description" />
      <button class="delete-row" data-hover="Delete Row">
        <i class="fa-regular fa-trash-can" style="color: #f0f2f5"></i>
      </button>
    `;

  parent.insertBefore(newRow, e.target.parentNode);
};

for (let i = 0; i < addRow.length; i++) {
  addRow[i].addEventListener('click', addNewRow);
}

// const deleteOnClick = () => {
//   parent.removeChild(newRow);
// };

// for (let i = 0; i < deleteRow.length; i++) {
//   deleteRow[i].addEventListener('click', deleteOnClick);
// }

const onClickParams = () => {
  paramsSelector.classList.add('selected');
  headerSelector.classList.remove('selected');
  bodySelector.classList.remove('selected');

  paramsTable.classList.remove('hidden');
  headersTable.classList.add('hidden');
  bodyTable.classList.add('hidden');
};

paramsSelector.addEventListener('click', onClickParams);

const onClickHeader = () => {
  paramsSelector.classList.remove('selected');
  headerSelector.classList.add('selected');
  bodySelector.classList.remove('selected');
  paramsTable.classList.add('hidden');
  headersTable.classList.remove('hidden');
  bodyTable.classList.add('hidden');
};

headerSelector.addEventListener('click', onClickHeader);

const onClickBody = () => {
  paramsSelector.classList.remove('selected');
  headerSelector.classList.remove('selected');
  bodySelector.classList.add('selected');

  paramsTable.classList.add('hidden');
  headersTable.classList.add('hidden');
  bodyTable.classList.remove('hidden');
};

bodySelector.addEventListener('click', onClickBody);
