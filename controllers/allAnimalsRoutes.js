const router = require('express').Router();
const { Animals, Cat, Dog } = require('../models');


//get allanimals works
router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try{
    const dbAnimalsData = await Animals.findAll({
      include: [
        {
          model: Cat,
          attributes: ['age'],
        },
        {
          model: Dog,
          attributes: ['age'],
        },
      ],
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



//get one cat - right now i'm getting the cat handlebars, but not populated data
router.get('/cat/:id', async (req, res) => {
  try {
    const dbCatData = await Cat.findByPk(req.params.id, {
    });

    const cat = dbCatData.get({ plain: true });
    // res.render('allAnimals', { animals, loggedIn: req.session.loggedIn });
    res.render('cats', {cat});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get one dog - same status as cat right now. 
router.get('/dog/:id', async (req, res) => {
  try {
    const dbDogData = await Dog.findByPk(req.params.id, {
    });

    const dog = dbDogData.get({ plain: true });
    // res.render('allAnimals', { animals, loggedIn: req.session.loggedIn });
    res.render('dogs', {dog});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;