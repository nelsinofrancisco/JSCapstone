import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';
import './styles.css';
import popularShows from './modules/getShows.js';
import {
  imageListener, renderShows, commentsListener, reservationListener,
} from './modules/userInterface.js';

document.addEventListener('DOMContentLoaded', async () => {
  popularShows().then((result) => {
    renderShows(result);
  }).then(() => {
    imageListener();
    commentsListener();
    reservationListener();
  });
});

// This Branch will receive all of my work
