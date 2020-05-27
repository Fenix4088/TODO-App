const model = (() => {
  class NewListItem {
    constructor(id, value) {
      this.value = value;
      this.id = id;
    }
  }

  // Ф-я доюавления в можель
  function saveElement(value) {
    // Расчитываем ID
    let ID = 0;

    if (data.length > 0) {
      const lastIndex = data.length - 1;
      ID = data[lastIndex].id + 1;
    }
      // Создаем новый элемент и записываем его в массив itemStorage
      const newElement = new NewListItem(ID, value);
      data.push(newElement);
      // Сохраняем в Local Storage
      localStorage.setItem("ToDo", JSON.stringify(data));

      return newElement;
  }

  // Ф-я удаления из модели
  function deleteElement(ID) {
    const index = data.findIndex((item) => item.id === ID);
    if (index !== -1) {
      data.splice(index, 1);
    }

    // Добавоение обновленного массива в LocalStorage
    localStorage.setItem("ToDo", JSON.stringify(data));
  }

  const data = JSON.parse(localStorage.getItem("ToDo")) || [];

  return {
    data,
    saveElement,
    deleteElement,
    test: function () {
      console.log(data);
    },
  };
})();
