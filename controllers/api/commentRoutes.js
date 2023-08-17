const { Comment } = require('../../models')
const router = require('express').Router()

router.post('/', async (req, res) => {
    console.log("trying to post", req.body);
    try {
        const newComment = await Comment.create({
            comment: req.body.comment, 
        // user_id: req.session.user_id
    });
        if (!newComment) {
            res.status(404).json({ message: "cannot create new post" })
        }
        res.status(200).json({ newComment })
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    try{
      const commentsData = await Comment.findAll({
      });
      console.log(commentsData);
      const comments = commentsData.map((comments) => 
      comments.get({ plain: true })
      );
      res.render('voting', {
        comments,
        // loggedIn: req.session.loggedIn,
      });
    } catch(err){
      console.log(err);
      res.status(500).json(err);
    }
  });



module.exports = router