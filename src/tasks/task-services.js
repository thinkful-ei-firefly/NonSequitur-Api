const xss = require('xss')
const Treeize = require('treeize')

const TaskSerive = {
    getAllTasks(db) {
        return db
            .from('nonsequitur AS tsk')
            .select(
                'tsk.id',
                'tsk.content'
            )
            
    },

    getById(db, id) {
        return TaskSerive.getAllTasks(db)
            .where('tsk.id', id)
            .first()
    },

    serializeTasks(tasks) {
        return tasks.map(this.serializeTasks)
    },

    serializeTasks(tasks) {
        const taskTree = new Treeize()
        const taskData = thingTree.grow([thing]).getData()[0]

        return {
            id: thingData.id,
            content: xss(taskData.content),
        }
    },
}
const userFields = [
    'usr.id AS user:id',
]

module.exports = TaskSerive