import asyncHandler from 'express-async-handler'
import WorkoutLog from '../../models/workoutLogModel.js'

// @desc    Create new exerciseLog        - description
// @route   POST /api/workouts/log   - route structure
// @access  Private                  - private
export const createNewWorkoutLog = asyncHandler(async (req, res) => {
	const { workoutId } = req.body

	const workoutLog = await WorkoutLog.create({
		user: req.user._id,
		workout: workoutId
		// completed - default
	})

	res.json(workoutLog)
})
