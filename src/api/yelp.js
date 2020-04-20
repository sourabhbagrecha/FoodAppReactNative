import axios from 'axios';
import env from '../secret.json'
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${env.YELP_SECRET}`
  }
});