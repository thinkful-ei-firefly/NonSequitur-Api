/*const express = require('express')
const app = require('./app')
const { PORT } = require('./config')

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})

app.get('/express_backend', (req, res)=>{
    res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'})
})*/

const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = {
  item1: 'silly task 1',
  item2: 'silly task 2',
  item3: 'silly task 3',
  item4: 'silly task 4',
}
app.get('/express_backend', (req, res) => res.send(data))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))