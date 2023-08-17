const router = require('express').Router();
const { Animals } = require('../models');

router.get('/:breed', async (req, res) => {
    try {
        const dbBreedData = await Animals.findAll ({
            where: {
                breed: req.params.breed
            }
        })
        const animal = dbBreedData.map((animal) =>
        animal.get({plain: true})
        );
        console.log(animal);
        res.render('breed', {
            animal,
        });
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
});

module.exports = router;