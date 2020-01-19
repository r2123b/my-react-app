import React from 'react';

import Typography from '@material-ui/core/Typography';

const Profile = () => {
  return (
    <>
      <Typography className="text-bold">This is profile page</Typography>
      <div className="d-flex align-center">
        <Typography variant="body1">Name</Typography>
        <Typography variant="body2">Jacky</Typography>
      </div>

      <div className="d-flex align-center">
        <Typography variant="body1">Email</Typography>
        <Typography variant="body2">jacky@gmail.com</Typography>
      </div>
    </>
  );
};

export default Profile;
