const view = (() => {

    function getDomElements () {
        return {
            form: "#addForm",
            itemsList: "#items",
            filter: "#filter",
            mainInput: "#newItemText"
        }
    }




    return {
        getDomElements,
    }
})();