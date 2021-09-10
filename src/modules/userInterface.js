import Modal from './ModalInterface.js';

const createShowCard = (show) => `<div class="col">
  <div class="show-card mt-3 mx-auto" data-show-id=${show.id} data-show-name=${show.name}>
    <div class="show-image-holder">
      <img src=${show.image.medium} class="show-image" data-show-id=${show.id} data-show-name=${show.name}>
    </div>
    <div class="d-flex flex-column p-2">
      <div class="mb-3">
        <h3 class="show-title" data-show-id=${show.id} data-show-name=${show.name}>${show.name}</h3>
        <span></span>
      </div>
      <div class="mb-3 mx-auto">
        <button class="comments-btn mx-auto p-2 button" data-show-id=${show.id} data-show-name=${show.name}>Comments</button>
      </div>
      <div class="mb-3 mx-auto">
        <button class="reservation-btn mx-auto p-2 button" data-show-id=${show.id} data-show-name=${show.name}>Reservation</button>
      </div>
    </div>
  </div>
</div>`;

const addShowToPage = (show) => {
  const showCardHolder = document.querySelector('#show-card-holder');
  showCardHolder.innerHTML += createShowCard(show);
};

export const renderShows = (shows) => {
  shows.forEach((show) => {
    addShowToPage(show);
  });
};

export const imageListener = () => {
  const images = document.querySelectorAll('.show-image');
  if (images) {
    images.forEach((image) => {
      image.addEventListener('click', () => {
        Modal.displayModal(image.dataset.showId);
      });
    });
  }
};

export const commentsListener = () => {
  const comments = document.querySelectorAll('.comments-btn');
  if (comments) {
    comments.forEach((button) => {
      button.addEventListener('click', () => {
        Modal.displayModal(button.dataset.showId);
      });
    });
  }
};

export const reservationListener = () => {
  const reservations = document.querySelectorAll('.reservation-btn');
  if (reservations) {
    reservations.forEach((button) => {
      button.addEventListener('click', () => {
        Modal.displayModal(button.dataset.showId);
      });
    });
  }
};
