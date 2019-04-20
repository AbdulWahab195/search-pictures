import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',   
    headers: {
                Authorization: 'Client-ID ba7e937e9e00944725d4b010d8628c566cbaad7e82ded3e86cf97fc255550025'
             }
});