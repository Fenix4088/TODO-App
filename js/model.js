const model = (() => {
    class NewListItem {
        constructor(id, value) {
            this.value = value;
            this.id = id;
        }
    }

    // function additions to the model
    function saveElement(value) {
        // Расчитываем ID
        let ID = 0;

        if (data.length > 0) {
            const lastIndex = data.length - 1;
            ID = data[lastIndex].id + 1;
        }
        // Create a new item and write it to the itemStorage array
        const newElement = new NewListItem(ID, value);
        data.push(newElement);
        // Сохраняем в Local Storage
        localStorage.setItem("ToDo", JSON.stringify(data));

        return newElement;
    }

    // function deleting from the model
    function deleteElement(ID) {
        const index = data.findIndex((item) => item.id === ID);
        if (index !== -1) {
            data.splice(index, 1);
        }

        // Adding an updated array to LocalStorage
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
