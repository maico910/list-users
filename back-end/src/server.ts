import express from 'express'

const app = express()

interface User {
  id: string,
  name: string,
  email: string
}

const users: User[] = []

app.get('/users', (request, response) => {
  return response.json(users)
})

app.listen('3333', () => {
  console.log('Back-end started')
})