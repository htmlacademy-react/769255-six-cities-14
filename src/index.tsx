import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const places = [
  {
    mark: 'Premium',
    image: 'img/apartment-01.jpg',
    price: 120,
    priceText: 'night',
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    id: 1,
  },

  {
    mark: '',
    image: 'img/room.jpg',
    price: 80,
    priceText: 'night',
    name: 'Wood and stone place',
    type: 'Room',
    id: 2,
  },

  {
    mark: '',
    image: 'img/apartment-02.jpg',
    price: 132,
    priceText: 'night',
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    id: 3,
  },

  {
    mark: 'Premium',
    image: 'img/apartment-03.jpg',
    price: 180,
    priceText: 'night',
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    id: 4,
  },
];

root.render(
  <React.StrictMode>
    <App places={places} />
  </React.StrictMode>
);
