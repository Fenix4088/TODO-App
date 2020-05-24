const view = (() => {
  const DOMStrings = {
    form: "#addForm",
    itemsList: "#items",
    filter: "#filter",
    mainInput: "#newItemText",
  };

  // Ф-я для отображения элемента на странице
  function displayElement(obj) {
    const unorderedList = document.querySelector(DOMStrings.itemsList);
    const newElement = `<li id=${obj.id} class="list-group-item">
                                    ${obj.value}
                                    <button
                                        data-action="delete"
                                        type="button"
                                        class="btn btn-light btn-sm float-right"
                                    >
                                        Удалить
                                    </button>
                                </li>`;
    unorderedList.insertAdjacentHTML("beforeend", newElement);
  }

  // Ф-я для удаления элемента со странице
  function hideElement(ID) {
    document.getElementById(ID).remove();
  }

  // Ф-я очистки поля ввода
  function clearInput() {
    const inputForm = document.querySelector(DOMStrings.mainInput);
    inputForm.value = "";
    inputForm.focus();
  }

  return {
    displayElement,
    clearInput,
    hideElement,
    getDomElements: function () {
      return DOMStrings;
    },
  };
})();
