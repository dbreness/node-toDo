const argv = require('./config/yargs').argv;
const toDo = require('./to-do/toDo');
const colors = require('colors');

let valor = argv._[0];

acctions = {
    create: 'create',
    update: 'update',
    list: 'list',
    delete: 'delete'
}

switch (valor) {
    case acctions.create:
        console.log(toDo.create(argv.description));
        break;

    case acctions.update:
        let result = toDo.update(argv.description, argv.complet);
        if (result) {
            console.log(colors.bgRed('Task update'.bold));
        } else {

        }
        break;

    case acctions.list:

        console.log(colors.bgRed(toDo.listAll()));
        break;

    case acctions.delete:

        console.log(colors.bgRed(toDo.deleteTask(argv.description)));
        break;

    default:
        console.log('Mamando...');
        break;
}