const controller = ((ctrlModel, ctrlView) => {
  //Передаекм дом элементы из Шаблона в контроллер
  const DOMElements = ctrlView.getDomElements();
  document.querySelector(DOMElements.form).addEventListener("submit", addItem);
  document.querySelector(DOMElements.itemsList).addEventListener("click", removeItem);
  document.querySelector(DOMElements.filter).addEventListener("keyup", filterItems);

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
      // ctrlModel.test(); //Отображения базы данных в консоле
      // Очищаем строку ввода данных
      ctrlView.clearInput();
      // Отображаем данные на экране
      ctrlView.displayElement(newElement);
    }
  }

  function removeItem(e) {
    if (
      e.target.hasAttribute("data-action") &&
      e.target.getAttribute("data-action") == "delete"
    ) {
      let elementID = parseInt(e.target.closest("li.list-group-item").id);
      //   Удаляем элемент из модели
      ctrlModel.deleteElement(elementID);
      // Удаляем элемент из Шаблона
      ctrlView.removeElement(elementID);
    }
  }

  //   Ф-я фильтрации
  function filterItems(e) {
    // пОЛУЧАЕМ ФРАЗУ ДЛЯ ПОИСКА И ПЕРЕВОДИМ ЕЕ В НИЖНИЙ РЕШИСТР
    const searchedText = e.target.value.toLowerCase();

    // 1. Получаем список всех задач
    const items = document.querySelectorAll("li");

    // 2. Перебираем циклом все найденые теги li с задачами
    items.forEach(function (item) {
      // Получаем текст задачи из списка и переводим его в нижний регистр
      const itemText = item.firstChild.textContent.toLowerCase();

      // Проверяем вхождение искомой подстроки в текст задачи
      if (itemText.indexOf(searchedText) != -1) {
        // Если вхожжение есть показываем элемент с задачей
        item.style.display = "block";
      } else {
        // Если вхожления нет то скрываем
        item.style.display = "none";
      }
    });
  }

  return {
    init: function () {
      console.log("App Started!");
      // При инициализации выводим данные из хранилища
      if (localStorage.length > 0) {
        const localStorageArr = JSON.parse(localStorage.getItem("ToDo")) || [];
        localStorageArr.forEach((item) => {
          ctrlView.displayElement(item);
          ctrlModel.data.push(item);
        });
      }
    },
  };
})(model, view);

controller.init();
