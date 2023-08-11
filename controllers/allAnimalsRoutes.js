const router = require('express').Router();
const { Animals, Cat, Dog } = require('../models');

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try{
    const dbAnimalsData = await Animals.findAll({
      include: [
        {
          model: Animals,
          attributes: [
            'name',
            'age',
          ],
        },
      ],
    });
    const animals = dbAnimalsData.map((animals) => 
    animals.get({ plain: true })
    );
    res.render('allAnimals', {
      animals,
      loggedIn: req.session.loggedIn,
    });
  } catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

//get all animals

//get one animal
router.get('/allAnimals/:id', async (req, res) => {
  try {
    const dbAnimalsData = await Animals.findByPk(req.params.id, {
      include: [
        {
          model: {Animals, Cat, Dog}, //trying out from multiple models
          attributes: [
            'id',
            'name',
            'age',
            'sex',
            'breed',
            'specialNeeds',
            'location',
            'favUsers',
            'voteCount',
          ],
        },
      ],
    });

    const animals = dbAnimalsData.get({ plain: true });
    res.render('allAnimals', { animals, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;