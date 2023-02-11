import React from 'react';
import Loading from '../Reusables/Loading';
import PathLocation from '../Reusables/PathLocation';

function SolarSystem() {
  return (
    <div>
      <PathLocation />
      <Loading waitFor="Solar system data" />
    </div>
  );
}

export default SolarSystem;