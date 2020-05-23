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
    let newItemText = document.querySelector(DOMElements.mainInput).value;

    if (newItemText.trim() === "") {
        alert("Заполните поле");
    } else {

        // Данные записываются в модель
        const newElement = ctrlModel.saveElement(newItemText);
        ctrlModel.test(); //Отображения базы данных в консоле
        ctrlView.clearInput()
        // Отображаем данные на экране
        ctrlView.displayElement(newElement);
        // Очищаем строку ввода данных
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
