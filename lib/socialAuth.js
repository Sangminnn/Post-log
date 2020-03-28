import hello from 'hellojs';
// client id
hello.init({
  facebook: '1178641069146958',
  google: '646814998521-mpbmbvtmkd4oo2ipmqqsf8mt9lmi28oh.apps.googleusercontent.com'
},
  { redirect_uri: 'http://localhost:3000/auth/login/social/callback' }
)

// export const socialAuth = async (provider) => await hello.login(provider).then(res => console.log(res));

export const facebook = async () => await hello.login('facebook', { scope: 'email, public_profile'});
export const google = async () => await hello.login('google', {
  scope: 'https://www.googleapis.com/auth/userinfo.email',
});
// export const googleLogin = (): Promise<*>` => hello.login('google');
