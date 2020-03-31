import axios from 'axios';

export const loadPosts = async () => await axios.get('/api/write/loadPosts');