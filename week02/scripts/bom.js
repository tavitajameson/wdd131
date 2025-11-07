const input = document.querySelector('#chapter');
const button = document.querySelector('#add');
const list = document.querySelector('#list');

button.addEventListener('click', function () {

    if (input.value.trim() === "") {
        input.focus();
        return; 
    }

    let li = document.createElement('li');
    let deleteBtn = document.createElement('button');

    li.textContent = input.value;
    deleteBtn.textContent = "❌";

    deleteBtn.setAttribute("aria-label", `Remove ${input.value}`);

    deleteBtn.classList.add("delete");

    li.append(deleteBtn);

    list.append(li);

    input.value = "";
    input.focus();
});

list.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove(); 
    }
});
