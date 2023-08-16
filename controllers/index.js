const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const allAnimalsRoutes = require('./allAnimalsRoutes');
const catsRoutes = require('./catsRoutes');
const dogRoutes = require('./dogsRoutes');
const landingRoutes = require('./landingRoutes');
// const loginRoutes = require('./loginRoutes');
// const signupRoutes = require('./signupRoutes');
const votingRoutes = require('./votingRoutes');
const apiRoutes =  require('./api')

router.use('/api', apiRoutes)
router.use('/', homeRoutes);
router.use('/allanimals', allAnimalsRoutes);
router.use('/cats', catsRoutes);
router.use('/dogs', dogRoutes);
router.use('/landing', landingRoutes);
// router.use('/login', loginRoutes);
// router.use('/signup', signupRoutes);
router.use('/voting', votingRoutes);

module.exports = router;