const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const allAnimalsRoutes = require('./allAnimalsRoutes');
// const catsRoutes = require('./catsRoutes');
// const dogRoutes = require('./dogsRoutes');
const landingRoutes = require('./landingRoutes');
const loginRoutes = require('./loginRoutes');
const signupRoutes = require('./signupRoutes');
const votingRoutes = require('./votingRoutes');
const breedRoutes = require('./breedRoutes');
const logoutRoutes = require('./logoutRoute')

router.use('/', homeRoutes);
router.use('/allanimals', allAnimalsRoutes);
// router.use('/cats', catsRoutes);
// router.use('/dogs', dogRoutes);
router.use('/landing', landingRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/voting', votingRoutes);
router.use('/animals-by-breed', breedRoutes);
router.use('/logout', logoutRoutes);
module.exports = router;