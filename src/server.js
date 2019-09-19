const express = require('express')
const knex = require('knex')
const { PORT, DB_URL } = require('./config')
const bodyParser = require('body-parser')
const taskService = require('./tasks/task-services')
const app = require('./app')
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
const db = knex({
    client: 'pg',
    connection: DB_URL,
  })
  
  app.set('db', db)
  
  
const getData = async () => {
  const rows = await taskService.getAllTasks(db)
    let x = []
    let count = 0
    while (count < 4) {
      let index =  Math.floor((Math.random() * 19) + 0)
      x.push(rows [index])
      count ++ 
      }
    return x 
    }
app.get('/express_backend',async (req, res) => res.send(await getData()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
