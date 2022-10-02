import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

// import d'une image
import ringImage from './img/Le-Seigneur-des-Anneaux-Le-retour-du-roi.jpg';

const mainWrapper = document.querySelector('main');


// creation et insertion d'une image et de son titre
const image1 = document.createElement('img');
const h1 = document.createElement('h1');


//  changement de propriete
h1.innerText = 'Le Seigneur des anneaux : Le retour du Roi';
image1.src = ringImage;

mainWrapper.appendChild(h1);
mainWrapper.appendChild(image1);