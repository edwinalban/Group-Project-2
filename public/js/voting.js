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