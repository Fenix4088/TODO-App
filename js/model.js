const model = ( () => {

    class newListItem  {
        constructor (id, value) {
            this.value = value;
            this.id = id;
        }
    }

    function saveElement (value) {
        // Расчитываем ID
        let ID = 0
        if (data.itemStorage.length > 0) {
            const lastIndex = data.itemStorage.length - 1;
            ID = data.itemStorage[lastIndex].id + 1;
        }
        // Создаем новый элемент и записываем его в массив itemStorage
        const newElement = new newListItem(ID, value);
        console.log(newElement)
        data.itemStorage.push(newElement);
        return newElement;
    }


    const data = {
        itemStorage: []
    }

    return {
        saveElement,
        test: function () {
            console.log(data);
        }
    }

})();