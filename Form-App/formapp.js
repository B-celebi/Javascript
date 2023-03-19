//declarations
let formDOM = document.querySelector("#formLogin");
let ulDOM = document.querySelector("#list1");
var value = [];


//pulling the stored values from Local Storage
if (localStorage.getItem('items') != null) {
    value = JSON.parse(localStorage.getItem('items'));
}

//listing all the elements that saved before.
for (let lis of value) {
    let liDOM = document.createElement('li');
    liDOM.className = "list-group-item d-flex justify-content-between align-items-center";
    liDOM.innerHTML = lis;
    ulDOM.append(liDOM);
}


//functions

// first we will modify the reset button
function zero(event) {
    event.preventDefault();
    while (ulDOM.lastChild) {
        ulDOM.removeChild(ulDOM.lastChild);
    }
    localStorage.removeItem('items');
}

// Then we're going to modify the Submit button
function handleSubmit(e) {
    e.preventDefault();
    // we are creating another li element everytime we click the submit button.
    let liDOM = document.createElement('li');
    liDOM.className = "list-group-item d-flex justify-content-between align-items-center";
    let kadi = document.querySelector("#userName");
    let score = document.querySelector("#score");
    // checking username and score here
    if (kadi.value && score.value) {
        liDOM.innerHTML = `${kadi.value} <span class="badge bg-primary rounded-pill">${score.value}</span>`;
        ulDOM.appendChild(liDOM);
        value.push(liDOM.innerHTML);
        localStorage.setItem('items', JSON.stringify(value));
    }
    else {
        alert("kullanıcı adı veya not boş bırakılmış.");
    }
}