import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchVideoListCancelled, fetchVideoList } from '@/features/videoList'

const AnnotationComponent = () => {
  const dispatch = useDispatch();

  // on more complex case, use reselect library
  // use useSelector() to get response data from 
  const videos = useSelector(state => state.video);

  useEffect(() => {
    dispatch(fetchVideoList({ page: 1, limit: 10 }));

    return () => dispatch(fetchVideoListCancelled());
  }, []);

  return (
    <>
      <div>This is Annotatioin page</div>
      <div>{JSON.stringify(videos)}</div>
    </>
    );
};

export default AnnotationComponent; 