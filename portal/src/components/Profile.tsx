'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react';

const Profile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Profile Loading Maybe...?</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #ccc' }}>
        <h2>{"Here's your account details! LOL"}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}

export default Profile;