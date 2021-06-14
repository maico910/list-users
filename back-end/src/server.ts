import express from 'express'
import { v4 as uuid } from 'uuid'

const app = express()

app.use(express.json())

interface User {
  id: string,
  name: string,
  email: string
}

const users: User[] = []

app.get('/users', (request, response) => {
  return response.json(users)
})

app.post('/users', (request, response) => {
  const {name, email} = request.body

  const newUser: User = { id: uuid(), name, email}

  users.push(newUser)

  return response.json(newUser) 
})

app.listen('3333', () => {
  console.log('Back-end started')
})