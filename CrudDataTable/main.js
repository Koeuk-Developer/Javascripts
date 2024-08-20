

var seletedRow = null;

// Function to handle row selection
function showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const main = document.querySelector('.main');
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector('.alert').remove(), 3000);

}

// delete data 

document.querySelector('.student-list').addEventListener('click', (e) => {
    target = e.target;
    if (target.classList.contains('delete')) {
        target.parentElement.parentElement.remove();
        showAlert("Student List deleted", "danger");
    }
})