// console.log("linked");
function castVote() {

  fetch('/voting', {

    // get current voteCount
    method: "GET",
    body: { id, voteCount },
    headers: {
      "Content-Type": "application/json"
    },
    // increment VC by 1

    method: "PUT",
    body: JSON.stringify({ id, voteCount }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  // const currentVote = this.voteCount;
  // currentVote.addEventListener("click", currentVote++);
  // alert("Thank you for voting!");

}

// .catch (error => {
//   console.error('Error:', error);
// });


$(".voting-btn").on("click", castVote)






