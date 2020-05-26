import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.unsplash.com/',
   headers: { 
      Authorization: `Client-ID 4rck814Vk6fHTTlK7SZExJRzKSqZZYVJV2ZY665z_Eg` 
   }
});