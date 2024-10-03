'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

const Profile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Profile Loading Maybe...?</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}

export default Profile;