console.log("linked");
function castVote() {
  console.log("voting");
fetch('/voting', {
  // get current voteCount
  // increment VC by 1
  // make put req with new VC
  method: "PUT",
  body: JSON.stringify({ id: 2, voteCount: 300 }),
  headers: {
    "Content-Type": "application/json"
  }
})
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('failed to submit Vote')
//     }
//   return response.json();
//   })
//   .then(data => {
//     //handle response from server e.g. update UI 
//   })
// console.log('Vote cast for item with ID ${itemID}');
}

// .catch (error => {
//   console.error('Error:', error);
// });

//document.getElementById("voting-btn2").addEventListener("click", castVote)
$(".voting-btn").on("click",castVote)

// forEach(button => {
//   button.addEventListener("click", function () {
//     const id = selectedItemId;
//     castVote(selectedItemId);
//   });

// });