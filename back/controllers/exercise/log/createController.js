import asyncHandler from 'express-async-handler'
import ExerciseLog from '../../../models/exerciseLogModel.js'

// @desc    Create new exerciseLog        - description
// @route   POST /api/exercises/log   - route structure
// @access  Private                  - private
export const createNewExerciseLog = asyncHandler(async (req, res) => {
	const { exerciseId, times } = req.body

	let timesArray = []

	for (let i = 0; i < times; i++) {
		timesArray.push({
			weight: 0,
			repeat: 0
		})
	}

	console.log(timesArray)

	const exerciseLog = await ExerciseLog.create({
		user: req.user._id,
		exercise: exerciseId,
		// completed - default
		times: timesArray
	})

	res.json(exerciseLog)
})
