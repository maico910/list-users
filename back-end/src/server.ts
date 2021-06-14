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

app.put('/users/:id', (request, response) => {
  const {id} = request.params
  const {name, email} = request.body

  const userIndex: number = users.findIndex(user => user.id === id)

  if (userIndex < 0) {
    return response.status(404).json({ error: 'User not found'})
  }

  const updatedUser: User = { id, name, email }

  users[userIndex] = updatedUser

  return response.json(updatedUser) 
})

app.delete('/users/:id', (request, response) => {
  const {id} = request.params
  const {name, email} = request.body

  const userIndex: number = users.findIndex(user => user.id === id)

  if (userIndex < 0) {
    return response.status(404).json({ error: 'User not found'})
  }

  users.splice(userIndex, 1)

  return response.status(204).send()
})

app.listen('3333', () => {
  console.log('Back-end started')
})