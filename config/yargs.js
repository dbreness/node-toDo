const argv = require('yargs')
    .command('create', 'Crear un elemento por hacer', {
        description: {
            alias: 'd',
            demand: true,
            desc: 'Descripcion de la tarea'
        }
    })
    .command('update', 'Actualizar el estado de una tarea', {
        description: {
            alias: 'd',
            demand: true
        },
        complet: {
            alias: 'c',
            default: true
        }
    })
    .command('delete', 'Crear un elemento por hacer', {
        description: {
            alias: 'd',
            demand: true,
            desc: 'Descripcion de la tarea para eliminar'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}