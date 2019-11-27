const fs = require('fs');

let toDoList = [];

const create = (pdescription) => {

    toDoLoad();

    let toDo = {
        description: pdescription,
        complet: false
    };

    toDoList.push(toDo);
    save();
    return toDo;
}

const listAll = () => {

    try {

        toDoList = require('../db/data.json');
    } catch (error) {

        toDoList = [];

    }

    return toDoList
}

const save = () => {

    let data = JSON.stringify(toDoList);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;

    });
}

const update = (pdescription, pcomplet = true) => {

    toDoLoad();
    let index = toDoList.findIndex(task => task.description === pdescription);

    if (index >= 0) {
        toDoList[index].complet = pcomplet;
        save();
        return true;
    } else {
        return false;
    }


}

const toDoLoad = () => {

    try {

        listAll();

    } catch (error) {

        toDoList = [];

    }

    return toDoList;
}

const deleteTask = (pdescription) => {
    listAll();

    let index = toDoList.findIndex(task => task.description === pdescription);

    if (index >= 0) {

        toDoList = toDoList.filter(task => {
            return task.description !== pdescription
        });
        save();
        return true;

    } else {
        return false
    }

}









module.exports = {
    create,
    listAll,
    update,
    deleteTask
}