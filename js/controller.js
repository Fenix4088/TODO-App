const controller = ((ctrlModel, ctrlView) => {
    //Transferring house elements from Template to controller
    const DOMElements = ctrlView.getDomElements();
    document.querySelector(DOMElements.form).addEventListener("submit", addItem);
    document.querySelector(DOMElements.itemsList).addEventListener("click", removeItem);
    document.querySelector(DOMElements.filter).addEventListener("keyup", filterItems);

    function addItem(e) {
        // Cancel the form submission
        e.preventDefault();

        // Getting text from imput
        let newItemText = document.querySelector(DOMElements.mainInput).value;

        if (newItemText.trim() === "") {
            alert("Fill in the field");
        } else {
            // Data is written to the model
            const newElement = ctrlModel.saveElement(newItemText);
            // ctrlModel.test(); //Database mappings in the console
            // Clearing the data entry line
            ctrlView.clearInput();
            // Displaying data on the screen
            ctrlView.displayElement(newElement);
        }
    }

    function removeItem(e) {
        if (e.target.hasAttribute("data-action") && e.target.getAttribute("data-action") == "delete") {
            let elementID = parseInt(e.target.closest("li.list-group-item").id);
            //   Removing an item from the model
            ctrlModel.deleteElement(elementID);
            // Removing an element from the Template
            ctrlView.removeElement(elementID);
        }
    }

    //   F-I filtration
    function filterItems(e) {
        // пОЛУЧАЕМ ФРАЗУ ДЛЯ ПОИСКА И ПЕРЕВОДИМ ЕЕ В НИЖНИЙ РЕШИСТР
        const searchedText = e.target.value.toLowerCase();

        // 1. We get a list of all tasks
        const items = document.querySelectorAll("li");

        // 2. Loop through all found li tags with tasks
        items.forEach(function (item) {
            // We get the text of the problem from the list and convert it to lowercase
            const itemText = item.firstChild.textContent.toLowerCase();

            // We check the occurrence of the desired substring in the text of the problem
            if (itemText.indexOf(searchedText) != -1) {
                // If there is an entry, show the element with the task
                item.style.display = "block";
            } else {
                // If there is no entry, then hide
                item.style.display = "none";
            }
        });
    }

    return {
        init: function () {
            console.log("App Started!");
            // During initialization, we output data from storage
            ctrlModel.data.forEach((item) => {
                ctrlView.displayElement(item);
            });
        },
    };
})(model, view);

controller.init();
