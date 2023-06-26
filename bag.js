var deleteButtons = document.getElementsByClassName('delete');

for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', function () {

        var product = this.closest('.product');
        product.remove();
    });
}

function changeText(button) {
    button.innerHTML = "&nbsp&nbspAdded&nbsp";
    button.classList.add("a-clicked");

    let checkmark = document.createElement("span");
    checkmark.classList.add("checkmark");
    checkmark.innerHTML = "&nbsp✅︎";
    button.appendChild(checkmark);

    localStorage.setItem(button.id, "clicked");
}


function goBack() {
    history.back();
}
