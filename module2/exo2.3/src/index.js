/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

const mainWrapper = document.getElementById('tableWrapper');

const line = document.getElementById('lines').value;
createArrays();

function createArrays() {
    const bulle = document.createElement('h1')
    for (let index = line; index <= 10; index++) {
        bulle.innerHTML += " A " 
    }
    mainWrapper.appendChild(bulle);
}


