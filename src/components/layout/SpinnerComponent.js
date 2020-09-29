import React from 'react';
import spinner from '../../assets/imgs/spinner.gif';

const SpinnerComponent = () => {
  return (
    <>
      <img
        src={spinner}
        alt="loading"
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </>
  );
};

export default SpinnerComponent;
