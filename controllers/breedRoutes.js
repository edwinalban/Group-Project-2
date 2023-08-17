const router = require('express').Router();
const { Animals } = require('../models');

router.get('/:breed', async (req, res) => {
    try {
        const dbBreedData = await Animals.findAll ({
            where: {
                breed: req.params.breed
            }
        })
        const animals = dbBreedData.map((animals) =>
        animals.get({plain: true})
        );
        console.log(animals);
        res.render('breed', {
            animals,
        });
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
});

module.exports = router;