// import Config from './config';

// const ApiEndpoint = {
//   REGISTER: `${Config.BASE_URL}/register`,
//   LOGIN: `${Config.BASE_URL}/login`,
// };

// export default ApiEndpoint;
import Config from './config';

const ApiEndpoint = {
  REGISTER: '/register',
  LOGIN: '/login',

  ADD_NEW_STORY: `${Config.BASE_URL}/stories`,

  GET_ALL_STORIES: '/stories',
};

export default ApiEndpoint;
