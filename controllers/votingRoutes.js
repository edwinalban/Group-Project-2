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
app.post('/vote', (req, res) => {
  const selectedItemId = req.body.itemId; //assuming itemID
  castVote(selectedItemId);
  res.json({ message: "Vote submitted" });
});

function castVote(itemID) {
  console.log('Vote caste for item with ID ${itemID}');
}
document.querySelectorAll(".vote-button").forEach(button => {
  button.addEventListener("click", function () {
    const itemId = selectedItemId;
    castVote(itemId);
  });
});

//eventListener for comment submission
document.getElementById("comment-submit-btn").addEventListener("click", function(event){
  event.preventDefault();
  const userInput= document.getElementById("user-input").ariaValueMax; 
  submitComment(userInput);
});




module.exports = router;