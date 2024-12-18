import React from 'react';

const Description = ({ description }) => {
  return (
    <div className="mt-3">
      <h5>Descripción</h5>
      <p>{description}</p>
    </div>
  );
};

export default Description;
