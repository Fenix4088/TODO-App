const controller = ((ctrlModel, ctrlView) => {

  //Передаекм дом элементы из Шаблона в контроллер
  const DOMElements = ctrlView.getDomElements();
  document.querySelector(DOMElements.form).addEventListener("submit", addItem);
  document
    .querySelector(DOMElements.itemsList)
    .addEventListener("click", removeItem);
  document
    .querySelector(DOMElements.filter)
    .addEventListener("keyup", filterItems);

  function addItem(e) {
    // Отменяем отправку формы
    e.preventDefault();

    // Получаем текст из импута
    const newItemText = document.querySelector(DOMElements.mainInput).value;

    if (newItemText.trim() === "") {
        alert("Заполните поле");
    } else {
        // Данные записываются в модель
        ctrlModel.saveElement(newItemText);
        ctrlModel.test();
    }

  }

  function removeItem() {}

  function filterItems() {}

  return {
    init: function () {
      console.log("App Started!");
    },
  };
})(model, view);

controller.init();
