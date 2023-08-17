const router = require('express').Router();
const { Animals, Comment } = require('../models');


// View all animals
router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
    const dbAnimalsData = await Animals.findAll({
    });
    const comments = await Comment.findAll();
    const newComment = comments.map((comment) => 
    comment.get({ plain: true })
    );

    console.log(dbAnimalsData);
    const animals = dbAnimalsData.map((animals) =>
      animals.get({ plain: true })
    );
    res.render('voting', {
      animals,comments: newComment,
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;