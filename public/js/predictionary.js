// Sets up words for autocomplete dictionary
let predictionary = Predictionary.instance();
predictionary.addWords(['Tabby', 'Calico', 'Grey', 'Chihuahua', 'Shepard', 'Husky']);

const inputField = document.querySelector('.search-wrapper').children[0];

// Sets up event listener for text typed into field
inputField.addEventListener("input", (e) => {
    let suggestions = predictionary.predict(e.target.value);

    renderSuggestions(suggestions);
});

// displays list of autocomplete suggestions 
const renderSuggestions = (suggestionsArr) => {
    if (document.querySelector('.navbar').children[2]) {
        document.querySelector('.navbar').children[2].remove();
    }

    if (!suggestionsArr.length) {
        return
    }

    if (!inputField.value) {
        return
    }

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

// Adds selected option to input field for search and removes suggestions from view on click
    suggestionsWrapper.addEventListener("click", (e) => {
        inputField.value = e.target.textContent;
        document.querySelector('.navbar').children[2].remove();
    });
};