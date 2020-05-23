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
    
    function deleteElement (ID) {
        const index = data.itemStorage.findIndex(item => item.id === ID);
        console.log("deleteElement -> index", index)
        if(index !== -1) {
            data.itemStorage.splice(index, 1);    
        }

        // data.itemStorage.forEach( (item) => {
        //     if(ID === item.id) {
        //         data.itemStorage.splice(ID);
        //     }
        // })
    }


    const data = {
        itemStorage: []
    }

    return {
        saveElement,
        deleteElement,
        test: function () {
            console.log(data);
        }
    }

})();