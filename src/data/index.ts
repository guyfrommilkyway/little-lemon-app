// assets below
import GreekSalad from '@/assets/salad.jpg';
import Bruchetta from '@/assets/bruchetta.png';
import Dessert from '@/assets/dessert.jpg';

export const NAV_DATA = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '#' },
  { name: 'Menu', to: '#' },
  { name: 'Reservations', to: '#' },
  { name: 'Order Online', to: '#' },
  { name: 'Login', to: '#' },
];

export const ABOUT_DATA = {
  heading: 'Little Lemon',
  subHeading: 'Chicago',
  description:
    'We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.',
  buttonText: 'Reserve a Table',
};

export const FOOD_DATA = [
  {
    name: 'Greek Salad',
    price: '12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    imageURL: GreekSalad,
  },
  {
    name: 'Bruchetta',
    price: '5.99',
    description:
      'Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    imageURL: Bruchetta,
  },
  {
    name: 'Lemon Dessert',
    price: '5.00',
    description:
      'This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    imageURL: Dessert,
  },
];

export const CONTACT_DATA = [
  {
    name: '123 Main Street Chicago, IL 60601 USA',
    to: '',
  },
  {
    name: '(312) 555-1234',
    to: '',
  },
  {
    name: 'support@littlelemon.com',
    to: '',
  },
];

export const SOCIAL_DATA = [
  {
    name: 'Facebook',
    to: '',
  },
  {
    name: 'Instagram',
    to: '',
  },
  {
    name: 'Tiktok',
    to: '',
  },
  {
    name: 'Twitter',
    to: '',
  },
];
