import express, { json } from 'express'
import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js'
import messageRoutes from './routes/message.route.js'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { app, server } from './lib/socket.js'
dotenv.config()

app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
)

app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/user', messageRoutes)

const PORT = process.env.PORT || 5050

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
