import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((idx) => {
      console.log(`${idx[0].body} ${idx[1].firstName} ${idx[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
