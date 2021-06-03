import React from 'react';
import LoaderComponent from '../../../../base-components/loader-component';

export interface UserLandingProps {
  /**
   * Loading State
   */
  loading: boolean;
}

export const UserLanding = (props: UserLandingProps) => {
  const { loading } = props;

  return <>{loading ? <LoaderComponent loading={loading} /> : <h1>user</h1>}</>;
};
