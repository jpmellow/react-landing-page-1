import React from "react";

export function Jumbotron(props) {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{props.title}</h1>
        <p className="fw-normal">{props.message}</p>
        <button className="btn btn-primary btn-lg">{props.buttonLabel}</button>
      </div>
    </div>
  );
}
