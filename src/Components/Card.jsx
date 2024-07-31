import React from "react";
import "../Style/card.css";

function Card({ name, country, domain, webpages }) {
  return (
    <div id="card">
      <h2>Title</h2>
      <div className="details">
        <p>
          <b>Name :</b>
          <i> {name}</i>
        </p>
        <p>
          <b>Country : </b>
          {country}
        </p>

        <p>
          <b>Domains :</b>
          <u>{domain}</u>
        </p>
        <p>
          <b>Web pages : </b>
          {webpages}
        </p>
      </div>
      <button>
        <a href={{ webpages }} target="_blank">
          Go to
        </a>
      </button>
    </div>
  );
}

export default Card;
