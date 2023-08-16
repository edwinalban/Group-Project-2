let predictionary = Predictionary.instance();
predictionary.addWords(['Long Hair Tabby', 'Calico', 'Short Hair', 'Chihuahua', 'German Shepard', 'German Shepard/Pitt', 'Husky']);
// let suggestions = predictionary.predict('lo', 'ca');
// console.log(suggestions);

document.querySelector('.search-wrapper').children[0].addEventListener("input", (e) => {
    let suggestions = predictionary.predict(e.target.value);

    renderSuggestions(suggestions);
});

const renderSuggestions = (suggestionsArr) => {
    const navbar = document.querySelector('.navbar');
    const suggestionsWrapper = document.createElement('div');
    const suggestionsUL = document.createElement('ul');
    suggestionsUL.setAttribute("style", "padding: 0");

    for (i = 0; i < suggestionsArr.length; i++) {
        let suggestionsListItem = document.createElement('li');
        suggestionsListItem.setAttribute("style", "list-style: none")
        suggestionsListItem.textContent = suggestionsArr[i];
        suggestionsUL.append(suggestionsListItem);
    }
    
    suggestionsWrapper.id = "suggestion-box";
    navbar.append(suggestionsWrapper);
    suggestionsWrapper.append(suggestionsUL);

    suggestionsWrapper.addEventListener("click", (e) => {
        document.querySelector('.search-wrapper').children[0].value = e.target.textContent;
        document.querySelector('.navbar').children[2].remove();
    });
};

document.querySelector('.search-wrapper').children[1].addEventListener("click", () => {
    
})