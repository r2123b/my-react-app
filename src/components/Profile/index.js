import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';

import { clearProfile, fetchProfile } from '@/features/Account/profile';

const Profile = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('account');

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
        <Typography variant="body1">{t('Profile.Name')}</Typography>
        <Typography variant="body2">{profile.name}</Typography>
      </div>

      <div className="d-flex align-center">
        <Typography variant="body1">{t('Profile.Email')}</Typography>
        <Typography variant="body2">{profile.email}</Typography>
      </div>
    </>
  );
};

export default Profile;
