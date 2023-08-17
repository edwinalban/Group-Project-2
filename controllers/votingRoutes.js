const router = require('express').Router();
const { Animals, Cat, Dog, Comment } = require('../models');




// View all animals
router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
    const dbAnimalsData = await Animals.findAll({
    });
    console.log(dbAnimalsData);
    const animals = dbAnimalsData.map((animals) =>
      animals.get({ plain: true })
    );
    res.render('voting', {
      animals,
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//eventlistener for vote
router.post('/vote', (req, res) => {
  const selectedItemId = req.body.id; //assuming itemID
  castVote(selectedItemId);
  database.updateVoteCount(selectedItemId);
  res.json({ message: "Vote submitted" });
});





module.exports = router;