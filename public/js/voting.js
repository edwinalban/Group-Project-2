// console.log("linked");
function castVote() {
  console.log("voting");
fetch('/voting', {
  
  // get current voteCount
  // increment VC by 1
  // make put req with new VC
  method: "PUT",
  body: JSON.stringify({ id:1, voteCount: 0}),
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

//document.getElementById("voting-btn2").addEventListener("click", castVote)
$(".voting-btn").on("click",castVote)

//each button should have an id attached now. 




