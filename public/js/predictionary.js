import Predictionary from 'predictionary'

let predictionary = Predictionary.instance();
predictionary.addWords(['Long Hair Tabby', 'Calico', 'Short Hair', 'Chihuahua', 'German Shepard', 'German Shepard/Pitt', 'Husky']);
let suggestions = predictionary.predict('ap'); // == ['apple', 'apricot'];