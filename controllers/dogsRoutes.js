const router = require('express').Router();
const { Dog } = require('../models')

// Get all dogs
router.get('/', async (req, res) => {
    try {
        const dbCatData = await Dog.findAll({
        });

        const dogs = dbCatData.map((dogs) =>
            dogs.get({ plain: true }));
        // res.render('allAnimals', { animals, loggedIn: req.session.loggedIn });
        res.render('dogs', {
            dogs,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;