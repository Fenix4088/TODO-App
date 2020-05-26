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

    if (data.length > 0) {
      const lastIndex = data.length - 1;
      ID = data[lastIndex].id + 1;
    }
    // Создаем новый элемент и записываем его в массив itemStorage
    const newElement = new newListItem(ID, value);
    data.push(newElement);
    // Сохраняем в Local Storage
    if (localStorage.length > 0) {
      let getedArr = JSON.parse(localStorage.getItem("ToDo"));
      getedArr.push(newElement);
      localStorage.setItem("ToDo", JSON.stringify(getedArr));
    } else {
      localStorage.setItem("ToDo", JSON.stringify(data));
    }

    return newElement;
  }

  // Ф-я удаления из модели
  function deleteElement(ID) {
    const index = data.findIndex((item) => item.id === ID);
    if (index !== -1) {
      data.splice(index, 1);
    }

    // Добавоение обновленного массива в LocalStorage
    const getedArr = JSON.parse(localStorage.getItem("ToDo"));
    getedArr.splice(index, 1);
    localStorage.setItem("ToDo", JSON.stringify(getedArr));
  }

  const data = [];

  return {
    data,
    saveElement,
    deleteElement,
    test: function () {
      console.log(data);
    },
  };
})();
