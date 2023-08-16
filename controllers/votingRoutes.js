const router = require('express').Router();
const { Animals, Cat, Dog, Comment } = require('../models');




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
    const dbCommentsData = await Comment.findAll();
    const comments = dbCommentsData.map((comments) =>
    comments.get({ plain: true })
    );
    console.log(comments)
    console.log(dbAnimalsData);
    const animals = dbAnimalsData.map((animals) => 
    animals.get({ plain: true })
    );
    res.render('voting', {
      animals,comments
      // loggedIn: req.session.loggedIn,
    });
  } catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});






module.exports = router;