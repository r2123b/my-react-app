import { ofType } from 'redux-observable';

import { of } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';

import { createSlice } from '@reduxjs/toolkit';

import * as backend from '@/apis/backend';

const initialState = { data: [], page: 0, limit: 10, total: 0 };

const slice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    fetchVideoList: () => {},
    fetchVideoListFulfilled: (state, action) => {
      const { total } = action.payload;
      state.total = total
    },
    fetchVideoListRejected: (state, action) => {
      return state;
    },
    fetchVideoListCancelled: () => initialState,
  },
});

export const epics = {
    fetchVideoList: (action$, state$, action) => {
    const { page = 0, limit = 0 } = action.payload;
    return backend.getVideoList({ page, limit }).pipe(
      map(response => fetchVideoListFulfilled(response)),
      takeUntil(action$.pipe(ofType(fetchVideoListCancelled.type))),
      catchError(error => of(fetchVideoListRejected(error))),
    );
  },
};

export const {
    fetchVideoList,
    fetchVideoListFulfilled,
    fetchVideoListRejected,
    fetchVideoListCancelled
} = slice.actions;

export default slice.reducer;