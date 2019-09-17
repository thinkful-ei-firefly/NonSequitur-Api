const knex = require('knex')
const app = require('../src/app')

describe('Task Endpoints', function() {
    let db 
})

before('make knex instance', () => {
    db = knex({
        client: 'pg',
        connection: process.env.TEST_DB_URL
    })
    app.set('db', db)
})

//help