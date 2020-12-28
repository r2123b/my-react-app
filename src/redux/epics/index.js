import { combineEpics } from 'redux-observable';

import * as profile from '@/features/Account/profile';
import * as videoList from '@/features/videoList';
import { getEpicsFromSlices } from '@/utils/redux.js';

export default combineEpics(
  ...getEpicsFromSlices([
    // Account
    profile,
    // Video
    videoList,
  ]),
);
