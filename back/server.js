import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import colors from 'colors'

/* Config */
import { connectDB } from './config/db.js'

/* MiddleWare */
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

/* Routes */
import userRoutes from './route/userRoutes.js'
import exerciseRoutes from './route/exerciseRoutes.js'
import workoutRoutes from './route/workoutRoutes.js'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV == 'development') app.use(morgan('dev'))

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/exercises', exerciseRoutes)
app.use('/api/workouts', workoutRoutes)

app.use(errorHandler)
app.use(notFound)

const PORT = process.env.PORT || 5000

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
)
