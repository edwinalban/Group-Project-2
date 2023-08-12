const router = require('express').Router();
const { Cat } = require('../models')

// View all cats
router.get('/', async (req, res) => {
    try {
        const dbCatData = await Cat.findAll({
        });
        
        const cats = dbCatData.map((cats) =>
            cats.get({ plain: true }));
        // res.render('allAnimals', { animals, loggedIn: req.session.loggedIn });
        res.render('cats', {
            cats,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// View one cat
router.get('/:id', async (req, res) => {
    try {
        const dbCatData = await Cat.findByPk(req.params.id, {
        });
        const cat = dbCatData.get({ plain: true });
        // res.render('allAnimals', { animals, loggedIn: req.session.loggedIn });
        res.render('cat', {
            cat,
        });
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
});

module.exports = router;