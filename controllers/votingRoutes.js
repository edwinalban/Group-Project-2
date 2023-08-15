const router = require('express').Router();
const { Animals, Cat, Dog, Comment } = require('../models');

//view comments
router.get('/', async (req,res) => {
  try{
    const dbCommentsData = await Comment.findAll({
      // include: [
      //   {
      //     model: Comment,
      //     attributes: ['comment'],
      //   },
      // ],
    });
    const comments = dbCommentsData.map((comments) =>
    comments.get({ plain: true })
    );
  res.render('voting', {
    comments,
  
  });
} catch(err){
  res.status(500).json(err);}

});

// View all animals
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
    res.render('voting', {
      animals,
      // loggedIn: req.session.loggedIn,
    });
  } catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});




module.exports = router;