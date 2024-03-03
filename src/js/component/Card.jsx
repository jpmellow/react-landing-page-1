import React from "react";

export function Card({ imageSrc, title, description }) {
  return (
    <div className="card" style={{ width: "400px" }}>
      <img src={imageSrc} className="card-img-top" alt="..." />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" class="btn btn-primary">
          Find out more!
        </a>
      </div>
    </div>
  );
}
