// Function to get current vote count, add vote to count when button is clicked
async function castVote() {
  const id = $(this).attr("id");
  const voteCount = parseInt($(`#vote${id}`).text()) + 1;
  await fetch('/voting', {
    method: "PUT",
    body: JSON.stringify({ id, voteCount }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  window.location.href = '/voting'

}

$(".voting-btn").on("click", castVote)






