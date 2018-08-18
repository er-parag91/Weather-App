import React from 'react';

const form = props => {
  return (
    <form onSubmit={props.clicked}>
      <input type="text" name="city" placeholder="City.." />
      <input type="text" name="country" placeholder="Country.." />
      <button>Get Weather</button>
    </form>
  );
};
export default form;
