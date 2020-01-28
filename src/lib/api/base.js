import axios from 'axios';

export const loadPosts = () => axios.get('/api/write/loadPosts');