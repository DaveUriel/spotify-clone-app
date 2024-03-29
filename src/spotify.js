export const authEndpoint = 'https://accounts.spotify.com/authorize';

//USE http://localhost:3000/ when building locally
const redirectUrl = 'https://spotify.daviduriel.com/';
// const redirectUrl = 'http://localhost:3000/';

const clientId = 'd135635eaf3340fea37c415815b79955';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
