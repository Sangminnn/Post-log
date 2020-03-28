import axios from 'axios';

export const postRegister = ({ title, content, author }) => axios.post('/api/write/newPost', { title, content, author });
export const loadPost = (id) => axios.get('/api/write/loadPost/' + id);