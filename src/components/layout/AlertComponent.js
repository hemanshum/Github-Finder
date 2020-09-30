import React from 'react';

const AlertComponent = ({ alert }) => {
  return (
    <>
      {alert !== null ? (
        <div className={`alert alert-${alert.type}`}>
          <i className="fa fa-info-circle"></i> {alert.msg}
        </div>
      ) : null}
    </>
  );
};

export default AlertComponent;
