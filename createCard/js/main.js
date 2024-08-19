var selectedRow = null;

function onFormSubmit(e) {
  e.preventDefault(); // Prevent the form from submitting
  var formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
    selectedRow = null;
  }
  resetForm();
}

// Retrieve the data for the selected row
function readFormData() {
  var formData = {};
  formData["productCode"] = document.getElementById("productCode").value;
  formData["product"] = document.getElementById("product").value;
  formData["price"] = document.getElementById("price").value;
  formData["qty"] = document.getElementById("qty").value;
  return formData;
}

// Insert the data
function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.productCode;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.product;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.qty;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.price;
  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

// Edit data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("product").value = selectedRow.cells[1].innerHTML;
  document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
  document.getElementById("price").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.productCode;
  selectedRow.cells[1].innerHTML = formData.product;
  selectedRow.cells[2].innerHTML = formData.qty;
  selectedRow.cells[3].innerHTML = formData.price;
}

// Delete data
function onDelete(td) {
  if (confirm("Are you sure to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

// Reset the form after submission
function resetForm() {
  document.getElementById("productCode").value = "";
  document.getElementById("product").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("price").value = "";
  selectedRow = null;
}
