import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import "./Loading.css"

const Loader = () => {
  const [loading, setLoading] = useState(true); // State to manage loading

  // Simulating loading for demonstration purposes
  setTimeout(() => {
    setLoading(false);
  }, 3000); // Simulate a 3-second loading time

  const color = '#00541A'; // Define color
  const override = `
    display: block;
    margin: 0 auto;
    align-items: center;
    text-align: center;
  `; // Define CSS override

  return (
    <div className='loading'>
      {loading ? (
        <ClipLoader
          color={color}
          loading={loading}
          css={override} // Use css prop instead of cssOverride
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : null}
    </div>
  );
};

export default Loader;

