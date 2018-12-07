import axios from 'axios';
export const getImageURLs = count => axios.get('https://cors.io/?https://shibe.online/api/shibes',{count});