import React from 'react';
import { MetroSpinner } from 'react-spinners-kit';

const LoaderComponent = (props: { loading: boolean }) => {
  const { loading } = props;

  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <MetroSpinner size={50} color='teal' loading={loading} />
      </div>
    </>
  );
};

export default LoaderComponent;
