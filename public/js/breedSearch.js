const breedSearchBtn = document.getElementById('search-btn');

breedSearchBtn.addEventListener("click", function () {

    window.location.href = `/animals-by-breed/${inputField.value}`;
});