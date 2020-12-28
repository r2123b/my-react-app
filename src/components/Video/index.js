import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchVideoListCancelled, fetchVideoList } from '@/features/videoList'

const AnnotationComponent = () => {
  const dispatch = useDispatch();

  // on more complex case, use reselect library
  // use useSelector() to fetch data from reducers
  const videos = useSelector(state => state.videoList);

  useEffect(() => {
    // dispatch an action
    dispatch(fetchVideoList({ page: 5, limit: 15 }));

    return () => dispatch(fetchVideoListCancelled());
  }, []);

  return (
    <>
      <div>~~~ This is Video page ~~~</div>
      <div>total videos number is {JSON.stringify(videos.total)}</div>
      <div>videos = {JSON.stringify(videos.data, null, '\t')}</div>
      <div>rawdata = {JSON.stringify(videos, null, '\t')}</div>
    </>
  );
};

export default AnnotationComponent; 