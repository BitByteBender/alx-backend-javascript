/* eslint-disable */
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then(([photoRes, usrRes]) => {
      console.log(`${photoRes.body} ${photoRes.firstName} ${usrRes.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
