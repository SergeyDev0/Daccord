import React from "react";

const Loader = () => {
  const loaderRef = React.useRef();

  window.onload = () => {
    loaderRef.current.querySelector('.loader__progress-bar').classList.add('active');
    setTimeout(() => {
      loaderRef.current.classList.add('hide');
    }, 1500)
  };

  return (
    <>
      <div ref={loaderRef} className="loader">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png"
            width={140}
            height={140}
          />
        </div>
        <div className="loader__bar">
          <div className="loader__progress-bar"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
