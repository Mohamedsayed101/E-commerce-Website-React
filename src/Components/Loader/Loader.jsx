import React from "react";

export default function Loader() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh"}}
      >
        <span className="loader"></span>
      </div>
    </>
  );
}
