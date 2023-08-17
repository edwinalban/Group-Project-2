const router = require('express').Router();
const { Cat } = require('../models')
const withAuth = require('../utils/auth');

// View all cats
router.get('/', withAuth, async (req, res) => {
    try {
        const dbCatData = await Cat.findAll({
        });
        
        const cats = dbCatData.map((cats) =>
            cats.get({ plain: true }));       
        res.render('cats', {
            cats,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// View one cat
router.get('/:id', withAuth, async (req, res) => {
    try {
        const dbCatData = await Cat.findByPk(req.params.id, {
        });
        const cat = dbCatData.get({ plain: true });
        res.render('cat', {
            cat,
        });
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
});

module.exports = router;