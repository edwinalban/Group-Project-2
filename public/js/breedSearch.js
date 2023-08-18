const breedSearchBtn = document.getElementById('search-btn');

// Adds event listener to search button to render view with searched breed data
breedSearchBtn.addEventListener("click", function () {

    window.location.href = `/animals-by-breed/${inputField.value}`;
});