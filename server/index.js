require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ListCtrl = require('./ListController')

const app = express()

const { CONNECTION_STRING, SERVER_PORT } = process.env

app.use(express.json())

app.post('/api/list/new', ListCtrl.newList)
app.post('/api/category/new', ListCtrl.newCategory)



massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
}).then(dbInstance => {
  app.set('db', dbInstance)
  console.log('DB is alive!')
  app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is alive!`))
})