import axios from 'axios';

export const checkEmailExists = async (email) => await axios.get('/api/auth/exists/email/' + email);
export const checkUsernameExists = async (username) => await axios.get('/api/auth/exists/username/' + username);

export const localRegister = async ({ name, email, username, password }) => await axios.post('/api/auth/register/local', { name, email, username, password });
export const localLogin = async ({ email, password }) => await axios.post('/api/auth/login/local', { email, password });

export const socialExists = ({ provider, accessToken }) => axios.post('/api/auth/exists/social/' + provider, { accessToken });
export const socialRegister = ({ name, email, username, provider, accessToken }) => axios.post('/api/auth/register/social', { name, email, username, provider, accessToken });

export const sendAccessToken = async (accessToken) => await axios.post('/api/auth/callback/google', accessToken);

export const checkStatus = async () => await axios.get('/api/auth/check');
export const logout = async () => await axios.post('/api/auth/logout');