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

function castVote(id)
fetch('/vote', {
  method: 'POST',
  body: JSON.stringify({ id })
})
  .then(response => {
    if (!response.ok) {
      throw new Error('failed to submit Vote')
    }
  return response.json();
  })
  .then(data => {
    //handle response from server e.g. update UI 
  })
console.log('Vote cast for item with ID ${itemID}');

// .catch (error => {
//   console.error('Error:', error);
// });

document.querySelectorAll(".vote-button").forEach(button => {
  button.addEventListener("click", function () {
    const id = selectedItemId;
    castVote(selectedItemIdid);
  });

});



//eventListener for comment submission
document.getElementById("comment-submit-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const userInput = document.getElementById("user-input").ariaValueMax;
  submitComment(userInput);
});




module.exports = router;