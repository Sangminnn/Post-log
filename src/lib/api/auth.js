import axios from 'axios';

export const checkEmailExists = (email) => axios.get('/api/auth/exists/email/' + email);
export const checkUsernameExists = (username) => axios.get('/api/auth/exists/username/' + username);

export const localRegister = ({ name, email, username, password }) => axios.post('/api/auth/register/local', { name, email, username, password });
export const localLogin = ({ email, password }) => axios.post('/api/auth/login/local', { email, password });

export const socialExists = ({ provider, accessToken }) => axios.post('/api/auth/exists/social/' + provider, { accessToken });
export const socialRegister = ({ name, email, username, provider, accessToken }) => axios.post('/api/auth/register/social', { name, email, username, provider, accessToken });
// export const getSocialProfile = ({ accessToken, provider }) => axios.post('/api/auth/login/google', { accessToken, provider });

// export const getSocialProfile = () => axios.get('/api/auth/login')

export const checkStatus = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');