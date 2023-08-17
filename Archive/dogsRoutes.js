const router = require('express').Router();
const { Dog } = require('../models')
const withAuth = require('../utils/auth');

// Get all dogs
router.get('/', withAuth, async (req, res) => {
    try {
        const dbDogData = await Dog.findAll({
        });

        const dogs = dbDogData.map((dogs) =>
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

//get one dog - same status as cat right now. 
router.get('/:id', withAuth, async (req, res) => {
    try {
        const dbDogData = await Dog.findByPk(req.params.id, {
        });

        const dog = dbDogData.get({ plain: true });
        // res.render('allAnimals', { animals, loggedIn: req.session.loggedIn });
        res.render('dog', {
            dog
        });
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
});

module.exports = router;