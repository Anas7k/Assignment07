let arrEmployees

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees') !== null) {
    arrEmployees = JSON.parse(localStorage.getItem('employees'))
} else {
    // CREATE AN ARRAY OF EMPLOYEES
    arrEmployees = [
        [43556344, 'Zak Ruvalcaba', 3244, 'zak@vectacor.com', 'Executive'],
        [46345634, 'Sally Smith', 6635, 'sally@vectacor.com', 'Adminstrative'],
        [67356254, 'Pedro Ramirez', 4525, 'pedro@vectacor.com', 'Sales'],
        [23455553, 'Robin Banks', 8788, 'robin@vectacor.com', 'Marketing'],
        [76585995, 'Sue Wedge', 2435, 'sue@vectacor.com', 'Quality Assurance']
    ]
}

// GET DOM ELEMENTS
let form = document.getElementById('addForm');
let empTable = document.querySelector('#empTable');
let empCount = document.getElementById('empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let id = parseInt(document.getElementById('id').value)
    let name = document.getElementById('name').value
    let extension = parseInt(document.getElementById('extension').value)
    let email = document.getElementById('email').value
    let department = document.getElementById('department').value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let arrNewEmployee = [ id, name, extension, email, department ]
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    arrEmployees.push(arrNewEmployee)
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    form.id.focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this user?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentElement.parentElement.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            arrEmployees.splice(rowIndex - 1, 1)
            // BUILD THE GRID
            buildGrid()
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of arrEmployees) {
        tbody.innerHTML +=
        `
            <tr>
                <td>${employee[0]}</td>
                <td>${employee[1]}</td>
                <td>${employee[2]}</td>
                <td>${employee[3]}</td>
                <td>${employee[4]}</td>
                <td><button class='btn btn-sm btn-light delete'></button></td>
            </tr>
        `
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${arrEmployees.length})`
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(arrEmployees));
};
