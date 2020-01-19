import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';

import { clearProfile, fetchProfile } from '@/features/Account/profile';

const Profile = () => {
  const dispatch = useDispatch();

  // on more complex case, use reselect library
  const profile = useSelector(state => state.profile);

  useEffect(() => {
    dispatch(fetchProfile());

    return () => dispatch(clearProfile());
  }, []);

  return (
    <>
      <Typography className="text-bold">This is profile page</Typography>
      <div className="d-flex align-center">
        <Typography variant="body1">Name</Typography>
        <Typography variant="body2">{profile.name}</Typography>
      </div>

      <div className="d-flex align-center">
        <Typography variant="body1">Email</Typography>
        <Typography variant="body2">{profile.email}</Typography>
      </div>
    </>
  );
};

export default Profile;
