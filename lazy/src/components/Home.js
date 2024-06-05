import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => {
          import("../utils/index").then(module => {
            alert(module.sum(1 ,1))
          })

      }}>
        +
      </button>
    </div>
  );
}

export default Home;
