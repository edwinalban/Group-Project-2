const router = require('express').Router();
const { Animals } = require('../models');


// View all animals WORKING
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

// View one animal goes to page but no animal renders. NOT WORKING
router.get('/:animal/:id', async (req, res) => {
  try {
      const dbanimalData = await Animals.findByPk(req.params.id, {
      });
      const animals = dbanimalData.get({ plain: true });
      console.log(animals);
      // res.render('allAnimals', { animals, loggedIn: req.session.loggedIn });
      res.render('allanimals', { 
        animals: [animals]
      });
  } catch (err) {
      console.log(err);
      res.status(404).json(err);
  }
});


// View all cats or dogs  WORKING
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