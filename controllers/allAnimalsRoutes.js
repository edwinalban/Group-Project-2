const router = require('express').Router();
const { Animals, Cat, Dog } = require('../models');


// View all animals
router.get('/', async (req, res) => {
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
      // loggedIn: req.session.loggedIn,
    });
  } catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

// View one animal
router.get('/:animal/:id', async (req, res) => {
  try {
      const dbanimalData = await Animals.findByPk(req.params.id, {
      });
      const animal = dbanimalData.get({ plain: true });
      console.log(animal);
      // res.render('allAnimals', { animals, loggedIn: req.session.loggedIn });
      res.render('allanimals', {
          animal,
      });
  } catch (err) {
      console.log(err);
      res.status(404).json(err);
  }
});


// View all cats or dogs
router.get('/:animal', async (req, res) => {
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
      // loggedIn: req.session.loggedIn,
    });
  } catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;