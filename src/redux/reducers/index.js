import { combineReducers } from 'redux';

import profile from '@/features/Account/profile';
import videoList from '@/features/videoList';

export default combineReducers({
  profile,
  videoList,
});
