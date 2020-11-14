export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   'BQDganxFcgGi78cyVQfhAi-tgPNW-Wb6atO4dMG9gmGvpKHPzx_iF_nOGiYhWXaLmrWdrTti5Hblq-WHoxFsXFFFMM8q6hQ_yfiALu9q8Kw14v-yU3yzwfT438tQ2iAonOMDpjeecscyZvDQYSwk7BZtW72ocHuTwQ',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
