const view = (() => {
    const DOMStrings = {
        form: "#addForm",
        itemsList: "#items",
        filter: "#filter",
        mainInput: "#newItemText",
    };

    // function to display the item on the page
    function displayElement(obj) {
        const unorderedList = document.querySelector(DOMStrings.itemsList);
        const newElement = `<li id=${obj.id} class="list-group-item">
                                    ${obj.value}
                                    <button
                                        data-action="delete"
                                        type="button"
                                        class="btn btn-light btn-sm float-right"
                                    >
                                        Delete
                                    </button>
                                </li>`;
        unorderedList.insertAdjacentHTML("beforeend", newElement);
    }

    // function to remove an element from the page
    function removeElement(ID) {
        document.getElementById(ID).remove();
    }

    // function clear the input field
    function clearInput() {
        const inputForm = document.querySelector(DOMStrings.mainInput);
        inputForm.value = "";
        inputForm.focus();
    }

    return {
        displayElement,
        clearInput,
        removeElement,
        getDomElements: function () {
            return DOMStrings;
        },
    };
})();
