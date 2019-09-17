 const xss = require('xss')
 const Treeize = require('treeizie')

const TaskSerive = {
    getAllTasks(db) {
       return db
       .from('nonsequitur_tasks AS tsk')
       .select(
           'tsk.id',
           'tsk.text'
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
               const taskData = thingTree.grow([ thing ]).getData()[0]
               
               return {
                   id: thingData.id,
                   text: xss(taskData.text),
               }
           },
       }
    const userFields = [
        'usr.id AS user:id',
        ]

        module.exports = TaskSerive