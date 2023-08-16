const router = require('express').Router()
const commentRoutes =  require('./commentRoutes')
// const userRoutes = require('./userRoutes')
// const signupRoutes = require('./signupRoutes')


router.use('/comment', commentRoutes)
// router.use('/user', userRoutes)
// router.use('/signupRoutes', signupRoutes)


module.exports = router