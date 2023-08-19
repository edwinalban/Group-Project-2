const router = require('express').Router();
const { Animals, Comment } = require('../models');
const withAuth = require('../utils/auth');

// View all animals
router.get('/', withAuth, async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
    const dbAnimalsData = await Animals.findAll({
      order: [[ "voteCount", "DESC"]]
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
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/', async (req, res) => {
  console.log("req.body is here", req.body);
  try {
    const dbAnimalsData = await Animals.update({ // takes id, votecount
      voteCount: req.body.voteCount}, {
      where: {id: req.body.id} })
      res.json(dbAnimalsData)
    } catch (err){
      console.log(err)
      res.status(500).json(err);
    }
  
   })

module.exports = router;