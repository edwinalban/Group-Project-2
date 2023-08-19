const router = require('express').Router();
const { Animals } = require('../models');
const withAuth = require('../utils/auth');

// View all animals
router.get('/', withAuth, async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try{
    const dbAnimalsData = await Animals.findAll({
    });
    console.log(dbAnimalsData);
    const animals = dbAnimalsData.map((animals) => 
    animals.get({ plain: true })
    );
    res.render('allAnimals', {
      animals,
    
    });
  } catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

// View one animal
router.get('/:animal/:id', withAuth, async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
      const dbanimalData = await Animals.findByPk(req.params.id, {
      });
      const animals = dbanimalData.get({ plain: true });
      console.log(animals);
      res.render('allanimals', { 
        animals: [animals]
      });
  } catch (err) {
      console.log(err);
      res.status(404).json(err);
  }
});


// View all cats or dogs
router.get('/:animal', withAuth, async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try{
    const dbAnimalsData = await Animals.findAll({
      where: {
        animalType: req.params.animal
      }
    });
    
    console.log(dbAnimalsData);
    const animals = dbAnimalsData.map((animals) => 
    animals.get({ plain: true })
    );
    res.render('allAnimals', {
      animals,
    });
  } catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;