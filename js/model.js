const model = (() => {
  class newListItem {
    constructor(id, value) {
      this.value = value;
      this.id = id;
    }
  }

  // Ф-я доюавления в можель
  function saveElement(value) {
    // Расчитываем ID
    let ID = 0;
    if (data.itemStorage.length > 0) {
      const lastIndex = data.itemStorage.length - 1;
      ID = data.itemStorage[lastIndex].id + 1;
    }
    // Создаем новый элемент и записываем его в массив itemStorage
    const newElement = new newListItem(ID, value);
    data.itemStorage.push(newElement);
    // Сохраняем в Local Storage
    localStorage.setItem("ToDo", JSON.stringify(data.itemStorage));
    return newElement;
  }

  // Ф-я удаления из модели
  function deleteElement(ID) {
    const index = data.itemStorage.findIndex((item) => item.id === ID);
    if (index !== -1) {
      data.itemStorage.splice(index, 1);
    }

    // Добавоение обновленного массива в LocalStorage
    const getedArr = JSON.parse(localStorage.getItem("ToDo"));
    getedArr.splice(index, 1);
    localStorage.setItem("ToDo", JSON.stringify(getedArr));
  }

  const data = {
    itemStorage: [],
  };

  return {
    saveElement,
    deleteElement,
    test: function () {
      console.log(data);
    },
  };
})();
